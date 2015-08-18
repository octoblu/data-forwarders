var _ = require('lodash');
var types = require('../constants/action-types');

module.exports = function(state = [], action) {
  switch(action.type) {
    case types.SUBSCRIBE_DEVICE:
      state.push(action.device);
      return state;

    case types.UNSUBSCRIBE_DEVICE:
      return _.filter(state, function(device) {
        return device !== action.device;
      });

    case types.UNSUBSCRIBE_ALL_DEVICES:
      return [];

    case types.SUBSCRIBE_ALL_DEVICES:
      return action.devices;
      
    default:
      return state;
  }
}
