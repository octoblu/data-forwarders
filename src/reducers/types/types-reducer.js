import * as actionTypes from '../../constants/action-types';
import _ from 'lodash'

const initialState = {
  error: null,
  fetching: false,
  forwarderTypes: []
}

export default function types(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_TYPES_REQUEST:
      return _.assign({}, state, {fetching: true})

    case actionTypes.FETCH_TYPES_SUCCESS: {
      const enabledForwarderTypes = _.filter(action.forwarderTypes, { 'enabled': true })
      return _.assign({}, state, {forwarderTypes: enabledForwarderTypes, fetching: false})
    }

    case actionTypes.FETCH_TYPES_FAILURE:
      return _.assign({}, state, {error: action.error, forwarderTypes: [], fetching: false})

    default:
      return state
  }
}
