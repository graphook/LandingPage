import React from 'react';
import s from '../styles/index.scss';

const LoginForm = React.createClass({
  render() {
    return (
      <form className="createUserForm">
        <h2>login</h2>
        <div className={s.iconTextInput}>
          <i className="fa fa-user" aria-hidden="true"></i>
          <input type="text" placeholder="username / email"></input>
        </div>
        <div className={s.iconTextInput}>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="password"></input>
        </div>
        <input type="submit" className={s.primaryButton} value="log in" />
      </form>
    );
  }
});

export default LoginForm;
