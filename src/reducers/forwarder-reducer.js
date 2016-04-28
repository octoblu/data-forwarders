import * as types from '../constants/action-types';

const initialState = {
  items: [],
  error: null,
  fetching: false
}

export default function forwarders(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_FORWARDERS_REQUEST:
      return { ...initialState, fetching: true }

    case types.FETCH_FORWARDERS_SUCCESS:
      return { ...initialState, items: action.body, fetching: false }

    case types.FETCH_FORWARDERS_FAILURE:
      return { ...initialState, error: action.error, fetching: false }

    default:
      return state
  }
}
