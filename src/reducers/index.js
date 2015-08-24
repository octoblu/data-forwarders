import { combineReducers } from 'redux';
import devices from './devices-reducers';
import forwarders from './forwarders-reducers';
import meshblu from './meshblu-reducers';

const rootReducer = combineReducers({
  devices,
  forwarders,
  meshblu
});

export default rootReducer;
