import chai, { expect } from 'chai';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import shmock from '@octoblu/shmock'
import * as types from '../../constants/action-types'
import * as actions from './device-actions'
import enableDestroy from 'server-destroy'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)
let meshblu
describe('Device Actions', () => {
  before('enable meshblu mock', () => {
    meshblu = shmock(0xbabe)
    enableDestroy(meshblu)
  })


  after ('Destroy meshblu mock', (done) => {
    meshblu.destroy(done)
  })

  let userAuth
  let searchQuery = {
    query: {

        '$or' :[
          {
            'configureWhitelist': {'$in': ['some-uuid']},
            'discoverWhitelist': {'$in': ['some-uuid']},
          },
          {
            'meshblu.whitelists.configure.update.uuid': 'some-uuid',
            'meshblu.whitelists.discover.view.uuid': 'some-uuid'
          }
        ]
    },
    projection: {}
  }
  beforeEach(() => {
    userAuth = new Buffer('some-uuid:some-token').toString('base64')
    meshblu
    .post('/authenticate')
    .reply(200, {uuid: 'some-uuid', token: 'some-token'})
  })

  it('should create FETCH_MY_DEVICES_SUCCESS when request is successful', () => {
      meshblu
      .post('/search/devices', searchQuery )
      .reply(200, [{
        uuid: 'device-1-uuid',
        type: 'device:drone',
      }])

    const meshbluConfig = {
      uuid: 'some-uuid',
      token: 'some-token',
      protocol: 'http',
      port: 0xbabe,
      hostname: 'localhost'
    }

    const expectedActions = [
      { type: types.FETCH_MY_DEVICES_REQUEST },
      { type: types.FETCH_MY_DEVICES_SUCCESS,
        devices : [
          {
            uuid: 'device-1-uuid',
            type: 'device:drone',
          }
        ]
      }
    ]

    const store = mockStore({ myDevices: {}})
    return store.dispatch(actions.fetchMyDevices(meshbluConfig))
      .then(() => {
        expect(store.getActions()).to.deep.equal(expectedActions)
      })
  });
})
