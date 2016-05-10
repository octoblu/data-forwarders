import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import forwardersReducer from './forwarders/forwarder-reducer';
import typesReducer from './types/types-reducer';
import activeForwarderTypeReducer from './active-type/active-type-reducer';

const rootReducer = combineReducers({
  types: typesReducer,
  activeForwarderType: activeForwarderTypeReducer,
  forwarders: forwardersReducer,
  routing: routerReducer
})

export default rootReducer
