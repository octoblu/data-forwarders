import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListItem } from 'zooid-ui'


const propTypes = {
  forwarder: PropTypes.object.isRequired,
};

const ForwarderListItem = ({ forwarder }) => {
  if (_.isEmpty(forwarder)) return null;

  const { name, type, uuid } = forwarder;

  return (
    <ListItem className="ForwarderListItem">
      <header className="ForwarderListItem-name">{name}</header>
      <div className="ForwarderListItem-type">Type: {type}</div>
      <Link to={`/forwarders/${uuid}/subscriptions`}>Detail</Link>
    </ListItem>
  )
}

ForwarderListItem.propTypes = propTypes;

export default ForwarderListItem;
