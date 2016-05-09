import superagent from 'superagent';
import * as types from '../../constants/action-types';

const DEV_UUID  = 'eec6df11-c180-4f8c-b5d2-5943a1a1a5ef'
const DEV_TOKEN = '15b4344d2b0751ffae74c19373c5bdff12a3dd50'

function fetchTypesRequest() {
  return {
    type: types.FETCH_TYPES_REQUEST
  }
}

function fetchTypesSuccess(forwarderTypes) {
  return {
    type: types.FETCH_TYPES_SUCCESS,
    forwarderTypes
  }
}

function fetchTypesFailure(error) {
  return {
    type: types.FETCH_TYPES_FAILURE,
    error
  }
}

// export function fetchTypes(meshbluAuthBearer) {
export function fetchTypes() {
  return dispatch => {
    dispatch(fetchTypesRequest())
    return superagent
      .get('https://forwarder-service.octoblu.dev/types')
      .auth(DEV_UUID, DEV_TOKEN)
      .end((error, response) => {
        if(error) {
          dispatch(fetchTypesFailure(error))
        }
        dispatch(fetchTypesSuccess(response.body))
      })
  }
}
