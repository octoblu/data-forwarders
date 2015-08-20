var types = require('../constants/action-types');
var meshblu = require('meshblu');

var fetchDevicesRequest = module.exports.fetchDevicesRequest = function() {
  return {
    type: types.FETCH_DEVICES_REQUEST
  };
};

var fetchDevicesSuccess = module.exports.fetchDevicesSuccess = function(devices) {
  return {
    type: types.FETCH_DEVICES_SUCCESS,
    devices: devices
  };
};

module.exports.fetchDevices = function() {
  return function(dispatch) {
    dispatch(fetchDevicesRequest());

    var meshbluConnection = meshblu.createConnection({
      uuid: "64e47761-294b-4f77-a7a4-c9a4cbfe64e2",
      token: "988f11704c01de29c16ee3ae1917e1db3de19927"
    });

    meshbluConnection.on('ready', function(connection){
      meshbluConnection.mydevices({}, function(deviceResult, error){
        dispatch(fetchDevicesSuccess(deviceResult.devices));
      });
    });
  }
};
