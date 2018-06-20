import React from 'react';
import validator from 'validator';
import uniqid from 'uniqid'

// Form field components
export const renderInputField = (props) => {
  let {
    input,
    label,
    type,
    appendLabel,
    placeholder,
    componentClass,
    fieldClass,
    meta: { touched, error, warning }
  } = props

  let fieldId = uniqid('field-')
  let labelHtml = ''
  if (label) {
    labelHtml = <label htmlFor={fieldId}>{label}</label>
  } 

  return (
    <div className={componentClass}>
      {!appendLabel && labelHtml}
      <input
        {...input}
        id={fieldId}
        className={fieldClass}
        placeholder={placeholder}
        type={type} />
      {appendLabel && labelHtml}
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  )
};

export const required = value => {
  if (!value) {
    return <div className="form-error is-visible">This field is required.</div>;
  }
};

export const email = value => {
  if (!validator.isEmail(value)) {
    return <div className="form-error is-visible">{value} is not a valid email.</div>;
  }
};