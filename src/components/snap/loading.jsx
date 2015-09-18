import React, {Component, PropTypes} from "react"
import Radium from "radium"
import colors from "../../config/colors"

class Loading extends Component {
  render() {
    return (
      <div>
        Loading...
        {this.props.children}
      </div>
    )
  }
}

Loading.propTypes = {
  children: PropTypes.node
}

var styles = {
  base: {
    border: 'none',
    background: 'transparent',
    color: colors.bluBlue,
    cursor: 'pointer',
    padding: '6px 12px',
  }
}

export default Radium(Loading)
