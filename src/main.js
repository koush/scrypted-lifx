var LifxClient = require('node-lifx').Client;
var client = new LifxClient();

function VirtualDevice(light, events) {
  this.light = light;
  this.events = events;

  this.refresher = (err) => this.refresh();
}

// h, s, v are all expected to be between 0 and 1.
// the h value expected by scrypted (and google and homekit) is between 0 and 360.
function HSVtoRGB(h, s, v) {
  var r, g, b, i, f, p, q, t;
  if (arguments.length === 1) {
    s = h.s, v = h.v, h = h.h;
  }
  i = Math.floor(h * 6);
  f = h * 6 - i;
  p = v * (1 - s);
  q = v * (1 - f * s);
  t = v * (1 - (1 - f) * s);
  switch (i % 6) {
    case 0: r = v, g = t, b = p; break;
    case 1: r = q, g = v, b = p; break;
    case 2: r = p, g = v, b = t; break;
    case 3: r = p, g = q, b = v; break;
    case 4: r = t, g = p, b = v; break;
    case 5: r = v, g = p, b = q; break;
  }
  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255)
  };
}

const States = {
  OnOff: function (s) {
    return !!(s && s.power);
  },
  Brightness: function (s) {
    return (s && s.color && s.color.brightness) || 0;
  },
  ColorSettingTemperature: function(s) {
    return (s && s.color && s.color.kelvin) || 0;
  },
  ColorSettingHsv: function(st) {
    var h = (st && st.color && st.color.hue) || 0;
    var s = ((st && st.color && st.color.saturation) || 0) / 100;
    var v = ((st && st.color && st.color.brightness) || 0) / 100;
    return { h, s, v };
  },
  ColorSettingRgb: function(s) {
    var { h, s, v } = States.ColorSettingHsv(s);
    var { r, g, b } = HSVtoRGB(h / 360, s, v);
    return { r, g, b };
  }
}

VirtualDevice.prototype.refresh = function (cb) {
  this.light.getState((err, state) => {
    if (state) {
      var oldState = this.state;
      this.state = state;

      // prevent events from being fired on startup (oldState is not defined)
      if (oldState) {
        for (var stateGetter of this.events) {
          var newValue = States[stateGetter](state);
          // don't bother detecting if the state has not changed. denoising will be done
          // at the platform level. this is also necessary for external calls to
          // listen for set events, even if nothing has changed.
          deviceManager.onDeviceEvent(this.light.id, stateGetter, newValue)
        }
      }
    }
    if (cb) {
      cb(err);
    }
  });
}

// setters

VirtualDevice.prototype.turnOn = function () {
  this.light.on(0, this.refresher);
}

VirtualDevice.prototype.turnOff = function () {
  this.light.off(0, this.refresher);
}

VirtualDevice.prototype.setLevel = function (level) {
  this.light.getState((err, state) => {
    var color = state.color;
    this.light.color(color.hue, color.saturation, level, color.kelvin, this.refresher);
  })
}

VirtualDevice.prototype.setTemperature = function (kelvin) {
  this.light.color(0, 0, 100, kelvin, undefined, this.refresher);
}


VirtualDevice.prototype.setRgb = function (r, g, b) {
  this.light.colorRgb(r, g, b, undefined, this.refresher);
}

VirtualDevice.prototype.setHsv = function (h, s, v) {
  this.light.color(h, Math.round(s * 100), Math.round(v * 100), undefined, undefined, this.refresher);
}

// getters

VirtualDevice.prototype.isOn = function () {
  return States.OnOff(this.state);
}

VirtualDevice.prototype.getLevel = function () {
  return States.Brightness(this.state);
}

VirtualDevice.prototype.supportsSpectrumRgb = function () {
  return true;
}

VirtualDevice.prototype.supportsSpectrumHsv = function () {
  return true;
}

VirtualDevice.prototype.supportsTemperature = function () {
  return true;
}

VirtualDevice.prototype.getTemperatureMinK = function () {
  return 2500;
}

VirtualDevice.prototype.getTemperatureMaxK = function () {
  return 9000;
}
VirtualDevice.prototype.getRgb = function () {
  return States.ColorSettingRgb(this.state);
}

VirtualDevice.prototype.getHsv = function () {
  return States.ColorSettingHsv(this.state);
}

VirtualDevice.prototype.getTemperature = function () {
  return States.ColorSettingTemperature(this.state);
}

function DeviceProvider() {
  this.lights = {};
}

DeviceProvider.prototype.getDevice = function (id) {
  return this.lights[id];
}

DeviceProvider.prototype.newLight = function (light) {
  light.getHardwareVersion((err, data) => {
    if (err) {
      log.e(`unable to get product version: ${err}`);
      return;
    }

    // these are the interfaces (capabilities) provided by this bulb
    var interfaces = ['OnOff', 'Brightness'];
    if (data.productFeatures && data.productFeatures.color) {
      interfaces.push('ColorSettingRgb');
      interfaces.push('ColorSettingHsv');
      interfaces.push('ColorSettingTemperature');
    }
    // events are optional, and lifx bulbs are reliant on polling (more below on this).
    // so control through the lifx app itself may not trigger an event,
    // but events should be triggered when the lifx bulb finishes setting a value.
    var events = interfaces.slice();

    // as mentioned above, lifx bulbs require polling to get their state. it is not
    // actively pushed to the controller. implementing the Refresh interface allows
    // Scrypted to poll the device intelligently: such as when the UI is visible,
    // or HomeKit/Google requests a sync and needs updated state.
    interfaces.push('Refresh');

    var device = this.lights[light.id] = new VirtualDevice(light, events);
    var info = {
      name: data.productName,
      id: light.id,
      interfaces: interfaces,
      events: events,
      type: 'Light',
    };
    log.i(`light found: ${JSON.stringify(info)}`);
    device.refresh(() => deviceManager.onDeviceDiscovered(info));
  });
}

var deviceProvider = new DeviceProvider();

client.on('light-new', deviceProvider.newLight.bind(deviceProvider));
client.init();


export default deviceProvider;