import React from 'react';
import { Link } from 'react-router-dom';

const Error = (props) => (~
  .alert.alert-danger
    %p
      {props.message}
~)

export { Error };