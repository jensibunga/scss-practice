import React from 'react';

const Caseitem = props => {
  return (
    <div>
      {props.image && <img className="case-image" src={props.image} alt={props.image} />}

      <div  className="client-name">{props.client_name}</div>
      <div className="title">{props.case_introduction}</div>

      <div className="unstyled-link" href={props.url}>
        <a   href={props.url}  tabIndex="0">
          <i className="fa fa-caret-right" />
          
          View Case
        </a>
      </div>
    </div>
  );
};

export default Caseitem;
 