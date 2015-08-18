jest.autoMockOff();
var types = require('../../constants/action-types');
var actions = require('../../actions/devices');

describe('Device actions', function() {

  it('should create SUBSCRIBE_DEVICE action when subscribeDevice is called', function(){
    expect(actions.subscribeDevice({})).toEqual({
      type: types.SUBSCRIBE_DEVICE,
      device: {}
    });
  });

  it('should create UNSUBSCRIBE_DEVICE action when unsubscribeDevice is called', function() {
    expect(actions.unsubscribeDevice({})).toEqual({
      type: types.UNSUBSCRIBE_DEVICE,
      device: {}
    });
  });

  it('should create a SUBSCRIBE_ALL_DEVICES action when subscribeAllDevices is called', function() {
    expect(actions.subscribeAllDevices()).toEqual({
      type: types.SUBSCRIBE_ALL_DEVICES
    });
  });

  it('should create a UNSUBSCRIBE_ALL_DEVICES action when unsubscribeAllDevices is called', function() {
    expect(actions.unsubscribeAllDevices()).toEqual({
      type: types.UNSUBSCRIBE_ALL_DEVICES
    });
  });
});
