var _ = require('lodash');
var types = require('../constants/action-types');

var initialState = {
  isFetching: false,
  devices: []
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_DEVICES_REQUEST:
      return _.assign({}, state, {
        isFetching: true
      });

    case types.FETCH_DEVICES_SUCCESS:
      return _.assign({}, state, {
        isFetching: false,
        devices: action.devices
      });

    default:
      return state;
  }
}
