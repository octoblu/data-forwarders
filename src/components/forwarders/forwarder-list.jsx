import _ from 'lodash';
import React, { PropTypes } from 'react';
import ForwarderListItem from './forwarder-list-item';

const ForwarderList = React.createClass({
  propTypes: {
    forwarders: PropTypes.array.isRequired
  },

  render: function() {
    const { forwarders } = this.props;
    const listItems = _.map(forwarders, forwarder => {
      return (<ForwarderListItem forwarder={forwarder} key={forwarder.uuid} />);
    });

    return (
      <ul>
        {listItems}
      </ul>
    );
  }
});

module.exports = ForwarderList;
