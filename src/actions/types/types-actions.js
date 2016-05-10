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

     const requestConfig = {
       headers: { 'Authorization': `Bearer ${getBearerToken()}` }
     };

    return fetch('https://forwarder-service.octoblu.dev/types', requestConfig)
      .then(res => res.json())
      .then(res => dispatch(fetchTypesSuccess(res)))
      .catch(ex => dispatch(fetchTypesFailure(ex)))
  }
}

export function setActiveForwarderType(forwarderTypes, forwarderTypeId) {
  return {
    type: types.SET_ACTIVE_FORWARDER_TYPE,
    forwarderTypes,
    forwarderTypeId
  }
}

export function unsetActiveForwarderType() {
  return {
    type: types.UNSET_ACTIVE_FORWARDER_TYPE
  }
}
