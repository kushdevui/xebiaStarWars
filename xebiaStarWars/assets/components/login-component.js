import React from 'react';
import PropTypes from 'prop-types';
import {
  toggleLoginBtnStatus,
  loginErrorMessageAction,
  loggedInUserDetailsSave,
  loginAction
} from '../store/action-creators/login-actions';

export default class Login extends React.Component {
  constructor() {
    super();
  }

  login = (e) => {
    let username = this.usernameField.value,
        password = this.passwordField.value,
        userFound = false,
        props = this.props,
        { store } = this.context;
    e.preventDefault();
    store.dispatch(toggleLoginBtnStatus(false));
    store.dispatch(loginAction(props, username, password));
  }

  render() {
    let { store } = this.context;
    let storeData = store.getState();
    let loginPageData = storeData.loginReducer;

    return (
      <div class="col-md-12 col-sm-12 no-padding">
        <div class="login-box">
          <form onSubmit={this.login}>
            <label htmlFor="username-login">
              Username
            </label>
            <input
              type="text"
              id="username-login"
              ref={ (input) => { this.usernameField = input } }
            />
            <label htmlFor="password-login">
              Password
            </label>
            <input
              type="password"
              id="password-login"
              ref={ (input) => { this.passwordField = input } }
            />
            <span class="error">
              { loginPageData.errMsg }
            </span>
            <button disabled={ loginPageData.loginBtnEnabledStatus === false ? "disabled" : "" }>
              Login
            </button>
            <div class="clearfix" />
          </form>
        </div>
      </div>
    );
  }
};

Login.contextTypes = {
  store: PropTypes.object
};
