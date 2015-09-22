import _ from 'lodash';
import * as types from '../constants/action-types';

var initialState = {
  all: [],
  dataSources: [],
  forwarders: [],
  gateblus: [],
  subDevices: [],
  isFetching: false,
  error: false
};

module.exports = function(state = initialState, action) {
  switch(action.type) {
    case types.FETCH_DEVICES_REQUEST:
      return _.assign({}, state, {
        all: [],
        isFetching: true,
        error: false
      });

    case types.FETCH_DEVICES_SUCCESS:
      const { devices } = action;
      const dataSources = _.filter(devices, device => { return device.type === 'device:dataSource'; });
      const forwarders = _.filter(devices, device => { return device.type === 'device:forwarder'; });
      const gateblus = _.filter(devices, device => { return device.type == 'device:gateblu'; });
      const subDevices = _.filter(devices, device => {
        return !_.contains(['device:dataSource', 'device:forwarder','device:gateblu', 'octoblu:user'], device.type);
      });

      return _.assign({}, state, {
        dataSources,
        forwarders,
        gateblus,
        subDevices,
        all: devices,
        isFetching: false,
        error: false
      });

    case types.FETCH_DEVICES_ERROR:
      return _.assign({}, state, {
        isFetching: false,
        all: [],
        error: action.error
      });


      case types.FETCH_DEVICE_DETAIL:
        let device = _.findWhere(state.all, {uuid: action.deviceUUID});
        return _.assign({}, state, {
          isFetching: false,
          device,
          error : false
        });


    default:
      return state;
  }
}
