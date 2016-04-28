import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import forwardersReducer from './forwarders/forwarder-reducer';
import typesReducer from './types/types-reducer';

const rootReducer = combineReducers({
  types: typesReducer,
  forwarders: forwardersReducer,
  routing: routerReducer
})

export default rootReducer
