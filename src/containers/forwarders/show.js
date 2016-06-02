import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Tab ,Tabs ,TabList ,TabPanel } from 'react-tabs';
import { Breadcrumb, Button, Message, Nav, Spinner, Page, PageHeader, PageTitle, PageActions } from 'zooid-ui';
import { SchemaContainer } from 'zooid-meshblu-device-editor';
import { OCTOBLU_CLIENT_URL } from 'config'

import {
  deleteForwarderByUuid,
  fetchForwarderByUuid,
} from '../../actions/forwarders/forwarders-actions';

import './show.css'

const propTypes = {
  children: PropTypes.node,
  dispatch: PropTypes.func.isRequired,
  forwarder: PropTypes.object,
}

class ForwardersShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    const { dispatch, routeParams } = this.props
    const { forwarderUuid } = routeParams

    dispatch(fetchForwarderByUuid(forwarderUuid))
  }

  handleDelete()  {
    const { dispatch, routeParams } = this.props
    const { forwarderUuid }         = routeParams

    dispatch(deleteForwarderByUuid(forwarderUuid))
  }

  render() {
    const { children, error, forwarder, fetching, routeParams } = this.props

    if (fetching) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>
    if (_.isEmpty(forwarder)) return null

    const { device } = forwarder
    const { name, type, uuid }      = device
    const breadcrumbs               = [{ component: <Link to="/">Forwarders</Link> }, { label: name }]

    return (
      <div>
        <header className="ForwarderShow-header">
          <Page width="small" className="ForwarderShow-headerWrap">

            <PageHeader>
              <Breadcrumb fragments={breadcrumbs} />

              <PageActions className="ForwarderShow-pageActions">
                <Button
                  href={`${OCTOBLU_CLIENT_URL}/device/${uuid}`}
                  kind="hollow-primary"
                  size="small"
                >
                  View in Octoblu
                </Button>
                <Button onClick={this.handleDelete} kind="hollow-danger" size="small">Delete</Button>
              </PageActions>
            </PageHeader>

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
          </Page>
        </header>

        <Page width="small">
          {children}
        </Page>

      </div>
    );
  }
}

ForwardersShow.propTypes = propTypes

function mapStateToProps({ forwarders }) {
  const { error, fetching, selected } = forwarders

  return {
    error,
    fetching,
    forwarder: selected,
  }
}

export default connect(mapStateToProps)(ForwardersShow)
