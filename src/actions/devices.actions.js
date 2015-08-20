import * as types from '../constants/action-types';
import meshblu from 'meshblu';

export function fetchDevicesRequest() {
  return {
    type: types.FETCH_DEVICES_REQUEST
  };
};

export function fetchDevicesSuccess(devices) {
  return {
    type: types.FETCH_DEVICES_SUCCESS,
    devices: devices
  };
};

export function fetchDevicesError(error) {
  return {
    type: types.FETCH_DEVICES_ERROR,
    error: error
  }
}

export function fetchDevices(meshblu) {
  return function(dispatch) {
    dispatch(fetchDevicesRequest());

    console.log('DEVICE ACTIONS', this);

    // var meshbluConnection = meshblu.createConnection({
    //   uuid: "64e47761-294b-4f77-a7a4-c9a4cbfe64e2",
    //   token: "988f11704c01de29c16ee3ae1917e1db3de19927"
    // });

    meshblu.connection.on('ready', function(connection){
      meshblu.connection.mydevices({}, function(result, error){
        if (result.error) {
          dispatch(fetchDevicesError(result.error));
          return;
        }

        dispatch(fetchDevicesSuccess(result.devices));
      });
    });
  }
};
