import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  items: [],
  isFetching: false,
  error: false
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_DEVICES_REQUEST:
      return _.assign({}, state, {
        isFetching: true,
        items: [],
        error: false
      });

    case types.FETCH_DEVICES_SUCCESS:
      return _.assign({}, state, {
        isFetching: false,
        items: action.devices,
        error: false
      });

    case types.FETCH_DEVICES_ERROR:
      return _.assign({}, state, {
        isFetching: false,
        items: [],
        error: action.error
      });

    default:
      return state;
  }
}
