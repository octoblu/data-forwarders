import expect from 'expect';
import * as types from '../../src/constants/action-types';
import * as actions from '../../src/actions/meshblu-actions';

describe('Meshblu.Actions', function() {

  // MESHBLU_CREATE_CONNECTION_REQUEST
  it('should create a MESHBLU_CREATE_CONNECTION_REQUEST action', function(){
    expect(actions.createConnectionRequest()).toEqual({
      type: types.MESHBLU_CREATE_CONNECTION_REQUEST
    });
  });

  it('should create a MESHBLU_CREATE_CONNECTION_SUCCESS action', function() {
    expect(actions.createConnectionSuccess({})).toEqual({
      type: types.MESHBLU_CREATE_CONNECTION_SUCCESS,
      payload: {}
    });
  });

  it('should create a MESHBLU_CREATE_CONNECTION_ERROR action', function() {
    expect(actions.createConnectionError({})).toEqual({
      type: types.MESHBLU_CREATE_CONNECTION_ERROR,
      error: {}
    });
  });

});
