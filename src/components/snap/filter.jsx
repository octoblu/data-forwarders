import React, {Component, PropTypes} from "react"

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

export default Filter
