import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  name: "",
  type: "device:forwarder",
  owner: "",
  dataStore: "",
  connector: "",
  options: null,
  optionsSchema : null,
  gateblu: "",
  subscriptions: []
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.FORWARDER_ADD_DATA_STORE:
      return _.assign({}, state, {
        dataStore: action.dataStore.uuid,
        connector: action.dataStore.connector,
        optionsSchema: action.dataStore.optionsSchema
      });

    case types.FORWARDER_SET_NAME:
      return _.assign({}, state, {
        name: action.name
    });

    case types.FORWARDER_SET_OWNER:
      return _.assign({}, state, {
        owner : action.owner
    });

    case types.FORWARDER_SET_OPTIONS_VALUE:
      return _.assign({}, state, {
        options: action.options
    });

    case types.FORWARDER_ADD_GATEBLU:
      return _.assign({}, state, {
        gateblu: action.gateblu
    });

    case types.FORWARDER_SUBSCRIBE_TO_ALL_DEVICES:
      return _.assign({},state, {
        subscriptions : action.devices
    });

    case types.FORWARDER_UNSUBSCRIBE_FROM_ALL_DEVICES:
      return _.assign({},state, {
        subscriptions : []
    });

    case types.FORWARDER_SUBSCRIBE_TO_DEVICE:
      let subscriptions = state.subscriptions || [];
      if(! _.contains(state.subscriptions, action.device)){
        subscriptions.push(action.device);
      }

      return _.assign({}, state, {
        subscriptions
    });

    case types.FORWARDER_UNSUBSCRIBE_FROM_DEVICE:
      return _.assign({}, state, {
        subscriptions: _.difference(state.subscriptions, [action.device])
    });

    default:
      return state;
  }
}
