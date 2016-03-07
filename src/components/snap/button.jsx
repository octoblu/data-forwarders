import React, { Component, PropTypes } from 'react'

class Button extends Component {
  static kind: 'primary'
  static block: 'false'

  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  kind: 'primary',
  disabled: false,
  block: false
}

Button.propTypes = {
  kind: PropTypes.oneOf(['primary', 'warning', 'outline']).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  block: PropTypes.bool
}


export default Button
