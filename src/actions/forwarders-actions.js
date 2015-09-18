import * as types from '../constants/action-types';
import history from 'history';
import { pushState, replaceState } from 'redux-react-router';

export function addDataStore(dataStore) {
  return (dispatch) => {
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

export function addGateblu(gateblu){
  return dispatch => {
    dispatch({
      type : types.FORWARDER_ADD_GATEBLU,
      gateblu
    });
    dispatch(pushState(null, '/forwarders/new/subscriptions'));
  }
};

export function subscribeToDevice(deviceUUID) {
  return {
    type: types.FORWARDER_SUBSCRIBE_TO_DEVICE,
    device: deviceUUID
  };
};

export function unsubscribeFromDevice(deviceUUID) {
  return {
    type: types.FORWARDER_UNSUBSCRIBE_FROM_DEVICE,
    device: deviceUUID
  };
};

export function subscribeToAllDevices(deviceUUIDs) {
  return {
    type: types.FORWARDER_SUBSCRIBE_TO_ALL_DEVICES,
    devices: deviceUUIDs
  };
};

export function unsubscribeFromAllDevices() {
  return { type: types.FORWARDER_UNSUBSCRIBE_FROM_ALL_DEVICES};
};
