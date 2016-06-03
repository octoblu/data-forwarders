import React, { PropTypes } from 'react'

import './Card.css'

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

const CardFooter = ({ children, text }) => {
  children = text || children

  return <footer className="Card-footer">{children}</footer>
}

CardFooter.propTypes = propTypes

export default CardFooter
