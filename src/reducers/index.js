import { combineReducers } from 'redux';
import devices from './devices-reducers';
import forwarders from './forwarders-reducers';
import meshblu from './meshblu-reducers';

var rootReducer = combineReducers({
  devices,
  forwarders,
  meshblu
});

export default rootReducer;
