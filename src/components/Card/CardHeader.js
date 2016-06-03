import React, { PropTypes } from 'react'

import './Card.css'

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

const CardHeader = ({ children, text }) => {
  children = text || children

  return <header className="Card-header">{children}</header>
}

CardHeader.propTypes = propTypes

export default CardHeader
