var forwarderServiceHost;

if (process.env.NODE_ENV === 'production') {
  forwarderServiceHost = 'https://forwarder-service.octoblu.com'
} else {
  forwarderServiceHost = 'https://forwarder-service.octoblu.dev'
}

export const FORWARDER_SERVICE_HOST = forwarderServiceHost
