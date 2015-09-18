var expect     = require('expect');
var types      = require('../../src/constants/action-types');
var forwarders = require('../../src/reducers/forwarder-reducers');

describe('Forwarder.Reducers', function() {
  it('should handle initial state', function() {
    expect(forwarders(undefined, {})).toEqual({
      dataStore: '',
      connector: '',
      options : null,
      optionsSchema : null,
      gateblu: '',
      subscriptions: []
    });
  });

  it('should add a datastore', function() {
    var dataStore = {
      uuid : '7890',
      optionsSchema :{}
    };
    expect(forwarders({}, {type: types.FORWARDER_ADD_DATA_STORE, dataStore }))
    .toEqual({
      dataStore: '7890',
      optionsSchema: {}
    });
  });

  it('should set options value', function(){
    var options = {token : 'ABC', url : 'DEF'};
    expect(forwarders({}, {type : types.FORWARDER_SET_OPTIONS_VALUE, options}))
      .toEqual({
        options : options
      });
  });

  it('should add a gateblu', function() {
    var gateblu = { uuid: 'gateblu-uuid', name: 'my-gateblu'};
    expect(forwarders({}, { type: types.FORWARDER_ADD_GATEBLU, gateblu }))
      .toEqual({
        gateblu
      })
  });

  describe('Device Subscriptions', function() {
    it('should subscribe to all devices', function() {
      expect(forwarders({}, {type: types.FORWARDER_SUBSCRIBE_TO_ALL_DEVICES, devices: ['d1', 'd2', 'd3']}))
        .toEqual({
          subscriptions: ['d1', 'd2', 'd3']
        });
    });

    it('should subscribe a device when the are no subscriptions', function() {
      expect(forwarders({}, {type: types.FORWARDER_SUBSCRIBE_TO_DEVICE,  device :'device-1'}))
        .toEqual({
          subscriptions: [ 'device-1' ]
        });
    });

    it('should subscribe add a device when the are subscriptions', function() {
      expect(forwarders({subscriptions: [ 'device-2', 'device-3' ]}, {type: types.FORWARDER_SUBSCRIBE_TO_DEVICE,  device :'device-1'}))
        .toEqual({
          subscriptions: ['device-2', 'device-3', 'device-1']
        });
    });

    it('the subscriptions should be unique [You cant have more than one subscription per device]', function() {
      expect(forwarders({subscriptions: [ 'device-2', 'device-3' ]}, {type: types.FORWARDER_SUBSCRIBE_TO_DEVICE,  device :'device-2'}))
        .toEqual({
          subscriptions: ['device-2', 'device-3']
        });
    });
  });

  describe('Device Unsubscriptions', function() {
    const device1 = 'device-1';
    const device2 = 'device-2';

    it('should not unsubscribe a device when there are no subscriptions', function() {
      expect(forwarders({}, { type: types.FORWARDER_UNSUBSCRIBE_FROM_DEVICE, device: device1 }))
        .toEqual({ subscriptions: []});
    });

    it('should  unsubscribe a device when the subscriptions exists', function() {
      expect(forwarders({ subscriptions: [device1, device2] }, { type: types.FORWARDER_UNSUBSCRIBE_FROM_DEVICE, device: device1 }))
        .toEqual({
          subscriptions: [device2]
        });
    });
  });
});
