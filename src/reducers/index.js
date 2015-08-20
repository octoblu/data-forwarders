import { combineReducers } from 'redux';
import devices from './devices.reducers';
import forwarders from './forwarders.reducers';

var rootReducer = combineReducers({
  devices,
  forwarders
});

export default rootReducer;
