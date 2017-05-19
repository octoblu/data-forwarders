import React, { PropTypes } from "react"

import styles from "./Card.css"

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

const CardBody = ({ children, text }) => {
  children = text || children

  return <main className={styles.CardBody}>{children}</main>
}

CardBody.propTypes = propTypes

export default CardBody
