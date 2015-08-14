import React, {Component, PropTypes} from "react"
import Radium from "radium"
import Color from "color"
import Link from "../snap/link"
import colors from "../../config/colors"

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
      <div style={[
        styles.base,
        styles[this.props.kind]
      ]}>
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

export default Radium(Alert)
