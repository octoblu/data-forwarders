import fetch from 'isomorphic-fetch'

import * as types from '../../constants/action-types';
import { getMeshbluConfig } from '../../services/auth-service'

function fetchMyDevicesRequest() {
  return {
    type: types.FETCH_MY_DEVICES_REQUEST
  }
}

function fetchMyDevicesSuccess(devices) {
  return {
    type: types.FETCH_MY_DEVICES_SUCCESS,
    devices
  }
}

function fetchMyDevicesFailure(error) {
  return {
    type: types.FETCH_MY_DEVICES_FAILURE,
    error
  }
}

export function fetchMyDevices() {
  return dispatch => {
    dispatch(fetchMyDevicesRequest())

    const meshbluConfig = getMeshbluConfig()
    const { uuid }      = meshbluConfig
    const meshbluHttp   = new MeshbluHttp(meshbluConfig);

    const myDevicesQuery = {
      configureWhitelist: {$in: [uuid]},
      discoverWhitelist: {$in: [uuid]},
    }

    meshbluHttp.devices(myDevicesQuery, (error, devices) => {
      if (error) {
        dispatch(fetchMyDevicesFailure(error))
        return
      }

      dispatch(fetchMyDevicesSuccess(devices))
    })
  }
}

function createSubscriptionRequest() {
  return {
    type: types.CREATE_SUBSCRIPTION_REQUEST
  }
}

function createSubscriptionSuccess(devices) {
  return {
    type: types.CREATE_SUBSCRIPTION_SUCCESS,
    devices
  }
}

function createSubscriptionFailure(error) {
  return {
    type: types.CREATE_SUBSCRIPTION_FAILURE,
    error
  }
}

export function createSubscription(subscription) {
  return dispatch => {
    dispatch(createSubscriptionRequest())

    const meshbluConfig = getMeshbluConfig()
    const { uuid }      = meshbluConfig
    const meshbluHttp   = new MeshbluHttp(meshbluConfig);

    meshbluHttp.createSubscription(subscription, (error, devices) => {
      if (error) {
        dispatch(createSubscriptionFailure(error))
        return
      }

      dispatch(createSubscriptionSuccess(devices))
    })
  }
}
