import React, {Component, PropTypes} from 'react'
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
    background: 'transparent',
    color: '#14568f',
    cursor: 'pointer',
    padding: '6px 12px',

    ':focus': {
      outline: 'none'
    }
  },

  primary: {
    background: colors.bluBlue,
    border: '1px solid ' + colors.bluBlue,
    color: '#FFF',

    ':hover': {
      background: Color(colors.bluBlue).darken(0.2).hexString()
    }
  },

  warning: {
    background: colors.bluRed,
    border: '1px solid ' + colors.bluRed,
    color: '#FFF',

    ':hover': {
      background: Color(colors.bluRed).darken(0.2).hexString()
    }
  },

  outline: {
    border: '1px solid #14568F'
  },

  disabled: {
    background: '#CCC',
    border: '1px solid #CCC',
    cursor: 'not-allowed',

    ':hover': {
      background: Color('#CCC').darken(0.2).hexString()
    }
  },

  block: {
    display: 'block',
    width: '100%'
  }
}

export default Radium(Button)
