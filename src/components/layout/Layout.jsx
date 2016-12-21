import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import CreateUserForm from '../login/CreateUserForm.jsx';
import LoginForm from '../login/LoginForm.jsx';
import { asyncConnect } from 'redux-async-connect';
import { isLoaded as isAuthLoaded, load as loadAuth, logout } from 'redux/modules/auth';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    if (!isAuthLoaded(getState())) {
      promises.push(dispatch(loadAuth()));
    }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({user: state.auth.user}),
  {logout, pushState: push})
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    pushState: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className={s.layout}>
        <header>
          <h1 className={s.expanded}><Link to="/">zenow</Link></h1>
          <h1 className={s.condensed}><Link to="/">z</Link></h1>
          <nav>
            <ul>
              <li><Link to="/">
                <i className="fa fa-table"></i>data sets
              </Link></li>
              <li><Link to="/">
                <i className="fa fa-file-text"></i>data types
              </Link></li>
              <li><Link to="/">
                <i className="fa fa-book"></i>documentation
              </Link></li>
              <li><Link to="/">
                <i className="fa fa-sign-in"></i>log in
              </Link></li>
            </ul>
          </nav>
        </header>
        <div className={s.subHeaderContent}>
          <div className={s.signUpContainer + ' ' + s.clickableShadow}>
            <h1>zenow</h1>
            <p>create and share data</p>
            <CreateUserForm />
            <br />
            <LoginForm />
          </div>
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}
