import _ from 'lodash'
import React, { PropTypes } from 'react';

const propTypes = {
  device: PropTypes.object.isRequired,
  subscriptions: PropTypes.array.isRequired,
  onToggleSubscription: PropTypes.func.isRequired
};

const MyDeviceItem = ({ device, subscriptions, onToggleSubscription }) => {
  if (_.isEmpty(device)) return null;

  const { name, type } = device;

  function getSubscriptionCheckbox(subscriptionType) {
    const isSubscribed = _.some(subscriptions, {type: subscriptionType, emitterUuid: device.uuid});
    const toggleSubscription = _.partial(onToggleSubscription, {device, subscriptionType});
    return <input type="checkbox" checked={isSubscribed} onChange={toggleSubscription} />
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{type}</td>
      <td>{getSubscriptionCheckbox('broadcast.sent')}</td>
      <td>{getSubscriptionCheckbox('broadcast.received')}</td>
      <td>{getSubscriptionCheckbox('message.sent')}</td>
      <td>{getSubscriptionCheckbox('message.received')}</td>
    </tr>
  )
}

MyDeviceItem.propTypes = propTypes;

export default MyDeviceItem;
