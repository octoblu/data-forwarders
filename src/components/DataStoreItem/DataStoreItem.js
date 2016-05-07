import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  forwarderType: PropTypes.object.isRequired,
}

const DataStoreItem = ({ forwarderType }) => {
  return (
    <div>{forwarderType.name}</div>
  )
}

export default DataStoreItem;
