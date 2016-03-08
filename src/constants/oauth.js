var clientId, providerUri;

if (process.env.NODE_ENV === 'production') {
  // change IDs?
  // clientId    = '4d04c4c8-87ed-48c2-a3c0-9b308a028bf6'
  providerUri = 'https://oauth.octoblu.com'
} else {
  clientId    = '9b6fcd5c-71b3-43aa-9079-64f0dec94b6f'
  providerUri = 'https://oauth.octoblu.com'
}

export const CLIENT_ID    = clientId;
export const PROVIDER_URI = providerUri
