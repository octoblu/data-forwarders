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

function fetchForwardersFailure(ex) {
  return {
    type: types.FETCH_FORWARDERS_FAILURE,
    ex
  }
}

export function fetchForwarders() {
  return dispatch => {
    dispatch(fetchForwardersRequest())
    return fetch('http://example.com/forwarders')
      .then(res => res.json())
      .then(json => dispatch(fetchForwardersSuccess(json.body)))
      .catch(ex => dispatch(fetchForwardersFailure(errors)))
  }
}
