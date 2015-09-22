import React, {Component, PropTypes} from "react"
import Color from "color"
import Link from "./link"
import BluBot from "./blu-bot"
import colors from "../../config/colors"

class EmptyState extends Component {
  render() {
    const { children, showBot } = this.props

    return (
      <div className="EmptyState">
        { showBot && <BluBot /> }
        { children || <h1>Empty State</h1> }
      </div>
    )
  }
}

EmptyState.defaultProps = {
  showBot: true
}

EmptyState.propTypes = {
  children: PropTypes.node,
  showBot: PropTypes.bool
}

export default EmptyState
