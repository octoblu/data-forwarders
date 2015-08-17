import React, {Component, PropTypes} from "react"
import Radium from "radium"
import colors from "../../config/colors"

class Loading extends Component {
  render() {
    if (!this.props.isFetching) return null;
    if (this.props.collection.length > 0 ) return null;

    return (
      <div>
        Loading...
        {this.props.children}
      </div>
    )
  }
}

Loading.defaultProps = {
  collection: [],
  isFetching: true
}

Loading.propTypes = {
  collection: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
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
