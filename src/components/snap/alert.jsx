import React, {Component, PropTypes} from "react"
import Link from "../snap/link"

class Alert extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true
    }
  }

  handleDismiss() {
    this.setState({ visible: false })
  }

  renderDismissBtn() {
    if (!this.props.dismissible) return null;

    return (
      <Link
        onClick={this.handleDismiss.bind(this)}
        aria-hidden="true">
        &times;
      </Link>
    )
  }

  render() {
    if (!this.state.visible) return null

    return (
      <div>
        {this.props.children}
        {this.renderDismissBtn()}
      </div>
    )
  }
}

Alert.defaultProps = {
  kind: "info",
  dismissible: true
}

Alert.propTypes = {
  kind: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  children: PropTypes.node.isRequired,
  dismissible: PropTypes.bool
}

export default Alert
