var expect = require('expect');
var types = require('../../src/constants/action-types');
var devices = require('../../src/reducers/devices.reducers');

describe('Forwarders.Reducers', function() {
  var initialState = {
    items: [],
    isFetching: false,
    error: false
  };

  it('should handle initial state', function() {
    expect(devices(undefined, {})).toEqual(initialState);
  });

  describe('when fetching a device starts', function() {
    it('should set isFetching to true', function() {
      expect(devices({}, { type: types.FETCH_DEVICES_REQUEST })).toEqual({
        items: [],
        isFetching: true,
        error: false
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
        items: [],
        error: false
      });
    });

    it('should update the devices', function() {
      var fakeDevices = ['fake-1', 'fake-2'];

      expect(devices({}, {
        type: types.FETCH_DEVICES_SUCCESS,
        devices: { devices: fakeDevices }
      })).toEqual({
        isFetching: false,
        items: { devices: fakeDevices },
        error: false
      })
    });
  });

  describe('when fetch for devices return an error', function() {
    it('should return an error property', function() {
      expect(devices({}, {
        type: types.FETCH_DEVICES_ERROR,
        error: {}
      })).toEqual({
        isFetching: false,
        items: [],
        error: {}
      });
    });
  });

});
