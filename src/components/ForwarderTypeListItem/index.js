import _ from "lodash"
import React, { PropTypes } from "react"
import { Link } from "react-router"
import DeviceIcon from "zooid-device-icon"

import styles from "./ForwarderTypeListItem.css"

const propTypes = {
  forwarderType: PropTypes.object.isRequired,
}

const ForwarderTypeListItem = ({ forwarderType }) => {
  return (
    <Link to={`/new/${forwarderType.deviceType}`} className={styles.ForwarderTypeListItem}>
      <div className={styles.ForwarderTypeListItemBody}>
        <DeviceIcon type={forwarderType.deviceType} className={styles.ForwarderTypeListItemBodyImage} />
      </div>
      <div className={styles.ForwarderTypeListItemName}>{forwarderType.name}</div>
    </Link>
  )
}

export default ForwarderTypeListItem
