import React from 'react';
import Form from './Form';
import { Wrapper, StyledFormWrapper } from './styles';

class ContactForm extends React.Component {

  handleSubmit = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Wrapper>
        <h1>Question? We are here to help!</h1>
        <StyledFormWrapper>
          <Form onValidSubmit={this.handleSubmit} onSubmit={this.handleSubmit} />
        </StyledFormWrapper>
      </Wrapper>
    );
  }
}
export default ContactForm;
