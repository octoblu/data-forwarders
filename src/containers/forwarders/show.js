import React from 'react';

export default class ForwardersShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchForwarders());
  }

  render() {
    return <h1>Forwarders Show</h1>;
  }
}
