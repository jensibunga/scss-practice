import React from 'react';
import {
  Wrapper,
  CaseWrapper,
  CaseImage,
  UnstyledLink,
  ImageWrapper,
  StyledClientName,
  Title,
} from './styles';

class ImageOnLeftCases extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.cases &&
          this.props.cases.map(item => {
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
export default ImageOnLeftCases;
