import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  dataStore: '',
  connector: '',
  options : null,
  optionsSchema : null,
  gateblu: '',
  subcriptions: []
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.FORWARDER_ADD_DATA_STORE:
      return _.assign({}, state, {
        dataStore: action.dataStore.uuid,
        optionsSchema: action.dataStore.optionsSchema
      });

    case types.FORWARDER_SET_OPTIONS_VALUE:
      return _.assign({}, state, {
        options:action.options
      });

    default:
      return state;
  }
}
