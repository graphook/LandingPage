import React, { Component, PropTypes } from 'react';
import LoginForm from './LoginForm.jsx';
import CreateUserForm from './CreateUserForm.jsx';

import s from '../styles/index.scss';

export default class Layout extends Component {
  static propTypes = {
    loginFocus: PropTypes.bool,
    whenDone: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.state = {
      loginFocus: props.loginFocus
    };
  }
  render() {
    if (this.state.loginFocus) {
      return (
        <div>
          <LoginForm whenDone={this.props.whenDone} />
          <div className={s.centeredMessage}>
            <a onClick={() => this.setState({ loginFocus: false })}>
              <i className="fa fa-user"></i>create an account
            </a>
          </div>
        </div>
      );
    }
    return (
      <div>
        <CreateUserForm whenDone={this.props.whenDone} />
        <div className={s.centeredMessage}>
          <a onClick={() => this.setState({ loginFocus: true })}>
            <i className="fa fa-sign-in"></i>log in
          </a>
        </div>
      </div>
    );
  }
}
