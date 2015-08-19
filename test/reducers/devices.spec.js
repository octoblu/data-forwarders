var expect = require('expect');
var types = require('../../src/constants/action-types');
var devices = require('../../src/reducers/devices.reducers');

describe('Devices.Reducers', function() {
  it('should handle initial state', function() {
    expect(devices(undefined, {})).toEqual([]);
  });

  it('should subscribe a device', function() {
    var deviceUUID = 'fake-device-uuid';

    expect(devices([], {
      type: types.SUBSCRIBE_DEVICE,
      device: deviceUUID
    })).toEqual([deviceUUID]);
  });

  it('should subscribe devices', function() {
    var device1 = 'fake-device-uuid';
    var device2 = 'fake-device-uuid2';
    var device3 = 'fake-device-uuid3';

    expect(devices([device1, device2], {
      type: types.SUBSCRIBE_DEVICE,
      device: device3
    })).toEqual([device1, device2, device3]);
  });

  it('should unsubscribe a device', function() {
    var device = 'fake-device'

    expect(devices(['device'], {
      type: types.UNSUBSCRIBE_DEVICE,
      device: 'device'
    })).toEqual([]);
  });

  it('should unsubscribe device in a collection of devices', function() {
    var device1 = 'fake-device-uuid';
    var device2 = 'fake-device-uuid2';
    var device3 = 'fake-device-uuid3';

    expect(devices([device1, device2, device3], {
      type: types.UNSUBSCRIBE_DEVICE,
      device: device1
    })).toEqual([device2, device3]);
  });

  it('should unsubscribe all devices', function() {
    var device1 = 'fake-device-uuid';
    var device2 = 'fake-device-uuid2';
    var device3 = 'fake-device-uuid3';

    expect(devices([device1 ,device2, device3], {
      type: types.UNSUBSCRIBE_ALL_DEVICES
    })).toEqual([]);
  });

  it('should subscribe to all devices', function() {
    var device1 = 'fake-device-uuid';
    var device2 = 'fake-device-uuid2';
    var device3 = 'fake-device-uuid3';
    var deviceList = [device1, device2, device3];

    expect(devices([], {
      type: types.SUBSCRIBE_ALL_DEVICES,
      devices: deviceList
    })).toEqual([device1, device2, device3]);
  });
});
