import React from 'react';
import { FormControl } from '../FormControl';

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea className="materialize-textarea" {...input} {...restProps} />
    </FormControl>
  );
};
