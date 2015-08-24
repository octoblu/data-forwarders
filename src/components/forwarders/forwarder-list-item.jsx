import _ from 'lodash';
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ForwarderListItem = React.createClass({
  propTypes: {
    forwarder: PropTypes.object.isRequired
  },

  render: function() {
    const { forwarder } = this.props;

    return (
      <li>
        <Link to="devices" params={{uuid: forwarder.uuid}}>{forwarder.name}</Link>
      </li>
    );
  }
});

module.exports = ForwarderListItem;
