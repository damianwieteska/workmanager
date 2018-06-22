import React from 'react';
import { Link } from 'react-router-dom';

const Error = (props) => (~
  %div
    { props.error &&
      (~
        .alert.alert-danger
          %p
            {props.error}
      ~)
    }
~)

export { Error };