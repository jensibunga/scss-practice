import React from 'react';
import Caseitem from '../CaseItem';
import { Wrapper } from '../styles';

class TwoCasesTemplate extends React.Component {
  render() {
    return (
      this.props.cases && (
        <Wrapper>
          {this.props.cases.map(item => {
            return (
              <Caseitem
                image={item.image}
                client_name={item.client_name}
                case_introduction={item.case_introduction}
                url={item.url}
              />
            );
          })}
        </Wrapper>
      )
    );
  }
}
export default TwoCasesTemplate;
