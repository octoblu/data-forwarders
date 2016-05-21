import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { Breadcrumb, Message, Spinner, Page, PageHeader, PageTitle, PageActions } from 'zooid-ui';

import { fetchTypes } from '../../actions/types/types-actions'
import ForwarderTypeList from '../../components/ForwarderTypeList'

const propTypes = {
  breadcrumbs: PropTypes.array
}

const defaultProps = {
  breadcrumbs: [
    { component: <Link to="/">Forwarders</Link> },
    { label: 'Create Forwarder' }
  ]
}

class ShowForwarderTypes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { breadcrumbs, error, fetching, items } = this.props;

    if (fetching) return <Spinner />
    if (error) return <Message type="error"><strong>Error: </strong>{error.message}</Message>

    return (
      <div>
        <Breadcrumb fragments={breadcrumbs}/>

        <Page width="small">
          <PageHeader>
            <PageTitle>Select a Data Store</PageTitle>
          </PageHeader>

          <ForwarderTypeList forwarderTypes={items} />
        </Page>
      </div>
    );
  }
}

ShowForwarderTypes.propTypes    = propTypes;
ShowForwarderTypes.defaultProps = defaultProps;

function mapStateToProps({types}) {
  const { error, fetching, items } = types
  return { error, fetching, items };
};

export default connect(mapStateToProps)(ShowForwarderTypes);
