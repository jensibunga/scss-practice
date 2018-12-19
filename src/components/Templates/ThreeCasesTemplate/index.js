import React from 'react';
import { Wrapper, TopStyledWrapper, StyledWrapper } from './styles';
import { Column } from '../../Home/styles';

import Caseitem from '../CaseItem/index';

class ThreeCasesTemplate extends React.Component {
  render() {
    return (
      this.props.cases &&
      (this.props.case_image_position === 'right' ? (
        <Wrapper>
          <Column start={1} end={4}>
            <TopStyledWrapper>
              <Caseitem
                client_name={this.props.cases[0].client_name}
                case_introduction={this.props.cases[0].case_introduction}
                url={this.props.cases[0].url}
              />
            </TopStyledWrapper>
            <StyledWrapper>
              <Caseitem
                client_name={this.props.cases[1].client_name}
                case_introduction={this.props.cases[1].case_introduction}
                url={this.props.cases[1].url}
              />
            </StyledWrapper>
          </Column>
          <Column start={5} end={13}>
            <Caseitem
              image={this.props.cases[2].image_wide}
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
              image={this.props.cases[2].image_wide}
              client_name={this.props.cases[2].client_name}
              case_introduction={this.props.cases[2].case_introduction}
              url={this.props.cases[2].url}
            />
          </Column>

          <Column start={10} end={13}>
            <StyledWrapper>
              <Caseitem
                client_name={this.props.cases[0].client_name}
                case_introduction={this.props.cases[0].case_introduction}
                url={this.props.cases[0].url}
              />
            </StyledWrapper>
            <TopStyledWrapper>
              <Caseitem
                client_name={this.props.cases[1].client_name}
                case_introduction={this.props.cases[1].case_introduction}
                url={this.props.cases[1].url}
              />
            </TopStyledWrapper>
          </Column>
        </Wrapper>
      ))
    );
  }
}
export default ThreeCasesTemplate;
