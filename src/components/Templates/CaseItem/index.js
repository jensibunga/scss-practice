import React from 'react';
import {
  CaseWrapper,
  CaseImage,
  UnstyledLink,
  StyledClientName,
  Title,
} from './styles';

const Caseitem = props => {
  return (
    <CaseWrapper>
      {props.image && <CaseImage src={props.image} />}

      <StyledClientName>{props.client_name}</StyledClientName>
      <Title>{props.case_introduction}</Title>

      <UnstyledLink href={props.url}>
        <span tabIndex="0">
          <i className="fa fa-caret-right" />
          View Source
        </span>
      </UnstyledLink>
    </CaseWrapper>
  );
};

export default Caseitem;
