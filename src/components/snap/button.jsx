import React, { Component, PropTypes } from 'react'
import Radium from 'radium'
import Color from 'color'
import colors from '../../config/colors'

class Button extends Component {
  static kind: 'primary'
  static block: 'false'

  render() {
    return (
      <button
        onClick={this.props.onClick}
        disabled={this.props.disabled}
        style={[
          styles.base,
          styles[this.props.kind],
          this.props.block && styles.block,
          this.props.disabled && styles.disabled
        ]}>
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

var styles = {
  base: {
    border: 'none',
    borderRadius: '2px',
    display: 'inline-block',
    padding: '10px 15px',

    background: 'transparent',
    color: '#14568f',
    fontSize: '16px',
    textAlign: 'center',

    transitionDelay: '0',
    transitionDuration: '.3s',
    transitionTimingFunction: 'ease-in',
    transitionProperty: 'background,border-color',

    userSelect: 'none',
    appearance: 'none',
    cursor: 'pointer',

    ':hover': {
      background: Color(colors.bluBlue).darken(0.1).hexString()
    },

    ':focus': {
      outline: '0'
    }
  },

  primary: {
    background: colors.bluBlue,
    color: '#FFF',

    ':hover': {
      background: Color(colors.bluBlue).darken(0.1).hexString()
    }
  },

  warning: {
    background: colors.bluRed,
    border: '1px solid ' + colors.bluRed,
    color: '#FFF',

    ':hover': {
      background: Color(colors.bluRed).darken(0.1).hexString()
    }
  },

  outline: {
    border: '1px solid ' + colors.bluBlue
  },

  disabled: {
    opacity: '0.9'
  },

  block: {
    display: 'block',
    width: '100%'
  }
}

export default Radium(Button)
