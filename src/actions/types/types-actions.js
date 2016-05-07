import superagent from 'superagent';
import * as types from '../../constants/action-types';

const DEV_UUID  = '1bd84a90-fe95-409b-b9e4-e0690e4495d1'
const DEV_TOKEN = '1291f54dd329cae0e1eead92b4479012fa0b3f51'

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
