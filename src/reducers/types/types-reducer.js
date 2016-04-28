import * as actionTypes from '../../constants/action-types';

const initialState = {
  items: [],
  error: null,
  fetching: false
}

export default function types(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TYPES_REQUEST:
      return { ...initialState, fetching: true }

    case actionTypes.FETCH_TYPES_SUCCESS:
      return { ...initialState, items: action.body, fetching: false }

    case actionTypes.FETCH_TYPES_FAILURE:
      return { ...initialState, error: action.error, fetching: false }

    default:
      return state
  }
}
