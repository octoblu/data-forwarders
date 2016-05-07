import superagent from 'superagent'
import * as types from '../../constants/action-types';

const DEV_UUID  = '1bd84a90-fe95-409b-b9e4-e0690e4495d1'
const DEV_TOKEN = '1291f54dd329cae0e1eead92b4479012fa0b3f51'

function fetchForwardersRequest() {
  return {
    type: types.FETCH_FORWARDERS_REQUEST
  }
}

function fetchForwardersSuccess(body) {
  return {
    type: types.FETCH_FORWARDERS_SUCCESS,
    body
  }
}

function fetchForwardersFailure(error) {
  return {
    type: types.FETCH_FORWARDERS_FAILURE,
    error
  }
}

export function fetchForwarders() {
  return dispatch => {
    dispatch(fetchForwardersRequest())
    return superagent
      .get('https://forwarder-service.octoblu.dev/forwarders')
      .auth(DEV_UUID, DEV_TOKEN)
      .end((error, response) => {
        if(error) {
          dispatch(fetchForwardersFailure(error))
        }
        dispatch(fetchForwardersSuccess(response.body))
      })
  }
}
