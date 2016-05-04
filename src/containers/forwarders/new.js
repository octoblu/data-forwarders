import React from 'react';
import { fetchForwarders } from '../../actions/forwarders/forwarders-actions'
export default class ForwardersNew extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Data Store</h1>
        <p>Select the data store you'd like your messages to be forwarded to:</p>
        <ul>
          <li>Splunk</li>
          <li>Azure</li>
          <li>MongoDB</li>
        </ul>
      </div>
        // { dataStores.length > 0 &&
        //   <DataStoreList
        //     stores={dataStores}
        //     onSelection={forwarderActions.addDataStore} />
        // }
    );
  }
}
