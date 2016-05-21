import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { ListItem } from 'zooid-ui'

import './ForwarderListItem.css'

const propTypes = {
  forwarder: PropTypes.object.isRequired,
};

const ForwarderListItem = ({ forwarder }) => {
  if (_.isEmpty(forwarder)) return null;

  const { name, type, uuid } = forwarder;

  return (
    <ListItem className="ForwarderListItem">
      <header className="ForwarderListItem-name">
        <Link to={`/forwarders/${uuid}/subscriptions`}>
          {name}
        </Link>
      </header>
      <div className="ForwarderListItem-type">Type: {type}</div>
    </ListItem>
  )
}

ForwarderListItem.propTypes = propTypes;

export default ForwarderListItem;
