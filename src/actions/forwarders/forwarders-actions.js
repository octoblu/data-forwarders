import axios from 'axios'
import fetch from 'isomorphic-fetch'
import { FORWARDER_SERVICE_HOST } from 'config';
import { push } from 'react-router-redux'

import { getMeshbluConfig, getBearerToken } from '../../services/auth-service';
import * as types from '../../constants/action-types';

const forwarderServiceRequest = axios.create({
  baseURL: FORWARDER_SERVICE_HOST,
  headers: {
    'Authorization': `Bearer ${getBearerToken()}`,
    'Content-Type': 'application/json'
  }
});

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

export function fetchForwarders() {
  return dispatch => {
    dispatch(fetchForwardersRequest())

    const fetchForwardersUri = '/forwarders'

    return forwarderServiceRequest.get(fetchForwardersUri)
      .then(response => dispatch(fetchForwardersSuccess(response.data)))
      .catch(error => dispatch(fetchForwardersFailure(new Error('Could not fetch Forwarders'))))
  }
}

function fetchForwarderByUuidRequest() {
  return {
    type: types.FETCH_FORWARDER_BY_UUID_REQUEST,
  }
}

function fetchForwarderByUuidSuccess(forwarder) {
  return {
    type: types.FETCH_FORWARDER_BY_UUID_SUCCESS,
    forwarder
  }
}

function fetchForwarderByUuidFailure(error) {
  return {
    type: types.FETCH_FORWARDER_BY_UUID_FAILURE,
    error
  }
}

export function fetchForwarderByUuid(forwarderUuid) {
  return dispatch => {
    dispatch(fetchForwarderByUuidRequest())

    const meshbluConfig = getMeshbluConfig()
    const { uuid }      = meshbluConfig
    const meshbluHttp   = new MeshbluHttp(meshbluConfig);

    meshbluHttp.device(forwarderUuid, (error, device) => {
      if (error) {
        dispatch(fetchForwarderByUuidFailure(error))
        return
      }

      meshbluHttp.listSubscriptions({subscriberUuid: forwarderUuid}, (error, subscriptions) => {
        if (error) {
          dispatch(fetchForwarderByUuidFailure(error))
          return
        }

        dispatch(fetchForwarderByUuidSuccess({device, subscriptions}));
      });
    })
  }
}

function createForwarderRequest() {
  return {
    type: types.CREATE_FORWARDER_REQUEST
  }
}

function createForwarderSuccess(forwarder) {
  return dispatch => {
    dispatch({
      type: types.CREATE_FORWARDER_SUCCESS,
      forwarder
    })

    dispatch(push(`/forwarders/${forwarder.uuid}/subscriptions`))
  }
}

function createForwarderFailure(error) {
  return {
    type: types.CREATE_FORWARDER_FAILURE,
    error
  }
}

function deleteForwarderByUuidRequest() {
  return {
    type: types.DELETE_FORWARDER_BY_UUID_REQUEST
  }
}

function deleteForwarderByUuidSuccess(forwarder) {
  return dispatch => {
    dispatch({
      type: types.DELETE_FORWARDER_BY_UUID_SUCCESS,
      forwarder
    })

    dispatch(push('/forwarders'))
  }
}

function deleteForwarderByUuidFailure(error) {
  return {
    type: types.DELETE_FORWARDER_BY_UUID_FAILURE,
    error
  }
}

export function deleteForwarderByUuid(forwarderUuid) {
  return dispatch => {
    dispatch(deleteForwarderByUuidRequest())

    const meshbluConfig = getMeshbluConfig()
    const { uuid }      = meshbluConfig
    const meshbluHttp   = new MeshbluHttp(meshbluConfig);

    meshbluHttp.unregister(forwarderUuid, (error, forwarder) => {
      if (error) {
        dispatch(deleteForwarderByUuidFailure(error))
        return
      }

      dispatch(deleteForwarderByUuidSuccess(forwarder))
    })
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

export function updateForwarder(device, forwarderData){
  return (dispatch, getState) => {
    dispatch(updateForwarderRequest())

    const meshbluConfig = getMeshbluConfig()
    const meshbluHttp   = new MeshbluHttp(meshbluConfig);

    meshbluHttp.update(device.uuid, forwarderData, (error) => {
      if(error) return dispatch(updateForwarderFailure(error))
      return dispatch(updateForwarderSuccess())
    })
   }
}

function updateForwarderRequest(){
  return {
    type: types.UPDATE_FORWARDER_REQUEST
  }
}

function updateForwarderFailure(error){
  return {
    type: types.UPDATE_FORWARDER_FAILURE,
    error
  }
}

function updateForwarderSuccess() {
  return {
    type: types.UPDATE_FORWARDER_SUCCESS
  }
}

function createSubscriptionRequest(subscription) {
  return {
    type: types.CREATE_FORWARDER_SUBSCRIPTION_REQUEST,
    subscription
  }
}

function createSubscriptionSuccess(subscription) {
  return {
    type: types.CREATE_FORWARDER_SUBSCRIPTION_SUCCESS,
    subscription
  }
}

function createSubscriptionFailure(error, subscription) {
  return {
    type: types.CREATE_FORWARDER_SUBSCRIPTION_FAILURE,
    error,
    subscription
  }
}

export function createSubscription({emitterUuid, subscriberUuid, type}) {
  return dispatch => {
    dispatch(createSubscriptionRequest({emitterUuid, subscriberUuid, type}))

    const createSubscriptionUri = `/forwarders/${subscriberUuid}/subscriptions/${emitterUuid}/${type}`

    return forwarderServiceRequest.post(createSubscriptionUri)
      .then(response => dispatch(createSubscriptionSuccess({emitterUuid, subscriberUuid, type})))
      .catch(error => {
        error = new Error(`Failed: Create subscription`)
        dispatch(createSubscriptionFailure(error, { emitterUuid, subscriberUuid, type }))
      });
  }
}

function deleteSubscriptionRequest(subscription) {
  return {
    type: types.DELETE_FORWARDER_SUBSCRIPTION_REQUEST,
    subscription
  }
}

function deleteSubscriptionSuccess(subscription) {
  return {
    type: types.DELETE_FORWARDER_SUBSCRIPTION_SUCCESS,
    subscription
  }
}

function deleteSubscriptionFailure(error, subscription) {
  return {
    type: types.DELETE_FORWARDER_SUBSCRIPTION_FAILURE,
    error,
    subscription
  }
}

export function deleteSubscription({emitterUuid, subscriberUuid, type}) {
  return dispatch => {
    dispatch(deleteSubscriptionRequest({emitterUuid, subscriberUuid, type}))

    const deleteSubscriptionUri = `/forwarders/${subscriberUuid}/subscriptions/${emitterUuid}/${type}`

    return forwarderServiceRequest.delete(deleteSubscriptionUri)
      .then(response => dispatch(deleteSubscriptionSuccess({ emitterUuid, subscriberUuid, type })))
      .catch((error) => {
        error = new Error(`Failed: Delete subscription`)
        dispatch(deleteSubscriptionFailure(error, { emitterUuid, subscriberUuid, type }))
      });
  }
}

export function toggleSubscription({ device, subscriptionType }) {
  return (dispatch, getState) => {
    const forwarder = getState().forwarders.selected
    const subscription = { emitterUuid: device.uuid, subscriberUuid: forwarder.device.uuid, type: subscriptionType }

    if( _.some(forwarder.subscriptions, {emitterUuid: device.uuid, type: subscriptionType}) ) {
      return dispatch(deleteSubscription(subscription));
    }
    dispatch(createSubscription(subscription));
  }
}
