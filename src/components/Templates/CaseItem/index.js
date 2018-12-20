import React from 'react';
import { CaseImage, UnstyledLink, StyledClientName, Title } from './styles';

const Caseitem = props => {
  return (
    <div>
      {props.image && <CaseImage src={props.image} />}

      <StyledClientName>{props.client_name}</StyledClientName>
      <Title>{props.case_introduction}</Title>

      <UnstyledLink  href={props.url}>
        <a   href={props.url}  tabIndex="0">
          <i className="fa fa-caret-right" />
          
          View Case
        </a>
      </UnstyledLink>
    </div>
  );
};

export default Caseitem;
 