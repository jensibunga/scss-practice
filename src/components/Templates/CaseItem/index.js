import React from 'react';
import { CaseImage, UnstyledLink, StyledClientName, Title } from './styles';

const Caseitem = props => {
  return (
    <div>
      {props.image && <CaseImage src={props.image} />}

      <StyledClientName>{props.client_name}</StyledClientName>
      <Title>{props.case_introduction}</Title>

      <UnstyledLink href={props.url}>
        <span tabIndex="0">
          <i className="fa fa-caret-right" />
          View Source
        </span>
      </UnstyledLink>
    </div>
  );
};

export default Caseitem;
