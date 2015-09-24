import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  connection: null,
  isConnecting: false,
  error: false
};


module.exports = function(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN_PENDING':
      console.log('LOGIN_PENDING', action);
      return _.assign({}, state, {
        connection: null,
        isConnecting: true,
        error: false
      });

    case 'LOGIN_REJECTED':
      console.log('LOGIN_ERROR', action);
      return _.assign({}, state, {
        connection: null,
        isConnecting: false,
        error: action.error
      });

    case types.MESHBLU_CREATE_CONNECTION_REQUEST:
      return _.assign({}, state, {
        connection: null,
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
        connection: null,
        isConnecting: false,
        error: action.error
      });

      case types.MESHBLU_REMOVE_CONNECTION:
        localStorage.removeItem('meshblu-uuid');
        localStorage.removeItem('meshblu-token');
        return _.assign({}, state, {
          connection: null,
          isConnecting: false,
          error: false
        });

    default:
      return state;
  }
}
