import meshblu from 'meshblu';
import { push } from 'react-router-redux'
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
      dispatch(removeConnection());
      dispatch(push({message: 'Authentication Failed'}, '/login'));
    });

    meshbluConnection.on('ready', function(response){
      localStorage.setItem("meshblu-uuid", uuid);
      localStorage.setItem("meshblu-token", token);

      dispatch(createConnectionSuccess(meshbluConnection));
      dispatch(push(null, redirectPath));
    });

    meshbluConnection.on('disconnect', function(data) {
      dispatch(removeConnection());
      dispatch(push(null, '/login'));
    });
  };
};

export function removeConnection() {
  return {
    type: types.MESHBLU_REMOVE_CONNECTION
  }
}

export function closeConnection(meshbluConnection) {
  return function(dispatch) {
    dispatch({ type: types.MESHBLU_CLOSE_CONNECTION });
    meshbluConnection.close();
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
      if (device) {
        dispatch(registerDeviceSuccess(device));
        callback();
      }
    });
  };
};

export function deleteDeviceRequest() {
  return {
    type: types.MESHBLU_DELETE_DEVICE_REQUEST
  }
};

export function deleteDeviceSuccess(payload) {
  return {
    type: types.MESHBLU_DELETE_DEVICE_SUCCESS,
    payload
  }
};

export function deleteDeviceError(error) {
  return {
    type: types.MESHBLU_DELETE_DEVICE_ERROR,
    error
  }
};

export function deleteDevice(device, meshbluConnection, callback) {
  return function(dispatch) {
    dispatch(deleteDeviceRequest());

    if (!device) {
      dispatch(deleteDeviceError({ message: "Device Data Required" }));
      return;
    }

    meshbluConnection.unregister(device, function(deletedDevice) {
      if (deletedDevice) {
        dispatch(deleteDeviceSuccess(deletedDevice));
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
      dispatch(updateDeviceSuccess(device));
    });
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


export function addDeviceToGateblu(gateblu, deviceRecord, meshbluConnection){
  return function(dispatch){
    var gatebluDevices = _.union(gateblu.devices, [deviceRecord]);
    var gatebluRecord = _.assign({}, gateblu, { devices : gatebluDevices});

    dispatch(updateDevice(gatebluRecord, meshbluConnection));
  }
}
