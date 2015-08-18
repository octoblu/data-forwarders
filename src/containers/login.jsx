var React = require("react");
var MeshbluAuthForm = require("../components/authentication/meshblu-auth-form");
var SnapButton = require("../components/snap/button");

var Login = React.createClass({
  render: function() {
    return (
      <main>
        <MeshbluAuthForm />

        <a href="http://localhost:8888/?callback=http%3A%2F%2Flocalhost%3A7777%2Fsession">
          Login with Email
        </a>
      </main>
    )
  }
});

module.exports = Login;
