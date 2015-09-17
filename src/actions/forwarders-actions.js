import * as types from '../constants/action-types'

export function addDataStore(dataStore) {
  return {
    type: types.FORWARDER_ADD_DATA_STORE,
    dataStore
  }
};

export function setOptions(options, buttonValue, errors) {
  if (buttonValue === 'Cancel') return {
    type: types.FORWARDER_SET_OPTIONS_CANCELED
  }

  if(buttonValue === 'Submit'){
    if (options) {
      return {
        type : types.FORWARDER_SET_OPTIONS_VALUE,
        options
      }
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
