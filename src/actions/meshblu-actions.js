import * as types from '../constants/action-types';
import meshblu from 'meshblu';


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

export function createConnection() {
  return function(dispatch) {
    dispatch(createConnectionRequest());

    var meshbluConnection = meshblu.createConnection({
      uuid: "64e47761-294b-4f77-a7a4-c9a4cbfe64e2",
      token: "988f11704c01de29c16ee3ae1917e1db3de19927"
    });

    meshbluConnection.on('notReady', function(response){
      dispatch(createConnectionError(response));
    });

    meshbluConnection.on('ready', function(response){
      dispatch(createConnectionSuccess(meshbluConnection));
    });
  };
};
