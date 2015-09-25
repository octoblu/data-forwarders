import React, { PropTypes } from "react"
import _ from "lodash"

var PageHeader = React.createClass({
  propTypes: {
    title: PropTypes.string,
    children: PropTypes.node
  },
  
  render: function() {
    const { title, children } = this.props
    return (
      <div className="Page-header">
        <h3 className="Page-title">{title}</h3>
        {children}
      </div>
    );
  }

});

module.exports = PageHeader
