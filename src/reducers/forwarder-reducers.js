import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  name: "",
  type: "device:forwarder",
  owner: "",
  dataStore: "",
  logoUrl: "",
  connector: "",
  options: null,
  optionsSchema : null,
  gateblu: "",
  subscriptions: [],
  configureWhitelist: [],
  discoverWhitelist: [],
  sendAsWhitelist: []
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.FORWARDER_SET_NAME:
      return _.assign({}, state, {
        name: action.name
      });

    case types.FORWARDER_SET_OWNER:
      var configureWhitelist = _.union(state.configureWhitelist, [action.owner]);
      var discoverWhitelist = _.union(state.discoverWhitelist, [action.owner]);

      return _.assign({}, state, {
        owner : action.owner,
        configureWhitelist,
        discoverWhitelist
      });

    case types.FORWARDER_ADD_DATA_STORE:
      return _.assign({}, state, {
        dataStore: action.dataStore.name,
        connector: action.dataStore.connector,
        optionsSchema: action.dataStore.optionsSchema,
        logoUrl: action.dataStore.logoUrl
      });

    case types.FORWARDER_SET_OPTIONS_VALUE:
      return _.assign({}, state, {
        options: action.options
      });

    case types.FORWARDER_ADD_GATEBLU:
      var sendAsWhitelist = _.union(state.sendAsWhitelist, [action.gateblu]);
      var configureWhitelist = _.union(state.configureWhitelist, [action.gateblu]);
      var discoverWhitelist = _.union(state.discoverWhitelist, [action.gateblu]);

      return _.assign({}, state, {
        gateblu: action.gateblu,
        configureWhitelist,
        discoverWhitelist,
        sendAsWhitelist
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

    case types.MESHBLU_REGISTER_DEVICE_SUCCESS:
      console.log('Register Device Success');
      return _.assign({}, state, initialState);

    default:
      return state;
  }
}
