import { combineReducers } from 'redux';
import devices from './devices-reducers';
import dataStores from './data-stores-reducers';
import forwarder from './forwarder-reducers';
import meshblu from './meshblu-reducers';
import { routerStateReducer } from 'redux-router';

const rootReducer = combineReducers({
  devices,
  dataStores,
  forwarder,
  meshblu,
  router: routerStateReducer
});

export default rootReducer;
