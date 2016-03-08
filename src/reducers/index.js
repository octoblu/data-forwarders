import { combineReducers } from 'redux'
import devices from './devices-reducers'
import dataStores from './data-stores-reducers'
import forwarder from './forwarder-reducers'
import meshblu from './meshblu-reducers'
import { routerReducer } from 'react-router-redux'


const rootReducer = combineReducers({
  devices,
  dataStores,
  forwarder,
  meshblu,
  routing: routerReducer
})

export default rootReducer