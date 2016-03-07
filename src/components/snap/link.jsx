import React, {Component, PropTypes} from "react"

class Link extends Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
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

export default Link
