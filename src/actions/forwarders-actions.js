import fetch from 'isomorphic-fetch';
import * as types from '../constants/action-types';

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
    return fetch('https://forwarder.octoblu.dev/forwarders')
      .then(res => res.json())
      .then(json => dispatch(fetchForwardersSuccess(json.body)))
      .catch(error => dispatch(fetchForwardersFailure(error)))
  }
}
