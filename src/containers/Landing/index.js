import url from 'url'
import React, { Component } from 'react'
import { OAUTH_CLIENT_ID, OAUTH_PROVIDER_URI } from 'config'
import {Page, PageTitle, PageHeader, Card, Button} from 'zooid-ui'
import { Link } from 'react-router'

export default class Landing extends Component {
  state = {
    octobluUser: null
  }



  render() {
    return(
    <Page>
      <PageHeader>
      </PageHeader>
      <PageTitle>Data Forwarders</PageTitle>
      <Card>
        <Link>Get Started</Link>
      </Card>
    </Page>
  )
  }
}
