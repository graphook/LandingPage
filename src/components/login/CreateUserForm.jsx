import React from 'react';
import s from '../styles/index.scss';

const CreateUserForm = React.createClass({
  render() {
    return (
      <form className="createUserForm">
        <h2>create a developer account</h2>
        <div className={s.iconTextInput}>
          <i className="fa fa-user" aria-hidden="true"></i>
          <input type="text" placeholder="username"></input>
        </div>
        <div className={s.iconTextInput}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input type="email" placeholder="email"></input>
        </div>
        <div className={s.iconTextInput}>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="password"></input>
        </div>
        <div className={s.iconTextInput}>
          <i className="fa fa-lock" aria-hidden="true"></i>
          <input type="password" placeholder="confirm password"></input>
        </div>
        <input type="submit" className={s.primaryButton} value="create account" />
      </form>
    );
  }
});

export default CreateUserForm;
