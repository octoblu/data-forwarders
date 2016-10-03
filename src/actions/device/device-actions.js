import fetch from 'isomorphic-fetch'

import * as types from  '../../constants/action-types';
import { getMeshbluConfig } from '../../services/auth-service'
import MeshbluHttp from 'browser-meshblu-http'

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

export function fetchMyDevices(meshbluConfig = getMeshbluConfig()) {
  return dispatch => {
    dispatch(fetchMyDevicesRequest())

    return new Promise((resolve, reject) => {
      const { uuid }      = meshbluConfig
      const meshbluHttp   = new MeshbluHttp(meshbluConfig);

      const myDevicesQuery ={
        query: {

            '$or' :[
              {
                'configureWhitelist': {'$in': [uuid]},
                'discoverWhitelist': {'$in': [uuid]},
              },
              {
                'meshblu.whitelists.configure.update.uuid': uuid,
                'meshblu.whitelists.discover.view.uuid': uuid
              }
            ]
        },
        projection: {}
      }
      meshbluHttp.search(myDevicesQuery,(error, devices) => {
        if (error) {
          return reject(dispatch(fetchMyDevicesFailure(error)))
        }

        return resolve(dispatch(fetchMyDevicesSuccess(devices)))
      })
    })
  }
}
