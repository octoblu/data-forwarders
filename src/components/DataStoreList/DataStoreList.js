import _ from 'lodash'
import React, { PropTypes } from 'react';

import DataStoreItem from '../DataStoreItem';

const propTypes = {
  forwarderTypes: PropTypes.array.isRequired,
};

const DataStoreList = ({ forwarderTypes }) => {
  if (_.isEmpty(forwarderTypes))  return null;

  const items = _.map(forwarderTypes, (forwarderType, index) => {
    return <DataStoreItem forwarderType={forwarderType} key={index} />;
  })

  return <div>{items}</div>;
};

DataStoreList.propTypes = propTypes;

export default DataStoreList;
