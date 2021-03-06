import _ from "lodash"
import React, { PropTypes } from "react"

import ForwarderTypeListItem from "../ForwarderTypeListItem"

import styles from "./ForwarderTypeList.css"

const propTypes = {
  forwarderTypes: PropTypes.array.isRequired,
}

const ForwarderTypeList = ({ forwarderTypes }) => {
  if (_.isEmpty(forwarderTypes)) return null

  const items = _.map(forwarderTypes, (forwarderType, index) => {
    return <ForwarderTypeListItem forwarderType={forwarderType} key={index} />
  })

  return <div className={styles.ForwarderTypeList}>{items}</div>
}

ForwarderTypeList.propTypes = propTypes

export default ForwarderTypeList
