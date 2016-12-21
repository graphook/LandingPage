import React, {Component, PropTypes} from 'react';
import s from '../styles/index.scss';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import loginValidator from './loginValidator';
import textInput from '../forms/textInput.jsx';
import * as authActions from 'redux/modules/auth';

@connect(() => ({}), authActions)
@reduxForm({
  form: 'login',
  fields: ['username', 'password'],
  validate: loginValidator
})
export default class CreateUserForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  onSubmit = (values) => {
    this.props.login({
      username: values.username,
      email: values.username,
      password: values.password
    })
  }
  render() {
    return (
      <form className="createUserForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h2>log in</h2>
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
        <input type="submit" className={s.primaryButton} value="log in" />
      </form>
    );
  }
}
