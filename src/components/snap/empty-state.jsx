import React, {Component, PropTypes} from "react"
import Radium from "radium"
import Color from "color"
import Link from "./link"
import colors from "../../config/colors"

class EmptyState extends Component {
  render() {
    if (this.props.collection.length !== 0) return null
    if (this.props.isFetching) return null

    return (
      <div>
        {this.props.children || <h1>Empty State</h1>}
      </div>
    )
  }
}

EmptyState.defaultProps = {
  collection: [],
  isFetching: false
}

EmptyState.propTypes = {
  collection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  children: PropTypes.node
}

export default Radium(EmptyState)
