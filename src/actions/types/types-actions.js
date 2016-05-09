import fetch from 'isomorphic-fetch'
import * as types from '../../constants/action-types';
import { getBearerToken } from '../../services/auth-service';

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

export function fetchTypes() {
  return dispatch => {
    dispatch(fetchTypesRequest())

    return fetch('https://forwarder-service.octoblu.dev/types')
      .then(res => res.json())
      .then(json => dispatch(fetchTypesSuccess(json.body)))
      .catch(error => dispatch(fetchTypesFailure(error)))
  }
}
