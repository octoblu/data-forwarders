import _ from "lodash"
import React, { PropTypes } from "react"
import { Link } from "react-router"

var ForwarderListItem = React.createClass({
  propTypes: {
    forwarder: PropTypes.object.isRequired
  },

  render: function() {
    const {forwarder} = this.props;
    return (
      <div className="Card" key={forwarder.uuid}>
        <Link to={`/forwarder/${forwarder.uuid}`} className="Card-thumbnail">
          <img src={forwarder.logoUrl} alt={forwarder.name}/>
        </Link>

        <p className="Card-label">{forwarder.name}</p>
      </div>
    );
  }
});

export default ForwarderListItem;
