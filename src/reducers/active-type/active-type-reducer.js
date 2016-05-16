import * as actionTypes from '../../constants/action-types';
import _ from 'lodash'

const initialState = null

export default function types(state = initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_FORWARDER_TYPE_CONFIG_REQUEST:
      return action.activeForwarderType

    case actionTypes.FETCH_FORWARDER_TYPE_CONFIG_SUCCESS:
      return {...state, configSchema: action.forwarderTypeConfigSchema }
    //
    // case actionTypes.FETCH_FORWARDER_TYPE_CONFIG_FAILURE:
    //   return

    case actionTypes.SET_ACTIVE_FORWARDER_TYPE:
      return _.find(action.forwarderTypes, {deviceType: action.forwarderTypeId})

    case actionTypes.UNSET_ACTIVE_FORWARDER_TYPE:
      return null

    default:
      return state
  }
}
