import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import forwardersReducer from './forwarders/forwarder-reducer';
import typesReducer from './types/types-reducer';
import activeForwarderTypeReducer from './active-type/active-type-reducer';
import myDevicesReducer from './my-devices/my-devices-reducer';

const rootReducer = combineReducers({
  activeForwarderType: activeForwarderTypeReducer,
  forwarders: forwardersReducer,
  myDevices: myDevicesReducer,
  routing: routerReducer,
  types: typesReducer,
})

export default rootReducer
