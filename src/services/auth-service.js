import _ from 'lodash'
import atob from 'atob'
import cookie from 'react-cookie'


import { CLIENT_ID, MESHBLU_HOST, PROVIDER_URI } from '../constants/oauth';

export function getMeshbluConfig(){
  let bearerToken  = cookie.load('meshbluBearerToken')
  const bearerTokenEnvelope = atob(bearerToken)
  const bearerTokenPieces = bearerTokenEnvelope.split(':')
  return {
    uuid: bearerTokenPieces[0],
    token: bearerTokenPieces[1],
    server: MESHBLU_HOST,
    port: 443
  }
}

export function fetchOctobluUser(callback) {
  let bearerToken  = cookie.load('meshbluBearerToken')

  if(!bearerToken){
    return callback(null, null)
  }

  let meshbluConfig = getMeshbluConfig()
  let meshbluHttp = new MeshbluHttp(meshbluConfig)
  meshbluHttp.whoami(callback)
}

export function storeAuthentication(nextState, replace) {
  const bearerToken = decodeURIComponent(nextState.location.query.token)
  const redirectUri = nextState.location.query.redirect_uri
  cookie.save('meshbluBearerToken', bearerToken, {path: '/'})
  replace(redirectUri)
}

export function destroyAuthentication() {
  console.log('logging out');
  cookie.remove('meshbluBearerToken', { path: '/' })
}
