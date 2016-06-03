import React, { PropTypes } from 'react'
import { Button, DeviceIcon, Page } from 'zooid-ui'

import { Card, CardHeader, CardBody, CardFooter, CardGrid } from '../Card/'

import './LandingPageContent.css'

const LandingPageContent = () => {
  return (
    <Page width="small" className="LandingPageContent">
      <h1 className="LandingPageContent-header">Octoblu Data Forwarders</h1>

      <h3 className="LandingPageContent-subHeader">Supported Forwarders</h3>

      <CardGrid>
        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:msazure" className="Card-image"/>
          </CardBody>
          <CardFooter text="Microsoft Azure Service Bus" />
        </Card>

        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:elasticsearch" className="Card-image"/>
          </CardBody>
          <CardFooter text="Elastic Search" />
        </Card>

        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:splunk" className="Card-image"/>
          </CardBody>
          <CardFooter text="Splunk" />
        </Card>

        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:mongodb" className="Card-image"/>
          </CardBody>
          <CardFooter text="MongoDB" />
        </Card>
      </CardGrid>

      <Button to="/login" kind="primary" size="large" block>Get Started</Button>
    </Page>
  )
}

export default LandingPageContent
