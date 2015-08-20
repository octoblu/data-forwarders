import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = [];

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.SUBSCRIBE_DEVICE:

      return [action.device.uuid, ...state];

    case types.UNSUBSCRIBE_DEVICE:
      return _.filter(state, function(device) {
        return device !== action.device.uuid;
      });

    case types.UNSUBSCRIBE_ALL_DEVICES:
      return [];

    case types.SUBSCRIBE_ALL_DEVICES:
      return action.devices;

    default:
      return state;
  }
}
