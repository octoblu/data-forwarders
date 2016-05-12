import fetch from 'isomorphic-fetch'
import * as types from '../../constants/action-types';
import { getBearerToken } from '../../services/auth-service';

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

function createForwarderRequest() {
  return {
    type: types.CREATE_FORWARDER_REQUEST
  }
}

function createForwarderSuccess(forwarder) {
  return {
    type: types.CREATE_FORWARDER_SUCCESS,
    forwarder
  }
}

function createForwarderFailure(error) {
  return {
    type: types.CREATE_FORWARDER_FAILURE,
    error
  }
}

export function fetchForwarders() {
  return dispatch => {
    dispatch(fetchForwardersRequest())

    return fetch('https://forwarder-service.octoblu.dev/forwarders')
      .then(res => res.json())
      .then(json => dispatch(fetchForwardersSuccess(json.body)))
      .catch(error => dispatch(fetchForwardersFailure(error)))
  }
}

export function createForwarder(forwarderOptions) {
  return (dispatch, getState) => {
    dispatch(createForwarderRequest())

    const requestOptions = {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${getBearerToken()}` },
      body: forwarderOptions
    };

    const activeForwarderType = getState().activeForwarderType
    const { createUrl } = activeForwarderType

    return fetch(createUrl, requestOptions)
      .then(res => res.json())
      .then(json => dispatch(createForwarderSuccess(json.body)))
      .catch(error => dispatch(createForwarderFailure(error)))
  }
}
