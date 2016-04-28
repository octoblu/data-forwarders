import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import forwarderReducer from './forwarder-reducer';

const rootReducer = combineReducers({
  forwarders: forwarderReducer,
  routing: routerReducer
})

export default rootReducer
