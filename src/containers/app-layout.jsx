import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

var AppLayout = React.createClass({
  render: function() {
    return (
      <div className="">
        <nav className="Page-nav">
          <img src="//s3.amazonaws.com/octoblu-www/assets/images/octoblu-inverse.png" alt="Octoblu" className="Logo"/>
          <ul className='list-unstyled Page-nav-list'>
            <li><Link to="/">Forwarders</Link></li>
            <li><Link to="/forwarders/new">Create Forwarder</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </nav>

        {this.props.children}
      </div>
    );
  }
});

export default (AppLayout);
