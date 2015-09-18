import React, {Component, PropTypes} from "react"
import Radium from "radium"
import Color from "color"
import Link from "../snap/link"
import colors from "../../config/colors"

class FormField extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="form-element">
        <label>{this.props.label}</label>
        {this.props.children}
      </div>
    )
  }
}

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
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

export default Radium(FormField)
