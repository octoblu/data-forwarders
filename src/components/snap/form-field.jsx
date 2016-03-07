import React, {Component, PropTypes} from "react"
import Link from "../snap/link"

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

export default FormField
