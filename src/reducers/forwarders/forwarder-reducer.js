import * as actionTypes from '../../constants/action-types';

const initialState = {
  items: [],
  error: null,
  fetching: false,
  selectedUuid: null
}

export default function forwarders(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_FORWARDERS_REQUEST:
      return { ...initialState, fetching: true }

    case actionTypes.FETCH_FORWARDERS_SUCCESS:
      return { ...initialState, items: action.forwarders, fetching: false }

    case actionTypes.FETCH_FORWARDERS_FAILURE:
      return { ...initialState, error: action.error, fetching: false }

    case actionTypes.CREATE_FORWARDER_REQUEST:
      return { ...state, fetching: true }

    case actionTypes.CREATE_FORWARDER_SUCCESS: {
      const {forwarder} = action
      return {
        ...state,
        items: [forwarder, ...state.items],
        selectedUuid: forwarder.uuid,
        fetching: false
      }
    }

    case actionTypes.CREATE_FORWARDER_FAILURE:
      return { ...state, error: action.error, fetching: false }

    default:
      return state
  }
}
