import _ from "lodash"
import React, { PropTypes } from "react"
import { Link } from "react-router"
import DeviceIcon from "zooid-device-icon"

import styles from "./ForwarderListItem.css"

const propTypes = {
  forwarder: PropTypes.object.isRequired,
}

const ForwarderListItem = ({ forwarder }) => {
  if (_.isEmpty(forwarder)) return null

  const { name, type, uuid } = forwarder

  return (
    <div className={styles.ForwarderListItem}>
      <div className={styles.ForwarderListItemBody}>
        <DeviceIcon type={type} className={styles.ForwarderListItemImage} />
      </div>

      <div className={styles.ForwarderListItemTitle}>
        <Link to={`/forwarders/${uuid}/subscriptions`} className={styles.ForwarderListItemTitleText}>
          {name}
        </Link>
      </div>
    </div>
  )
}

ForwarderListItem.propTypes = propTypes

export default ForwarderListItem
