import React from 'react';

export default class ForwardersIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>Forwarders Index</h1>;
  }
}

// connect this component to redux
// cherry pick the state we care about from reducers
// dispatch relevant actions

//
// - dispatch FETCH_FORWARDERS_REQUEST action
// - action makes the AJAX request
//   - on success it fires FETCH_FORWARDERS_SUCCESS
//     - Reducer catches FETCH_FORWARDERS_SUCCESS action
//       - adds the forwarders to the state
//       - container is updated with state
//
//   - on error it fires FETCH_FORWARDERS_ERROR
//     - Reducer catches FETCH_FORWARDERS_ERROR action
//       - adds the error to the state
//       - container is updated with state
