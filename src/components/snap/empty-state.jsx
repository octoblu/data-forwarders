import React, {Component, PropTypes} from "react"
import Link from "./link"
import BluBot from "./blu-bot"

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
