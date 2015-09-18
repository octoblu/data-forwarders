import * as types from '../constants/action-types';
import history from 'history';
import { pushState, replaceState } from 'redux-react-router';

export function addDataStore(dataStore) {
  return dispatch => {
    dispatch({ dataStore, type: types.FORWARDER_ADD_DATA_STORE });
    dispatch(pushState(null, '/forwarders/new/options'));
  };
};

export function setOptions(options, buttonValue, errors) {
  if (buttonValue === 'Cancel') return {
    type: types.FORWARDER_SET_OPTIONS_CANCELED
  }

  if(buttonValue === 'Submit'){
    if (options) {
      return dispatch => {
        dispatch({ options, type: types.FORWARDER_SET_OPTIONS_VALUE });
        console.log('Boom!');
        dispatch(replaceState({}, '/forwarders/new/gateblu', {}));
      };
    }
  }
};

export function subscribeDevice(device) {
  return {
    type: types.SUBSCRIBE_DEVICE,
    device
  };
};

export function unsubscribeDevice(device) {
  return {
    type: types.UNSUBSCRIBE_DEVICE,
    device
  };
};

export function subscribeAllDevices(devices) {
  return {
    type: types.SUBSCRIBE_ALL_DEVICES,
    devices
  };
};

export function unsubscribeAllDevices() {
  return { type: types.UNSUBSCRIBE_ALL_DEVICES };
};
