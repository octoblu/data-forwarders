import _ from "lodash"
import React, { PropTypes } from "react"

import SubscriptionEditorRow from "../SubscriptionEditorRow"

import styles from "./SubscriptionEditor.css"

const propTypes = {
  devices: PropTypes.array.isRequired,
  subscriptions: PropTypes.array.isRequired,
  onToggleSubscription: PropTypes.func.isRequired,
}

const SubscriptionEditor = ({ devices, subscriptions, onToggleSubscription }) => {
  if (_.isEmpty(devices)) return null

  const deviceRows = _.map(devices, (device, index) => {
    const deviceSubscriptions = _.filter(subscriptions, { emitterUuid: device.uuid })
    return <SubscriptionEditorRow device={device} subscriptions={deviceSubscriptions} onToggleSubscription={onToggleSubscription} key={index} />
  })

  return (
    <table className={styles.SubscriptionEditorTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th className={styles.SubscriptionEditorTableCellCenter}>
            Broadcast<br />Sent
          </th>
          <th className={styles.SubscriptionEditorTableCellCenter}>
            Broadcast<br />Received
          </th>
          <th className={styles.SubscriptionEditorTableCellCenter}>
            Message<br />Sent
          </th>
          <th className={styles.SubscriptionEditorTableCellCenter}>
            Message<br />Received
          </th>
        </tr>
      </thead>
      <tbody>
        {deviceRows}
      </tbody>
    </table>
  )
}

SubscriptionEditor.propTypes = propTypes

export default SubscriptionEditor
