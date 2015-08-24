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

    const { connection } = meshblu;

    if (!connection) {
      console.log('No Meshblu Connection');

      const uuid = localStorage.getItem('meshblu-uuid');
      const token = localStorage.getItem('meshblu-token');

      if ( uuid && token ) {
        dispatch(MeshbluActions.createConnection({ uuid, token }))
      }

      return;
    }

    connection.mydevices({}, function(result, error){
      if (result.error) {
        dispatch(fetchDevicesError(result.error));
        return;
      }

      dispatch(fetchDevicesSuccess(result.devices));
    });
  }
};
