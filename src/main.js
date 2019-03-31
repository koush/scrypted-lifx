var LifxClient = require('node-lifx').Client;
var client = new LifxClient();
import sdk from '@scrypted/sdk';
const { deviceManager, log } = sdk;

function LifxDevice(light, device) {
  this.light = light;
  this.device = device;
  this.state = deviceManager.getDeviceState(this.light.id);

  this.refresher = (err) => this.refresh();

  // wait for this device to be synced, then report the current state.
  setImmediate(() => this.refresh());
}

const StateSetters = {
  OnOff: function (s, state) {
    state.on = !!(s && s.power);
  },
  Brightness: function (s, state) {
    state.brightness = (s && s.color && s.color.brightness) || 0;
  },
  ColorSettingTemperature: function(s, state) {
    state.colorTemperature = (s && s.color && s.color.kelvin) || 0;
  },
  ColorSettingHsv: function(st, state) {
    var h = (st && st.color && st.color.hue) || 0;
    var s = ((st && st.color && st.color.saturation) || 0) / 100;
    var v = ((st && st.color && st.color.brightness) || 0) / 100;
    state.hsv = { h, s, v };
  },
}

LifxDevice.prototype.refresh = function() {
  this._refresh();
}

LifxDevice.prototype.getRefreshFrequency = function() {
  return 5;
}

LifxDevice.prototype._refresh = function (cb) {
  this.light.getState((err, state) => {
    if (state) {
      for (var event of this.device.events) {
        StateSetters[event](state, this.state);
      }
    }
    if (cb) {
      cb(err);
    }
  });
}

// setters

LifxDevice.prototype.turnOn = function () {
  this.light.on(0, this.refresher);
}

LifxDevice.prototype.turnOff = function () {
  this.light.off(0, this.refresher);
}

LifxDevice.prototype.setLevel = function (level) {
  this.light.getState((err, state) => {
    var color = state.color;
    this.light.color(color.hue, color.saturation, level, color.kelvin, this.refresher);
  })
}

LifxDevice.prototype.setTemperature = function (kelvin) {
  this.light.color(0, 0, 100, kelvin, undefined, this.refresher);
}

LifxDevice.prototype.setHsv = function (h, s, v) {
  this.light.color(h, Math.round(s * 100), Math.round(v * 100), undefined, undefined, this.refresher);
}

LifxDevice.prototype.getTemperatureMinK = function () {
  return 2500;
}

LifxDevice.prototype.getTemperatureMaxK = function () {
  return 9000;
}

function LifxController() {
  this.lights = {};
}

LifxController.prototype.getDevice = function (id) {
  return this.lights[id];
}

LifxController.prototype.newLight = function (light) {
  light.getHardwareVersion((err, data) => {
    if (err) {
      log.e(`unable to get product version: ${err}`);
      return;
    }

    // these are the interfaces (capabilities) provided by this bulb
    var interfaces = ['OnOff', 'Brightness'];
    if (data.productFeatures && data.productFeatures.color) {
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

    var info = {
      name: data.productName,
      nativeId: light.id,
      interfaces: interfaces,
      events: events,
      type: 'Light',
    };
    log.i(`light found: ${JSON.stringify(info)}`);

    var device = this.lights[light.id] = new LifxDevice(light, info);
    deviceManager.onDeviceDiscovered(info);
  });
}

var lifxController = new LifxController();

client.on('light-new', lifxController.newLight.bind(lifxController));
client.init();
setTimeout(() => {
  client.stopDiscovery();
}, 30000)


export default lifxController;