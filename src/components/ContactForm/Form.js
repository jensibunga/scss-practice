import React from 'react';
import { StyledFormContent } from './styles';
import { dripForm } from 'react-drip-form';
import Input from './Input';

const Form = ({ handlers, meta: { invalid, pristine } }) => (
  <form onSubmit={handlers.onSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <Input id="name" type="text" name="name" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Input id="email" type="email" name="email" />
    </div>
    <div>
      <label htmlFor="message">Message</label>
      <Input id="message" type="text" name="message" />
    </div>

    <button
      type="submit"
      // disabled={invalid || pristine}
      onClick={handlers.onSubmit}
    >
      Send
    </button>
  </form>
);

export default dripForm({
  validations: {
    email: {
      required: true,
      email: true,
    },
  },
})(Form);
