import React from 'react';
import { destroyAuthentication } from '../services/auth-service'

export default class Logout extends React.Component {
  componentWillMount() {
    destroyAuthentication();
    window.location = '/';
  }

  render(){
    return null;
  }
}

export default Logout
