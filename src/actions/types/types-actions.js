import fetch from 'isomorphic-fetch'
import * as types from '../../constants/action-types';
import { getBearerToken } from '../../services/auth-service';
import { FORWARDER_SERVICE_HOST } from 'config';

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

function fetchForwarderTypeConfigRequest(activeForwarderType) {
  return {
    type: types.FETCH_FORWARDER_TYPE_CONFIG_REQUEST,
    activeForwarderType
  }
}

function fetchForwarderTypeConfigSuccess(forwarderTypeConfigSchema) {
  return {
    type: types.FETCH_FORWARDER_TYPE_CONFIG_SUCCESS,
    forwarderTypeConfigSchema
  }
}

function fetchForwarderTypeConfigFailure(error) {
  return {
    type: types.FETCH_FORWARDER_TYPE_CONFIG_FAILURE,
    error
  }
}

export function fetchTypes() {
  return dispatch => {
    dispatch(fetchTypesRequest())

     const requestConfig = {
       headers: { 'Authorization': `Bearer ${getBearerToken()}` }
     };

    return fetch(`${FORWARDER_SERVICE_HOST}/types`, requestConfig)
      .then(res => res.json())
      .then(res => dispatch(fetchTypesSuccess(res)))
      .catch(ex => dispatch(fetchTypesFailure(ex)))
  }
}

export function fetchForwarderTypeByDeviceType(forwarderDeviceType) {
  return (dispatch, getState) => {
    const activeForwarderType = _.find(getState().types.items, {deviceType: forwarderDeviceType})

    dispatch(fetchForwarderTypeConfigRequest(activeForwarderType))

     const requestConfig = {
       headers: { 'Authorization': `Bearer ${getBearerToken()}` }
     };

    return fetch(activeForwarderType.configurationUrl, requestConfig)
      .then(res => res.json())
      .then(res => dispatch(fetchForwarderTypeConfigSuccess(res)))
      .catch(ex => dispatch(fetchForwarderTypeConfigFailure(ex)))
  }
}
