import fetch from 'isomorphic-fetch';
import * as types from '../../constants/action-types';

function fetchForwarderTypesRequest() {
  return {
    type: types.FETCH_FORWARDER_TYPES_REQUEST
  }
}

function fetchForwarderTypesSuccess(body) {
  return {
    type: types.FETCH_FORWARDER_TYPES_SUCCESS,
    body
  }
}

function fetchForwarderTypesFailure(error) {
  return {
    type: types.FETCH_FORWARDER_TYPES_FAILURE,
    error
  }
}

export function fetchForwarderTypes() {
  return dispatch => {
    dispatch(fetchForwarderTypeReqest())
    return fetch('https://forwarder.octoblu.dev/types')
      .then(res => res.json())
      .then(json => dispatch(fetchForwarderTypesSuccess(json.body)))
      .catch(error => dispatch(fetchForwarderTypesFailure(error)))
  }
}
