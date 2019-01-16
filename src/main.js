require('scrypted-deploy/polyfill/buffer');
var LifxClient = require('node-lifx').Client;
var client = new LifxClient();

function VirtualDevice(light) {
  this.light = light;
}


VirtualDevice.prototype.turnOn = function() {
  this.light.on();
}

VirtualDevice.prototype.turnOff = function() {
  this.light.off();
}

VirtualDevice.prototype.setLevel = function(level) {
  this.light.maxIR(level);
}

// need to implement state polling or something
VirtualDevice.prototype.isOn = function() {
  return false;
}

VirtualDevice.prototype.getLevel = function() {
  return 0;
}

VirtualDevice.prototype.supportsSpectrumRgb = function() {
  return true;
}

VirtualDevice.prototype.supportsSpectrumHsv = function() {
  return true;
}

VirtualDevice.prototype.supportsTemperature = function() {
  return true;
}

VirtualDevice.prototype.getTemperatureMinK = function() {
  return 2500;
}

VirtualDevice.prototype.getTemperatureMaxK = function() {
  return 9000;
}

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

VirtualDevice.prototype.setRgb = function(r, g, b) {
  this.light.colorRgbHex(rgbToHex(r, g, b));
}

VirtualDevice.prototype.setHsv = function(h, s, v) {
  this.light.color(h, Math.round(s * 100), Math.round(v * 100));
}

function DeviceProvider() {
  this.lights = {};
}

DeviceProvider.prototype.getDevice = function(id) {
  var light = this.lights[id];
  if (light) {
    return new VirtualDevice(light);
  }
}

DeviceProvider.prototype.newLight = function(light) {
  light.getHardwareVersion((err, data) => {
    if (err) {
      log.e(`unable to get product version: ${err}`);
      return;
    }

    var interfaces = ['OnOff', 'Brightness'];
    if (data.productFeatures && data.productFeatures.color) {
      interfaces.push('ColorSetting');
    }

    this.lights[light.id] = light;
    var info = {
      name: data.productName,
      id: light.id,
      interfaces: interfaces,
      type: 'Light',
    };
    log.i(`light found: ${JSON.stringify(info)}`);
    deviceManager.onDeviceDiscovered(info);
  });
}

var deviceProvider = new DeviceProvider();

client.on('light-new', deviceProvider.newLight.bind(deviceProvider));
client.init();


export default deviceProvider;