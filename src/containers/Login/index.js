import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import Login from "../../components/Form/Login";
import * as userActions from "../../redux/actions/user";

@connect(
  (state) => state,
  (dispatch) => ({
    signin: (data) => dispatch(userActions.signin(data)),
  })
)
class LoginContainer extends Component {
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps);
    if (prevProps && !prevProps.app.accessToken && this.props.app.accessToken) {
      window.location.href = `/?access_token=${this.props.app.accessToken}`;
    }
  }

  render() {
    return <Login {...this.props} />;
  }
}

export default withRouter(LoginContainer);
