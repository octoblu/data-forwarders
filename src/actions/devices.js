import * as types from '../constants/action-types';

module.exports.subscribeDevice = function(device) {
  return { type: types.SUBSCRIBE_DEVICE, device };
};

module.exports.unsubscribeDevice = function(device) {
  return { type: types.UNSUBSCRIBE_DEVICE, device };
};

module.exports.subscribeAllDevices = function(devices) {
  return { type: types.SUBSCRIBE_ALL_DEVICES, devices };
};

module.exports.unsubscribeAllDevices = function() {
  return { type: types.UNSUBSCRIBE_ALL_DEVICES };
};
