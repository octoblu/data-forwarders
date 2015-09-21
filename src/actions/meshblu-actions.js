import meshblu from 'meshblu';
import { pushState, replaceState } from 'redux-react-router';
import * as types from '../constants/action-types';

export function createConnectionRequest() {
  return {
    type: types.MESHBLU_CREATE_CONNECTION_REQUEST
  }
}

export function createConnectionSuccess(payload) {
  return {
    type: types.MESHBLU_CREATE_CONNECTION_SUCCESS,
    payload
  }
}

export function createConnectionError(error) {
  return {
    type: types.MESHBLU_CREATE_CONNECTION_ERROR,
    error
  }
}

export function createConnection(device, redirect=false) {
  return function(dispatch) {
    dispatch(createConnectionRequest());

    if (!device.uuid || !device.token) {
      dispatch(createConnectionError({
        message: "UUID & Token Required"
      }));
      return;
    }

    const meshbluConnection = meshblu.createConnection({
      uuid: device.uuid,
      token: device.token
    });

    meshbluConnection.on('notReady', function(response){
      dispatch(createConnectionError({message: 'Authentication Failed'}));
    });

    meshbluConnection.on('ready', function(response){
      localStorage.setItem("meshblu-uuid", device.uuid);
      localStorage.setItem("meshblu-token", device.token);

      dispatch(createConnectionSuccess(meshbluConnection));
      if (redirect) dispatch(pushState(null, ''));
    });
  };
};

export function registerDeviceRequest() {
  return {
    type: types.MESHBLU_REGISTER_DEVICE_REQUEST
  }
}

export function registerDeviceSuccess(payload) {
  return {
    type: types.MESHBLU_REGISTER_DEVICE_SUCCESS,
    payload
  }
}

export function registerDeviceError(error) {
  return {
    type: types.MESHBLU_REGISTER_DEVICE_ERROR,
    error
  }
}

export function registerDevice(deviceData, meshbluConnection) {
  return function(dispatch) {
    dispatch(registerDeviceRequest());

    if (!deviceData) {
      dispatch(registerDeviceError({ message: "Device Data Required" }));
      return;
    }

    meshbluConnection.register(deviceData, function(device) {
      console.log('Device',  device);
      if (device) {
        dispatch(registerDeviceSuccess(device));
      }
    });
  };
};

export function updateDeviceRequest() {
  return {
    type: types.MESHBLU_UPDATE_DEVICE_REQUEST
  }
}

export function updateDeviceSuccess(payload) {
  return {
    type: types.MESHBLU_UPDATE_DEVICE_SUCCESS,
    payload
  }
}

export function updateDeviceError(error) {
  return {
    type: types.MESHBLU_UPDATE_DEVICE_ERROR,
    error
  }
}

export function updateDevice(deviceData, meshbluConnection) {
  return function(dispatch) {
    dispatch(updateDeviceRequest());

    if (!meshbluConnection) {
      dispatch(updateDeviceError({ message: "No Meshblu Connection." }));
      return;
    }

    if (!deviceData) {
      dispatch(registerDeviceError({ message: "Device Data Required" }));
      return;
    }

    if (!deviceData.uuid) {
      dispatch(updateDeviceError({ message: "Device UUID required." }));
      return;
    }


    meshbluConnection.update(deviceData, (device) => {
      console.log('Update Device', device);
      dispatch(updateDeviceSuccess(device));
    });
  }
}
