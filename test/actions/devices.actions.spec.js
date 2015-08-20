var expect  = require('expect');
var types   = require('../../src/constants/action-types');
var actions = require('../../src/actions/devices.actions');

describe('Devices.Actions', function() {
  it('should create FETCH_DEVICES_REQUEST action', function(){
    expect(actions.fetchDevicesRequest()).toEqual({
      type: types.FETCH_DEVICES_REQUEST
    });
  });

  it('should create FETCH_DEVICES_SUCCESS action', function(){
    expect(actions.fetchDevicesSuccess({})).toEqual({
      type: types.FETCH_DEVICES_SUCCESS,
      devices: {}
    });
  });

  it('should create FETCH_DEVICES_ERROR action', function() {
    expect(actions.fetchDevicesError({})).toEqual({
      type: types.FETCH_DEVICES_ERROR,
      error: {}
    });
  });
});
