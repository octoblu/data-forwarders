import React, { PropTypes } from 'react'

import './Card.css'

const propTypes = {
  children: PropTypes.node,
}

const Card = ({ children }) => <div className="Card">{children}</div>

Card.propTypes = propTypes

export default Card
