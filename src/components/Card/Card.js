import React, { PropTypes } from "react"

import styles from "./Card.css"

const propTypes = {
  children: PropTypes.node,
}

const Card = ({ children }) => <div className={styles.Card}>{children}</div>

Card.propTypes = propTypes

export default Card
