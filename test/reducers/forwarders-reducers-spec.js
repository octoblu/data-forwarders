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
      subcriptions: []
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
});
