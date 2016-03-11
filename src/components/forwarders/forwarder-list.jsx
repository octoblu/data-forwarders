import _ from "lodash"
import React, { PropTypes } from "react"
import { Link } from "react-router"

import { Button, Icon } from 'zooid-ui'
import Spinner from '../../components/snap/spinner'
import SnapEmptyState from '../../components/snap/empty-state'
import ForwarderListItem from './forwarder-list-item'

var ForwarderList = React.createClass({
  propTypes: {
    forwarders: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired
  },

  renderEmptyState: function() {
    console.log('Render')
    return (
      <SnapEmptyState className="EmptyState">
        <h3>You have no Forwarder Devices.</h3>
        <Button kind="primary">
          <Link to="/forwarders/new">+ Create Forwarder</Link>
          </Button>
      </SnapEmptyState>
    );
  },

  render: function() {
    const { forwarders, isFetching } = this.props;

    if (isFetching) return <Spinner />;

    if (!forwarders.length && !isFetching) return this.renderEmptyState();

    const forwarderListItems = _.map(forwarders, function(forwarder) {
      return <ForwarderListItem forwarder={forwarder} key={forwarder.uuid}/>;
    });

    return (
      <div className="Cards">{forwarderListItems}</div>
    )
  }
});

export default ForwarderList;
