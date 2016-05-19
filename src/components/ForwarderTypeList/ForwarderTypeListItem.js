import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  forwarderType: PropTypes.object.isRequired,
}

const ForwarderTypeListItem = ({ forwarderType }) => {
  return (
    <Link to={`/new/${forwarderType.uuid}`}>
      <img src={forwarderType.logoUrl} alt={forwarderType.name} />
      {forwarderType.name}
    </Link>
  )
}

export default ForwarderTypeListItem;