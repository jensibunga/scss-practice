import React from 'react';
import { dripFormField } from 'react-drip-form';

const Input = ({ input, meta: { error, dirty, touched }, ...props }) => (
  <div>
    <input {...props} {...input} />
    {error && dirty && touched && <span style={{ color: 'red' }}>{error}</span>}
  </div>
);

export default dripFormField()(Input);
