import { combineReducers } from 'redux';
import devices from './devices-reducers';
import dataStores from './data-stores-reducers';
import forwarders from './forwarders-reducers';
import meshblu from './meshblu-reducers';

const rootReducer = combineReducers({
  devices,
  dataStores,
  forwarders,
  meshblu
});

export default rootReducer;
