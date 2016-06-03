import React, { PropTypes } from 'react'

import './Card.css'

const propTypes = {
  children: PropTypes.node,
}

const CardGrid = ({ children }) => <div className="Card-grid">{children}</div>

CardGrid.propTypes = propTypes

export default CardGrid
