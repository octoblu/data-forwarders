import url from 'url'
import React from 'react'
import { Spinner } from 'zooid-ui'

import { OAUTH_CLIENT_ID, OAUTH_PROVIDER_URI } from 'config'

export default class Login extends React.Component {
  state = {
    octobluUser: null
  }

  componentDidMount() {
    this.redirectToLogin()
  }

  buildAuthenticateRedirectUri() {
    const {protocol,hostname,port} = window.location
    const pathname = '/authenticated'
    const query = {
      redirect_uri: this.buildRedirectUri()
    }

    return url.format({protocol,hostname,port,pathname,query})
  }

  buildRedirectUri() {
    const {pathname,query} = url.parse(window.location.href)

    return url.format({pathname,query})
  }

  redirectToLogin() {
    const {protocol,host,port} = url.parse(OAUTH_PROVIDER_URI)
    const uri = url.format({
      protocol: protocol,
      host: host,
      port: port,
      pathname: '/authorize',
      query: {
        client_id: OAUTH_CLIENT_ID,
        redirect_uri: this.buildAuthenticateRedirectUri(),
        response_type: 'token'
      }
    })

    window.location = uri
  }


  render() {
    const {octobluUser} = this.state
    const {children} = this.props
    if (!octobluUser) return <Spinner size="large"/>
    return <div>{children}</div>
  }
}
