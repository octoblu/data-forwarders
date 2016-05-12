import fetch from 'isomorphic-fetch'
import * as types from '../../constants/action-types';
import { getBearerToken } from '../../services/auth-service';
import { push } from 'react-router-redux'

function fetchForwardersRequest() {
  return {
    type: types.FETCH_FORWARDERS_REQUEST
  }
}

function fetchForwardersSuccess(forwarders) {
  return {
    type: types.FETCH_FORWARDERS_SUCCESS,
    forwarders
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
  console.log('createForwarderSuccess', forwarder);
  return dispatch => {
    dispatch({
      type: types.CREATE_FORWARDER_SUCCESS,
      forwarder
    })

    dispatch(push(`/forwarders/${forwarder.uuid}`))
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

    const requestOptions = {
      headers: { 'Authorization': `Bearer ${getBearerToken()}` }
    };

    return fetch('https://forwarder-service.octoblu.dev/forwarders', requestOptions)
      .then(res => res.json())
      .then(json => dispatch(fetchForwardersSuccess(json)))
      .catch(error => dispatch(fetchForwardersFailure(error)))
  }
}

export function createForwarder(forwarderOptions) {
  return (dispatch, getState) => {
    dispatch(createForwarderRequest())

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getBearerToken()}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(forwarderOptions)
    };

    const activeForwarderType = getState().activeForwarderType
    const { createUrl } = activeForwarderType

    return fetch(createUrl, requestOptions)
      .then(res => res.json())
      .then(json => dispatch(createForwarderSuccess(json)))
      .catch(error => dispatch(createForwarderFailure(error)))
  }
}
