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
    case 'FETCH_FORWARDERS': {
      const { payload } = action
      if (action.error) {
        return { ...initialState, error: payload.status, fetching: false }
      }
      return { ...initialState, items: payload.data, fetching: false }
    }

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

    case actionTypes.CREATE_FORWARDER_SUCCESS:
      return { ...state, selected: action.forwarder, fetching: false }

    case actionTypes.CREATE_FORWARDER_FAILURE:
      return { ...state, error: action.error, fetching: false }

    case actionTypes.CREATE_FORWARDER_SUBSCRIPTION_REQUEST: {
      const { selected } = state
      const { subscriptions } = state.selected
      const optimisticSubscriptions = [ ...subscriptions, action.subscription ]

      selected.error = null
      selected.subscriptions = optimisticSubscriptions

      return { ...state, selected }
    }

    case actionTypes.CREATE_FORWARDER_SUBSCRIPTION_FAILURE: {
      const { selected } = state
      const { error, subscription } = action

      selected.error = error
      selected.subscriptions = _.reject(selected.subscriptions, subscription)

      return { ...state, selected, fetching: false}
    }

    case actionTypes.DELETE_FORWARDER_SUBSCRIPTION_REQUEST: {
      const { selected } = state
      const { subscriptions } = state.selected
      const optimisticSubscriptions = _.reject(subscriptions, action.subscription)

      selected.error = null
      selected.subscriptions = optimisticSubscriptions

      return { ...state, selected }
    }

    case actionTypes.DELETE_FORWARDER_SUBSCRIPTION_FAILURE: {
      const { selected } = state
      const { error, subscription } = action
      const optimisticSubscriptions = [ ...selected.subscriptions, subscription ]

      selected.error = error
      selected.subscriptions = optimisticSubscriptions

      return { ...state, selected, fetching: false}
    }

    case actionTypes.FETCH_FORWARDER_SUBSCRIPTIONS_SUCCESS: {
      var forwarder = _.cloneDeep(state.selected)
      forwarder.subscriptions = action.subscriptions
      return { ...state, selected: forwarder, fetching: false }
    }


    default:
      return state
  }
}
