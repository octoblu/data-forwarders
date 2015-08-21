import _ from "lodash"
import React from "react"

import SnapLoading from "../components/snap/loading"
import SnapEmptyState from "../components/snap/empty-state"

var Forwarders = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Forwarders</h1>
        <a href="">Create Forwarder</a>
      </div>
    )
  }
});

_.assign(Forwarders, {
  willTransitionTo(transition) {
    console.log('willTransitionTo');
  }
});

module.exports = Forwarders;
