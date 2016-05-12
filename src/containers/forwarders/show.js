import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { Tab ,Tabs ,TabList ,TabPanel } from 'react-tabs';

import { deleteForwarderByUuid, fetchForwarderByUuid } from '../../actions/forwarders/forwarders-actions'
import { fetchMyDevices } from '../../actions/device/device-actions'

import MyDevices from '../../components/MyDevices'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  forwarder: PropTypes.object,
}

class ForwardersShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const {dispatch, routeParams} = this.props
    const {forwarderUuid} = routeParams

    dispatch(fetchForwarderByUuid(forwarderUuid))
    dispatch(fetchMyDevices());
  }

  handleDelete()  {
    const {dispatch, routeParams} = this.props
    const {forwarderUuid} = routeParams

    dispatch(deleteForwarderByUuid(forwarderUuid))
  }

  render() {
    const { forwarders, myDevices, routeParams } = this.props
    const { forwarderUuid } = routeParams


    if (forwarders.fetching) return <div>Loading...</div>
    if (forwarders.error) return <div>Error: {error.message}</div>
    if (_.isEmpty(forwarders.selected)) return null

    const { name, type } = forwarders.selected

    return (
      <div>
        <div>
          <h1>Forwarder: {name}</h1>
          <h2>Type: {type}</h2>

          <button onClick={this.handleDelete}>Delete</button>
        </div>

        <Tabs>
          <TabList>
            <Tab>Configurations</Tab>
            <Tab>Subscriptions</Tab>
          </TabList>

          <TabPanel>
            <h2>Configurations</h2>
          </TabPanel>

          <TabPanel>
            <MyDevices devices={myDevices.items} />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}


ForwardersShow.propTypes = propTypes

function mapStateToProps({ forwarders, myDevices }) {
  return {
    forwarders,
    myDevices,
  }
}

export default connect(mapStateToProps)(ForwardersShow)
