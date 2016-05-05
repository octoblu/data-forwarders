import fetch from 'isomorphic-fetch';
import * as types from '../../constants/action-types';

function fetchTypesRequest() {
  return {
    type: types.FETCH_TYPES_REQUEST
  }
}

function fetchTypesSuccess(body) {
  return {
    type: types.FETCH_TYPES_SUCCESS,
    body
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
    // const BearerToken = localStorage.get 'BearerToken'
    return fetch('https://forwarder.octoblu.dev/types', {
        headers: {
          'Authorization': 'Bearer NzBmZDkwNDgtZDk1MC00NjRiLWI2ZTMtYjM2M2Q5ODQ3ZTdhOmYxODg2ZWZkYTA0NzUxMGIzYmFlZjU3MDQ3OWMxNDA0YTllZWQxZjE'
        }
      })
      .then(res => res.json())
      .then(json => dispatch(fetchTypesSuccess(json.body)))
      .catch(error => dispatch(fetchTypesFailure(error)))
  }
}
