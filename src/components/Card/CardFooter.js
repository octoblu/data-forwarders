import React, { PropTypes } from "react"

import styles from "./Card.css"

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

const CardFooter = ({ children, text }) => {
  children = text || children

  return <footer className={styles.CardFooter}>{children}</footer>
}

CardFooter.propTypes = propTypes

export default CardFooter
