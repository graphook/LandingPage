import React from 'react';
import s from '../styles/index.scss';

export default function textInput({ input, placeholder, icon, type, meta: { touched, error, asyncValidating } }) {
  let renderedIcon = icon;
  let renderedTitle = placeholder;
  if (asyncValidating) {
    renderedIcon = 'fa-refresh fa-spin';
  } else if (error && touched) {
    renderedIcon = 'fa-exclamation-circle';
    renderedTitle = error;
  }
  return (
    <div className={s.iconTextInput}>
      <i className={ renderedIcon + ' fa ' + s.fieldIcon + ((error && touched) ? ' ' + s.error : '')} aria-hidden="true"></i>
      <input {...input}
        placeholder={placeholder}
        type={type}
        title={renderedTitle}
        className={(error && touched) ? s.error : ''} />
    </div>
  );
}
