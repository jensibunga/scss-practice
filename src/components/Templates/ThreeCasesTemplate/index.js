import React from 'react';
import { Wrapper } from './styles';
import { Column } from '../../Home/styles';

import Caseitem from '../CaseItem';

class ThreeCasesTemplate extends React.Component {
  render() {
    return (
      this.props.cases &&
      (this.props.case_image_position === 'right' ? (
        <Wrapper>
          <Column start={1} end={4}>
            <Caseitem
              client_name={this.props.cases[0].client_name}
              case_introduction={this.props.cases[0].case_introduction}
              url={this.props.cases[0].url}
            />
            <Caseitem
              client_name={this.props.cases[1].client_name}
              case_introduction={this.props.cases[1].case_introduction}
              url={this.props.cases[1].url}
            />
          </Column>
          <Column start={5} end={13}>
            <Caseitem
              image={this.props.cases[2].image}
              client_name={this.props.cases[2].client_name}
              case_introduction={this.props.cases[2].case_introduction}
              url={this.props.cases[2].url}
            />
          </Column>
        </Wrapper>
      ) : (
        <Wrapper>
          <Column start={1} end={9}>
            <Caseitem
              image={this.props.cases[2].image}
              client_name={this.props.cases[2].client_name}
              case_introduction={this.props.cases[2].case_introduction}
              url={this.props.cases[2].url}
            />
          </Column>

          <Column start={10} end={13}>
            <Caseitem
              client_name={this.props.cases[0].client_name}
              case_introduction={this.props.cases[0].case_introduction}
              url={this.props.cases[0].url}
            />
            <Caseitem
              client_name={this.props.cases[1].client_name}
              case_introduction={this.props.cases[1].case_introduction}
              url={this.props.cases[1].url}
            />
          </Column>
        </Wrapper>
      ))
    );
  }
}
export default ThreeCasesTemplate;
