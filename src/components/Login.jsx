import React, { Component } from "react";
import Auth from "../auth/Auth";

class Login extends Component {
  render() {
    const auth = new Auth();

    return (
      <div>
        {auth.login()}
      </div>
    );
  }
}

export default Login;