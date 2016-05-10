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
      discoverWhitelist: {$in: [uuid]},
      configureWhitelist: {$in: [uuid]}
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
