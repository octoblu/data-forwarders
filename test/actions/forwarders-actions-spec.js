var expect  = require('expect');
var types   = require('../../src/constants/action-types');
var actions = require('../../src/actions/forwarders-actions');

describe('Forwarders.Actions', function() {

  it('should create FORWARDER_ADD_DATA_STORE action', function() {
    expect(actions.addDataStore({ uuid : '1234', optionsSchema: {}})).toEqual({
      type: types.FORWARDER_ADD_DATA_STORE,
      dataStore : {uuid : '1234', optionsSchema: {}}
    });
  });


  describe('FORWARDER_SET_OPTIONS', function() {
    it('should create FORWARDER_SET_OPTIONS_VALUE action when provided with options on submit', function(){
      expect(actions.setOptions({}, 'Submit', null)).toEqual({
        type : types.FORWARDER_SET_OPTIONS_VALUE,
        options: {}
      });
    });

    it('should create FORWARDER_SET_OPTIONS_CANCELED action', function(){
      expect(actions.setOptions(null, 'Cancel', null)).toEqual({
        type : types.FORWARDER_SET_OPTIONS_CANCELED
      });
    });

  });


  it('should create UNSUBSCRIBE_DEVICE action', function() {
    expect(actions.unsubscribeDevice({})).toEqual({
      type: types.UNSUBSCRIBE_DEVICE,
      device: {}
    });
  });

  it('should create a SUBSCRIBE_ALL_DEVICES action', function() {
    expect(actions.subscribeAllDevices(['one', 'two'])).toEqual({
      type: types.SUBSCRIBE_ALL_DEVICES,
      devices: ['one', 'two']
    });
  });

  it('should create a UNSUBSCRIBE_ALL_DEVICES action', function() {
    expect(actions.unsubscribeAllDevices()).toEqual({
      type: types.UNSUBSCRIBE_ALL_DEVICES
    });
  });
});
