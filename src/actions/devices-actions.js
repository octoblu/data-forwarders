import * as types from '../constants/action-types';
import * as MeshbluActions from './meshblu-actions';
import meshblu from 'meshblu';

export function fetchDevicesRequest() {
  return {
    type: types.FETCH_DEVICES_REQUEST
  };
};

export function fetchDevicesSuccess(devices) {
  return {
    type: types.FETCH_DEVICES_SUCCESS,
    devices
  };
};

export function fetchDevicesError(error) {
  return {
    type: types.FETCH_DEVICES_ERROR,
    error
  }
};


export function fetchDevices(meshblu) {
  return function(dispatch) {
    dispatch(fetchDevicesRequest());

    const { connection } = meshblu;

    connection.mydevices({}, function(result, error){
      if (result.error) {
        dispatch(fetchDevicesError(result.error));
        return;
      }

      dispatch(fetchDevicesSuccess(result.devices));
    });
  }
};

export function fetchDevice(uuid){
  return {
    uuid, type : types.FETCH_DEVICE_DETAIL
  }
};
