import React, {Component, PropTypes} from "react"
import Radium from "radium"
import Color from "color"
import colors from "../../config/colors"

class Link extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={[
          styles.base,
          styles[this.props.kind],
          this.props.block && styles.block
        ]}>
        {this.props.children}
      </button>
    )
  }
}

Link.defaultProps = {
  kind: 'primary',
  block: false
}

Link.propTypes = {
  kind: PropTypes.oneOf(['primary', 'warning', 'outline']).isRequired,
  onClick: PropTypes.func,
  block: PropTypes.bool
}

var styles = {
  base: {
    border: 'none',
    background: 'transparent',
    color: colors.bluBlue,
    cursor: 'pointer',
    padding: '6px 12px',

    ':hover': {
      textDecoration: 'underline'
    },

    ':focus': {
      outline: 'none'
    }
  }
}

export default Radium(Link)
