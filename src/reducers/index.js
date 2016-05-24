import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import activeForwarderType from './active-type/active-type-reducer';
import forwarders from './forwarders/forwarder-reducer';
import myDevices from './my-devices/my-devices-reducer';
import toast from './toast';
import types from './types/types-reducer';

const rootReducer = combineReducers({
  activeForwarderType,
  forwarders,
  myDevices,
  types ,
  toast,
  routing: routerReducer,
})

export default rootReducer
