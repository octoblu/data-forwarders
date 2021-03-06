import _ from 'lodash'
import atob from 'atob'
import cookie from 'react-cookie'
import { MESHBLU_HOST } from 'config';

export function getMeshbluConfig(){
  const bearerToken         = cookie.load('meshbluBearerToken')
  const bearerTokenEnvelope = atob(bearerToken)
  const bearerTokenPieces   = bearerTokenEnvelope.split(':')

  return {
    uuid: bearerTokenPieces[0],
    token: bearerTokenPieces[1],
    hostname: MESHBLU_HOST,
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

export function getBearerToken() {
  return cookie.load('meshbluBearerToken')
}

export function storeAuthentication(nextState, replace) {
  const bearerToken = decodeURIComponent(nextState.location.query.access_token)
  const redirectUri = nextState.location.query.redirect_uri

  cookie.save('meshbluBearerToken', bearerToken, {path: '/'})

  replace(redirectUri)
}

export function destroyAuthentication() {
  cookie.remove('meshbluBearerToken', { path: '/' })
}
