import React, { PropTypes } from "react"

import styles from "./Card.css"

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

const CardHeader = ({ children, text }) => {
  children = text || children

  return <header className={styles.CardHeader}>{children}</header>
}

CardHeader.propTypes = propTypes

export default CardHeader
