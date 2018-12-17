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

const Caseitem = props => {
  return (
    <CaseWrapper>
      {props.image && (
        <ImageWrapper>
          <CaseImage src={props.image} />
        </ImageWrapper>
      )}

      <StyledClientName>{props.client_name.toUpperCase()}</StyledClientName>
      <Title>{props.case_introduction}</Title>

      <UnstyledLink href={props.url}>
        <span tabIndex="0">
          <i className="fa fa-caret-right" />View Source
        </span>
      </UnstyledLink>
    </CaseWrapper>
  );
};

export default Caseitem;
