import * as actionTypes from '../../constants/action-types';
import _ from 'lodash'

const initialState = {
  items: [],
  error: null,
  fetching: false,
  selected: null
}

export default function forwarders(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_FORWARDERS_REQUEST:
      return { ...initialState, fetching: true }

    case actionTypes.FETCH_FORWARDERS_SUCCESS:
      return { ...initialState, items: action.forwarders, fetching: false }

    case actionTypes.FETCH_FORWARDERS_FAILURE:
      return { ...initialState, error: action.error, fetching: false }

    case actionTypes.FETCH_FORWARDER_BY_UUID_REQUEST:
      return { ...initialState, fetching: true }

    case actionTypes.FETCH_FORWARDER_BY_UUID_SUCCESS:
      return { ...initialState, selected: action.forwarder, fetching: false }

    case actionTypes.FETCH_FORWARDER_BY_UUID_FAILURE:
      return { ...initialState, error: action.error, fetching: false }

    case actionTypes.CREATE_FORWARDER_REQUEST:
      return { ...state, fetching: true }

    case actionTypes.CREATE_FORWARDER_SUCCESS: {
      return { ...state, selected: action.forwarder, fetching: false }
    }

    case actionTypes.CREATE_FORWARDER_SUBSCRIPTION_SUCCESS: {
      var forwarder = _.cloneDeep(state.selected)
      forwarder.subscriptions = action.subscriptions
      return { ...state, selected: forwarder, fetching: false }
    }

    case actionTypes.DELETE_FORWARDER_SUBSCRIPTION_SUCCESS: {
      var forwarder = _.cloneDeep(state.selected)
      forwarder.subscriptions = action.subscriptions
      return { ...state, selected: forwarder, fetching: false }
    }

    case actionTypes.CREATE_FORWARDER_FAILURE:
      return { ...state, error: action.error, fetching: false }

    default:
      return state
  }
}
