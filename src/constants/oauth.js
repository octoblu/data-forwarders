var clientId, meshbluHost, providerUri;

if (process.env.NODE_ENV === 'production') {
  // change IDs?
  // clientId    = '4d04c4c8-87ed-48c2-a3c0-9b308a028bf6'
  providerUri = 'https://oauth.octoblu.com'
  meshbluHost = 'meshblu.octoblu.com'
} else {
  clientId    = 'forwarder-oauth-provider-uuid'
  providerUri = 'https://oauth.octoblu.dev'
  meshbluHost = 'meshblu.octoblu.dev'
}

export const CLIENT_ID    = clientId
export const MESHBLU_HOST = meshbluHost
export const PROVIDER_URI = providerUri
