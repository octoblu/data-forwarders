import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Tab ,Tabs ,TabList ,TabPanel } from 'react-tabs';
import { Breadcrumb, Button, Message, Nav, Spinner, Page, PageHeader, PageTitle, PageActions } from 'zooid-ui';
import { SchemaContainer } from 'zooid-meshblu-device-editor';

import MyDevices from '../../components/MyDevices';

import { fetchMyDevices } from '../../actions/device/device-actions';
import {
  deleteForwarderByUuid,
  fetchForwarderByUuid,
  createSubscription,
  deleteSubscription
} from '../../actions/forwarders/forwarders-actions';


const propTypes = {
  breadcrumbs: PropTypes.array,
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
  forwarder: PropTypes.object,
}

const defaultProps = {
  breadcrumbs: [
    { component: <Link to="/">Forwarders</Link> }
  ]
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
    const { dispatch, routeParams } = this.props
    const { forwarderUuid }         = routeParams

    dispatch(deleteForwarderByUuid(forwarderUuid))
  }

  toggleSubscription = ({device, subscriptionType}) => {
    const {dispatch, forwarder} = this.props
    const subscription = { emitterUuid: device.uuid, subscriberUuid: forwarder.device.uuid, type: subscriptionType }

    if( _.some(forwarder.subscriptions, {emitterUuid: device.uuid, type: subscriptionType}) ) {
      return dispatch(deleteSubscription(subscription));
    }
    dispatch(createSubscription(subscription));
  }

  render() {
    const {
      activeForwarderType,
      children,
      error,
      forwarder,
      fetching,
      myDevices,
      routeParams,
    } = this.props

    if (fetching) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (_.isEmpty(forwarder)) return null

    const {device, subscriptions} = forwarder
    const { name, type, uuid } = device

    const breadcrumbs = [{ component: <Link to="/">Forwarders</Link> }, { label: name }]

    console.log('PROPS', this.props.route, this.props.location.pathname);
    return (
      <div>
        <Breadcrumb fragments={breadcrumbs} />

        <Page>
          <PageHeader>
            <PageTitle>{name}</PageTitle>
            <PageActions>
              <Button onClick={this.handleDelete} kind="hollow-danger">Delete</Button>
            </PageActions>
          </PageHeader>

          <h4>Type: {type}</h4>
          <h4>UUID: {uuid}</h4>

          <Nav>
            <Link
              to={`/forwarders/${uuid}`}
              activeClassName="Nav-item--active"
              onlyActiveOnIndex={true}
              className="Nav-item"
            >
              Configuration
            </Link>

            <Link
              to={`/forwarders/${uuid}/subscriptions`}
              activeClassName="Nav-item--active"
              className="Nav-item"
            >
              Subscriptions
            </Link>
          </Nav>

          {children}
        </Page>
      </div>
    );
  }
}


ForwardersShow.propTypes = propTypes
ForwardersShow.defaultProps = defaultProps

function mapStateToProps({ forwarders, myDevices, activeForwarderType }) {

  return {
    forwarder: forwarders.selected,
    fetching: forwarders.fetching,
    error: forwarders.error,
    myDevices,
    activeForwarderType
  }
}

export default connect(mapStateToProps)(ForwardersShow)
