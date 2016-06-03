import React, { PropTypes } from 'react'

import './Card.css'

const propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
}

const CardBody = ({ children, text }) => {
  children = text || children

  return <main className="Card-body">{children}</main>
}

CardBody.propTypes = propTypes

export default CardBody
