var expect  = require('expect');
var types   = require('../../src/constants/action-types');
var actions = require('../../src/actions/forwarders-actions');

describe('Forwarders.Actions', function() {
  it('should create FORWARDER_INITIALIZE', function(){
    expect(actions.initializeForwarder()).toEqual({
      type : types.FORWARDER_INITIALIZE
    })
  });
  it('should create FORWARDER_ADD_DATA_STORE action', function() {
    expect(actions.addDataStore({ uuid : '1234', optionsSchema: {}})).toBeA('function');
  });


  describe('FORWARDER_SET_OPTIONS', function() {
    it('should create FORWARDER_SET_OPTIONS_VALUE action when provided with options on submit', function(){
      expect(actions.setOptions({})).toBeA('function');
    });
  });

  it('should create FORWARDER_ADD_GATEBLU action', function() {
    expect(actions.addGateblu({uuid: 'gateblu-uuid'})).toBeA('function');
  });

  it('should create FORWARDER_UNSUBSCRIBE_FROM_DEVICE action', function() {
    expect(actions.unsubscribeFromDevice({})).toEqual({
      type: types.FORWARDER_UNSUBSCRIBE_FROM_DEVICE,
      device: {}
    });
  });

  it('should create a FORWARDER_SUBSCRIBE_TO_ALL_DEVICES action', function() {
    expect(actions.subscribeToAllDevices(['one', 'two'])).toEqual({
      type: types.FORWARDER_SUBSCRIBE_TO_ALL_DEVICES,
      devices: ['one', 'two']
    });
  });

  it('should create a FORWARDER_UNSUBSCRIBE_FROM_ALL_DEVICES action', function() {
    expect(actions.unsubscribeFromAllDevices()).toEqual({
      type: types.FORWARDER_UNSUBSCRIBE_FROM_ALL_DEVICES
    });
  });
});
