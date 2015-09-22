import React, {Component, PropTypes} from "react"
import Radium from "radium"
import Color from "color"
import colors from "../../config/colors"

class Filter extends Component {
  handleChange(e) {
    var value = e.target.value
    this.props.onFilter(value)
  }

  render() {
    return (
      <div>
        <input
          onChange={this.handleChange.bind(this)}
          placeholder={this.props.placeholder}
          type="text"/>
      </div>
    )
  }
}

Filter.defaultProps = {
  placeholder: 'Filter...'
}

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Radium(Filter)
