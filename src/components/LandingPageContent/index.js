import React, { PropTypes } from "react"
import { Button, DeviceIcon, Page } from "zooid-ui"

import { Card, CardHeader, CardBody, CardFooter, CardGrid } from "../Card/"

import styles from "./LandingPageContent.css"

const LandingPageContent = () => {
  return (
    <Page width="small" className={styles.LandingPageContent}>
      <h1 className={styles.LandingPageContentHeader}>Octoblu Data Forwarders</h1>

      <h3 className={styles.LandingPageContentSubHeader}>Supported Forwarders</h3>

      <CardGrid>
        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:msazure" className={styles.CardImage} />
          </CardBody>
          <CardFooter text="Microsoft Azure Service Bus" />
        </Card>

        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:elasticsearch" className={styles.CardImage} />
          </CardBody>
          <CardFooter text="Elastic Search" />
        </Card>

        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:splunk" className={styles.CardImage} />
          </CardBody>
          <CardFooter text="Splunk" />
        </Card>

        <Card>
          <CardBody>
            <DeviceIcon type="forwarder:mongodb" className={styles.CardImage} />
          </CardBody>
          <CardFooter text="MongoDB" />
        </Card>
      </CardGrid>

      <Button to="/login" kind="primary" size="large" block>Get Started</Button>
    </Page>
  )
}

export default LandingPageContent
