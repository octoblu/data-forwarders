import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  forwarder: PropTypes.object.isRequired,
};

const ForwarderListItem = ({ forwarder }) => {
  if (_.isEmpty(forwarder)) return null;

  const { name, subscriptions, type, uuid } = forwarder;

  return (
    <div className="ForwarderListItem">
      <header className="ForwarderListItem-name">{name}</header>
      <div className="ForwarderListItem-type">Type: {type}</div>
      <div className="ForwarderListItem-thingCount">Listens to {subscriptions.count} Things</div>
      <Link to={`/forwarders/${uuid}`}>Detail</Link>
    </div>
  )
}

ForwarderListItem.propTypes = propTypes;

export default ForwarderListItem;
