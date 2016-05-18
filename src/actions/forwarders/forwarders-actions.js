import fetch from 'isomorphic-fetch'
import * as types from '../../constants/action-types';
import {FORWARDER_SERVICE_HOST} from '../../constants/index';
import { getMeshbluConfig, getBearerToken } from '../../services/auth-service';
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

export function fetchForwarderByUuid(forwarderUuid) {
  return dispatch => {
    dispatch(fetchForwarderByUuidRequest())

    const meshbluConfig = getMeshbluConfig()
    const { uuid }      = meshbluConfig
    const meshbluHttp   = new MeshbluHttp(meshbluConfig);

    console.log('meshbluConfig', forwarderUuid);
    meshbluHttp.device(forwarderUuid, (error, device) => {
      console.log('Device:', device);

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

export function deleteForwarderByUuid(forwarderUuid) {
  return dispatch => {
    dispatch(deleteForwarderByUuidRequest())

    const meshbluConfig = getMeshbluConfig()
    const { uuid }      = meshbluConfig
    const meshbluHttp   = new MeshbluHttp(meshbluConfig);

    meshbluHttp.unregister({uuid:forwarderUuid}, (error, forwarder) => {
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


function createSubscriptionRequest() {
  return {
    type: types.CREATE_FORWARDER_SUBSCRIPTION_REQUEST
  }
}

function createSubscriptionSuccess(subscription) {
  return {
    type: types.CREATE_FORWARDER_SUBSCRIPTION_SUCCESS,
    subscription
  }
}

function createSubscriptionFailure(error) {
  return {
    type: types.CREATE_FORWARDER_SUBSCRIPTION_FAILURE,
    error
  }
}

export function createSubscription({emitterUuid, subscriberUuid, type}) {
  return dispatch => {
    dispatch(createSubscriptionRequest())

    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${getBearerToken()}`,
        'Content-Type': 'application/json'
      }
    }

    const createUrl = `${FORWARDER_SERVICE_HOST}/forwarders/${subscriberUuid}/subscriptions/${emitterUuid}/${type}`

    return fetch(createUrl, requestOptions)
      .then(() => {
        dispatch(createSubscriptionSuccess({emitterUuid, subscriberUuid, type}))
      })
      .catch(error => {
        error = new Error(`Could not create subscription for Forwarder:${subscriberUuid}`)
        dispatch(createSubscriptionFailure())
      })
  }
}

function deleteSubscriptionRequest() {
  return {
    type: types.DELETE_FORWARDER_SUBSCRIPTION_REQUEST
  }
}

function deleteSubscriptionSuccess(subscription) {
  return {
    type: types.DELETE_FORWARDER_SUBSCRIPTION_SUCCESS,
    subscription
  }
}

function deleteSubscriptionFailure(error) {
  return {
    type: types.DELETE_FORWARDER_SUBSCRIPTION_FAILURE,
    error
  }
}

export function deleteSubscription({emitterUuid, subscriberUuid, type}) {
  return dispatch => {
    dispatch(deleteSubscriptionRequest())

    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${getBearerToken()}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const deleteUrl = `${FORWARDER_SERVICE_HOST}/forwarders/${subscriberUuid}/subscriptions/${emitterUuid}/${type}`

    return fetch(deleteUrl, requestOptions)
      .then(() => dispatch(deleteSubscriptionSuccess({ emitterUuid, subscriberUuid, type })))
      .catch(error => {
        error = new Error(`Could not delete subscription for Forwarder ${subscriberUuid}`)
        dispatch(deleteSubscriptionFailure(error))
      })
  }
}

function fetchSubscriptionsRequest() {
  return {
    type: types.FETCH_FORWARDER_SUBSCRIPTIONS_REQUEST
  }
}

function fetchSubscriptionsSuccess(subscriptions) {
  return {
    type: types.FETCH_FORWARDER_SUBSCRIPTIONS_SUCCESS,
    subscriptions
  }
}

function fetchSubscriptionsFailure(error) {
  return {
    type: types.FETCH_FORWARDER_SUBSCRIPTIONS_FAILURE,
    error
  }
}

export function fetchSubscriptions({forwarderUuid}){
  return dispatch => {
    dispatch(fetchSubscriptionsRequest())

    const requestOptions = {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getBearerToken()}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }

    const fetchSubscriptionUrl = `${FORWARDER_SERVICE_HOST}/forwarders/${forwarderUuid}/subscriptions`

    return fetch(fetchSubscriptionUrl, requestOptions)
      .then(res => res.json())
      .then(json => dispatch(fetchSubscriptionsSuccess(json)))
      .catch(dispatch(fetchSubscriptionsFailure(`Could not fetch forwarder subscriptions for forwarder ${forwarderUuid}`)))
  }
}
