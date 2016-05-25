import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router'
import { TopBar, TopBarTitle } from 'zooid-ui'
import Authenticated from './authenticated'
import Toast from 'zooid-ui-toast'

import { ENV } from 'config'

import 'zooid-ui/dist/style.css'
import '../schema-editor.css'

const AppLayout = ({ children, toast }) => {
  return (
    <Authenticated>
      <TopBar>
        <TopBarTitle>Data Forwarders</TopBarTitle>
      </TopBar>

      {children}

      <Toast message={toast} />
    </Authenticated>
  );
}

function mapStateToProps({ toast }) {
  return { toast }
}

export default connect(mapStateToProps)(AppLayout)
