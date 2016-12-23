import React, {Component, PropTypes} from 'react';
import s from '../styles/index.scss';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import loginValidator from './loginValidator';
import textInput from '../forms/textInput.jsx';
import * as authActions from 'redux/modules/auth';

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
    error: PropTypes.string,
    loading: PropTypes.bool
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.user && this.props.whenDone) {
      this.props.whenDone();
    }
  }
  onSubmit = (values) => {
    this.props.login({
      username: values.username,
      email: values.username,
      password: values.password
    });
  }
  render() {
    return (
      <form className="createUserForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h2>log in</h2>
        {(() => {
          if (this.props.error) {
            return (
              <p className={s.error}>
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {this.props.error}
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
