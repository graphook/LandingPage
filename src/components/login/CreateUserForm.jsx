import React, {Component, PropTypes} from 'react';
import s from '../styles/index.scss';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import createUserValidator from './createUserValidator';
import textInput from '../forms/textInput.jsx';
import {createUser, login} from 'redux/modules/auth';
import ApiClient from 'helpers/ApiClient';
const client = new ApiClient();

const asyncValidate = (data) => {
  if (!data.email && !data.username) {
    return Promise.resolve({});
  }
  return client.post('/v1/user/validate', {
    data: {
      email: data.email,
      username: data.username,
      password: 'something'
    }
  })
  .then(() => { return Promise.resolve({}); })
  .catch((err) => {
    const errObj = {};
    Object.keys(err.errors).forEach((errorKey) => {
      errObj[errorKey.replace('body.', '')] = err.errors[errorKey];
    });
    throw errObj;
  });
};
@reduxForm({
  form: 'createUser',
  fields: ['email', 'username', 'password1', 'password2'],
  validate: createUserValidator,
  asyncValidate,
  asyncBlurFields: ['email', 'username']
})
@connect(state => ({
  createdUser: state.auth.createdUser,
  loading: state.auth.creatingUser,
  error: state.auth.createUserError,
  user: state.auth.user
}), {createUser, login})
export default class CreateUserForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    createUser: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    user: PropTypes.object,
    whenDone: PropTypes.func,
    error: PropTypes.string,
    loading: PropTypes.bool,
    createdUser: PropTypes.bool
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.createdUser && !this.props.createdUser) {
      this.props.login(this.userInfo);
    }
    if (nextProps.user && !this.props.user && this.props.whenDone) {
      this.props.whenDone();
    }
  }
  onSubmit = (values) => {
    this.userInfo = {
      username: values.username,
      email: values.email,
      password: values.password1
    };
    this.props.createUser(this.userInfo);
  }
  render() {
    return (
      <form className="createUserForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h2>create a developer account</h2>
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
          placeholder="username"
          icon="fa-user" />
        <Field
          name="email"
          type="email"
          component={textInput}
          placeholder="email"
          icon="fa-envelope" />
        <Field
          name="password1"
          type="password"
          component={textInput}
          placeholder="password"
          icon="fa-lock" />
        <Field
          name="password2"
          type="password"
          component={textInput}
          placeholder="confirm password"
          icon="fa-lock" />
        <div className={s.submitArea}>
          <input type="submit" className={s.primaryButton} value="create account" />
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
