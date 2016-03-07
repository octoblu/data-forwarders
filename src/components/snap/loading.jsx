import React, {Component, PropTypes} from "react"

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

export default Loading
