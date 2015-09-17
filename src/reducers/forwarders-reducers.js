import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  type: '',
  connector: '',
  options : {
  },
  optionsSchema : {
    "type": "object",
    "properties":{
      "EventCollectorToken" : {
        "title": "Event Collector Token",
        "type": "string",
        "required" : true
      }
    }
  },
  gateblu: '',
  subcriptions: [ ]
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.FORWARDER_ADD_DATA_STORE:
      return _.assign({}, state, {
        type: action.dataStore
      });

    default:
      return state;
  }
}
