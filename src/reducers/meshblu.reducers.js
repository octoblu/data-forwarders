import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  connection: undefined,
  isConnecting: false,
  error: false
};


module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.MESHBLU_CREATE_CONNECTION_REQUEST:
      return _.assign({}, state, {
        connection: undefined,
        isConnecting: true,
        error: false
      });

    case types.MESHBLU_CREATE_CONNECTION_SUCCESS:
      return _.assign({}, state, {
        connection: action.payload,
        isConnecting: false,
        error: false
      });

    case types.MESHBLU_CREATE_CONNECTION_ERROR:
      return _.assign({}, state, {
        connection: undefined,
        isConnecting: false,
        error: action.error
      });

    default:
      return state;
  }
}
