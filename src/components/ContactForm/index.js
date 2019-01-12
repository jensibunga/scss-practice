import React from 'react';
import Form from './Form';


class ContactForm extends React.Component {

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <div className="contact-form-wrapper">
        <h1>Question? We are here to help!</h1>
        <div className="form-wrapper">
          <Form onValidSubmit={this.handleSubmit} onSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}
export default ContactForm;
