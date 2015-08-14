import React, {Component, PropTypes} from "react"
import Radium from "radium"
import Color from "color"
import Link from "./link"
import colors from "../../config/colors"

class EmptyState extends Component {
  render() {
    if (this.props.collection.length) return null

    return (
      <div>
        <h1>Empty State</h1>
        {this.props.children}
      </div>
    )
  }
}

EmptyState.defaultProps = {
  collection: []
}

EmptyState.propTypes = {
  collection: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired
}

var styles = {
  base: {
    border: 'none',
    background: 'transparent',
    color: colors.bluBlue,
    cursor: 'pointer',
    padding: '6px 12px',

    ':hover': {
    },

    ':focus': {
      outline: 'none'
    }
  }
}

export default Radium(EmptyState)
