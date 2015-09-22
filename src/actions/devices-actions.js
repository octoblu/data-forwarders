import * as types from '../constants/action-types';
import * as MeshbluActions from './meshblu-actions';
import { pushState, replaceState } from 'redux-react-router';
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

    // if (!connection) {
    //   const uuid = localStorage.getItem('meshblu-uuid');
    //   const token = localStorage.getItem('meshblu-token');
    //
    //   if (!uuid || !token) {
    //     // Dispatch Action to redirect to login page
    //     dispatch(pushState(null, '/login'));
    //     return;
    //   }
    //
    //   dispatch(MeshbluActions.createConnection({ uuid, token }));
    //   return;
    // }

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
  console.log('Fetch Device Action:', uuid);
  return {
    uuid, type : types.FETCH_DEVICE_DETAIL
  }
};
