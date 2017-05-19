import _ from "lodash"
import React, { PropTypes } from "react"

import styles from "../SubscriptionEditor/SubscriptionEditor.css"

const propTypes = {
  device: PropTypes.object.isRequired,
  subscriptions: PropTypes.array.isRequired,
  onToggleSubscription: PropTypes.func.isRequired,
}

class SubscriptionEditorRow extends React.Component {
  renderSubscriptionCheckbox(subscriptionType) {
    const { device, subscriptions, onToggleSubscription } = this.props

    const isSubscribed = _.some(subscriptions, { type: subscriptionType, emitterUuid: device.uuid })
    const toggleSubscription = _.partial(onToggleSubscription, { device, subscriptionType })

    return <input type="checkbox" checked={isSubscribed} onChange={toggleSubscription} />
  }

  render() {
    const { device } = this.props

    if (_.isEmpty(device)) return null

    const { name, type } = device

    return (
      <tr>
        <td>{name}</td>
        <td>{type}</td>
        <td className={styles.SubscriptionEditorTableCellCenter}>
          {this.renderSubscriptionCheckbox("broadcast.sent")}
        </td>
        <td className={styles.SubscriptionEditorTableCellCenter}>
          {this.renderSubscriptionCheckbox("broadcast.received")}
        </td>
        <td className={styles.SubscriptionEditorTableCellCenter}>
          {this.renderSubscriptionCheckbox("message.sent")}
        </td>
        <td className={styles.SubscriptionEditorTableCellCenter}>
          {this.renderSubscriptionCheckbox("message.received")}
        </td>
      </tr>
    )
  }
}

SubscriptionEditorRow.propTypes = propTypes

export default SubscriptionEditorRow
