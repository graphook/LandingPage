import React, {Component, PropTypes} from 'react';
import s from '../styles/index.scss';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import createUserValidator from './createUserValidator';
import textInput from '../forms/textInput.jsx';
import * as validationActions from 'redux/modules/formValidation';

const asyncValidate = (data, dispatch, {isValid}) => {
  if (!data.email && !data.username) {
    return Promise.resolve({});
  }
  return isValid('user', {
    email: data.email,
    username: data.username,
    password: 'something'
  });
};
@connect(state => ({
    user: state.auth.user
  }),
  dispatch => bindActionCreators(validationActions, dispatch)
)
@reduxForm({
  form: 'createUser',
  fields: ['email', 'username', 'password1', 'password2'],
  validate: createUserValidator,
  asyncValidate,
  asyncBlurFields: ['email', 'username']
})

export default class CreateUserForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  }

  onSubmit = (values) => {
    console.log(values);
  }
  /*componentWillReceiveProps(nextProps) {
    if (nextProps.user && this.props.whenDone) {
      this.props.whenDone();
    }
  }*/
  render() {
    return (
      <form className="createUserForm" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <h2>create a developer account</h2>
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
        <input type="submit" className={s.primaryButton} value="create account" />
      </form>
    );
  }
}
