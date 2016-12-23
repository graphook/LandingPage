import React from 'react';
import s from '../styles/index.scss';

export default function textInput({ input, placeholder, icon, type, meta: { touched, error, asyncValidating } }) {
  const renderedIcon = (asyncValidating) ? 'fa-refresh fa-spin' : icon;
  return (
    <div className={s.iconTextInput}>
      {error && touched && (<p className={s.error}>
        <i className="fa fa-exclamation-circle" aria-hidden="true"></i> {error}
      </p>)}
      <i className={ renderedIcon + ' fa ' + s.fieldIcon } aria-hidden="true"></i>
      <input {...input} placeholder={placeholder} type={type} />
    </div>
  );
}
