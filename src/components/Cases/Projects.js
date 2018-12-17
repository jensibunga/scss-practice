import React from 'react';
import axios from 'axios';
import {
  Wrapper,
  CaseWrapper,
  CaseImage,
  UnstyledLink,
  ImageWrapper,
  StyledClientName,
  Title,
} from './styles';

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: null,
    };
  }
  componentDidMount() {
    axios
      .get('/cases.json')
      .then(response => {
        console.log('response', response);
        this.setState({
          lists: response.data,
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  render() {
    return (
      <Wrapper>
        {this.state.lists &&
          this.state.lists.map(item => {
            return (
              <CaseWrapper>
                <ImageWrapper>
                  <CaseImage src={item.image} />
                </ImageWrapper>
                <StyledClientName>
                  {item.client_name.toUpperCase()}
                </StyledClientName>
                <Title>{item.case_introduction}</Title>

                <UnstyledLink href={item.url}>
                  {' '}
                  <i className="fa fa-caret-right" /> View Source
                </UnstyledLink>
              </CaseWrapper>
            );
          })}
      </Wrapper>
    );
  }
}
export default Projects;
