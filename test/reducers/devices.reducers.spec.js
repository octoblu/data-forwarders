var expect = require('expect');
var types = require('../../src/constants/action-types');
var devices = require('../../src/reducers/devices.reducers');

describe('Forwarders.Reducers', function() {
  var initialState = {
    isFetching: false,
    devices: []
  };

  it('should handle initial state', function() {
    expect(devices(undefined, {})).toEqual(initialState);
  });

  describe('when fetching a device starts', function() {
    it('should set isFetching to true', function() {
      expect(devices({}, { type: types.FETCH_DEVICES_REQUEST })).toEqual({
        isFetching: true
      });
    });
  });

  describe('when devices have been fetched successfully', function() {
    var fetchingState;

    beforeEach(function() {
      fetchingState = devices({}, { type: types.FETCH_DEVICES_REQUEST });
    });

    it('should set isFetching to false', function() {
      expect(devices(fetchingState, {
        type: types.FETCH_DEVICES_SUCCESS,
        devices: []
      })).toEqual({
        isFetching: false,
        devices: []
      });
    });

    it('should update the devices', function() {
      var fakeDevices = ['fake-1', 'fake-2'];

      expect(devices({}, {
        type: types.FETCH_DEVICES_SUCCESS,
        devices: { devices: fakeDevices }
      })).toEqual({
        isFetching: false,
        devices: { devices: fakeDevices }
      })
    });

  });
});
