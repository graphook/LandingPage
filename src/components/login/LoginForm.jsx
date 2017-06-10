import React, {Component, PropTypes} from 'react';
import s from '../styles/index.scss';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import loginValidator from './loginValidator';
import textInput from '../forms/textInput.jsx';
import * as authActions from 'redux/modules/auth';
import constants from '../../constants';

@reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate: loginValidator
})
@connect(state => ({
  user: state.auth.user,
  error: state.auth.loginError,
  loading: state.auth.loggingIn,
}), authActions)
export default class CreateUserForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    whenDone: PropTypes.func,
    login: PropTypes.func.isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user && this.props.whenDone) {
      this.props.whenDone();
    }
  }
  onSubmit = (values) => {
    this.props.login({
      username: new RegExp(constants.usernameRegex).test(values.username) ? values.username : undefined,
      email: new RegExp(constants.emailRegex).test(values.username) ? values.username : undefined,
      password: values.password
    });
  }
  render() {
    return (
      <form className="createUserForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h2>Log In</h2>
        {(() => {
          if (this.props.error) {
            return (
              <p className={s.error}>
                {(this.props.error.auth) ? this.props.error.auth : 'An error occurred. Try again.' }
              </p>
            );
          }
        })()}
        <Field
          name="username"
          type="text"
          component={textInput}
          placeholder="username or email"
          icon="fa-user" />
        <Field
          name="password"
          type="password"
          component={textInput}
          placeholder="password"
          icon="fa-lock" />
        <div className={s.submitArea}>
          <input type="submit" className={s.primaryButton} value="log in" />
          {(() => {
            if (this.props.loading) {
              return (
                <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
              );
            }
          })()}
        </div>
      </form>
    );
  }
}
