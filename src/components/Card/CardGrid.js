import React, { PropTypes } from "react"

import styles from "./Card.css"

const propTypes = {
  children: PropTypes.node,
}

const CardGrid = ({ children }) => <div className={styles.CardGrid}>{children}</div>

CardGrid.propTypes = propTypes

export default CardGrid
