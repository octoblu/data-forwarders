import * as types from '../constants/action-types';
import meshblu from 'meshblu';

const storeMeshblu = function() {

};

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

export function createConnection(device) {
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
    });
  };
};
