import _ from 'lodash'
import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Breadcrumb, Button, EmptyState, Message, Spinner, Page, PageHeader, PageTitle, PageActions } from 'zooid-ui';
import { browserHistory } from 'react-router'

import ForwarderList from '../../components/ForwarderList';
import { fetchForwarders } from '../../actions/forwarders/forwarders-actions'
import { setToast } from '../../actions/'

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  forwarders: PropTypes.array,
  fetching: PropTypes.bool.isRequired,
  error: PropTypes.object,
}

class ForwardersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchForwarders());
  }

  render() {
    const { breadcrumbs, error, fetching, forwarders } = this.props;

    if (fetching) return <Spinner />
    if (error) return <Message type="error"><strong>Error: </strong>{error.message}</Message>

    if (_.isEmpty(forwarders)) return (
      <EmptyState
        title="It's like a desert here."
        description="You don't have any Forwarders"
        cta="Create a Forwarder"
        action={() => { browserHistory.push('new') }}
      />
    );

    return (
      <div>
        <header className="ForwarderShow-header">
          <Page width="small" className="ForwarderShow-headerWrap">

            <PageHeader>
              <Breadcrumb fragments={[{label: 'Forwarders'}]} />
              <PageActions className="ForwarderShow-pageActions">
                <Button
                  kind="hollow-primary"
                  onClick={() => { browserHistory.push('new')}}
                  size="small"
                >
                  Create Forwarder
                </Button>
              </PageActions>
            </PageHeader>
          </Page>
        </header>

        <Page width="small">
          <ForwarderList forwarders={forwarders} />
        </Page>
      </div>
    )
  }
}

ForwardersIndex.propTypes = propTypes

function mapStateToProps({ forwarders }) {
  const { error, fetching, items } = forwarders;

  return {
    error,
    fetching,
    forwarders: items
  };
}

export default connect(mapStateToProps)(ForwardersIndex)
