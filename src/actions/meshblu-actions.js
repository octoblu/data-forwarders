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

export function createConnectionSilently(redirectPath) {
  return function(dispatch) {
    console.log('attempting to create connection silently');
    let uuid = localStorage.getItem('meshblu-uuid');
    let token = localStorage.getItem('meshblu-token');

    if (uuid && token) {
      console.log('attempting to create connection');
      dispatch(createConnection({uuid, token}, redirectPath));
    }
  }
}

export function createConnection(device, redirectPath='') {
  return function(dispatch) {
    dispatch(createConnectionRequest());

    var {uuid, token} = device;

    if (!uuid || !token) {
      dispatch(createConnectionError({
        message: "UUID & Token Required"
      }));
      return;
    }

    const meshbluConnection = meshblu.createConnection({
      uuid,
      token
    });

    meshbluConnection.on('notReady', function(response){
      // REdirect tpo /login
      dispatch(createConnectionError({message: 'Authentication Failed'}));
    });

    meshbluConnection.on('ready', function(response){
      localStorage.setItem("meshblu-uuid", uuid);
      localStorage.setItem("meshblu-token", token);

      dispatch(createConnectionSuccess(meshbluConnection));
      dispatch(pushState(null, redirectPath));
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

export function registerDevice(deviceData, meshbluConnection, callback) {
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
        callback();
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

export function subscribeToDevice(deviceUUID, subscriberUUID, meshbluConnection){
  var deviceData = {
    uuid : deviceUUID,
    meshblu : {
      messageForward : [subscriberUUID]
    }
  };

  return function(dispatch) {
    dispatch(updateDevice(deviceData, meshbluConnection));
  }
}

export function updateDevice(deviceData, meshbluConnection) {
  return function(dispatch) {
    dispatch(updateDeviceRequest());
    console.log('updateDeviceRequest');

    if (!meshbluConnection) {
      dispatch(updateDeviceError({ message: "No Meshblu Connection." }));
      console.log("No Meshblu Connection.");
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

export function addDeviceToGateblu(gateblu, deviceRecord, meshbluConnection){
  console.log('addDeviceToGateblu');
  return function(dispatch){
    var gatebluDevices = _.union(gateblu.devices, [deviceRecord]);
    var gatebluRecord = _.assign({}, gateblu, { devices : gatebluDevices});

    console.log('addDeviceToGateblu', gatebluRecord);
    dispatch(updateDevice(gatebluRecord, meshbluConnection));
  }
}
