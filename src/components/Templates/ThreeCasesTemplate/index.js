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

import Caseitem from '../CaseItem';

class ThreeCasesTemplate extends React.Component {
  render() {
    return (
      <Wrapper>
        {this.props.cases &&
          (this.props.position === 'left' ? (
            <div>
              <div>
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
              </div>

              <Caseitem
                image={this.props.cases[2].image}
                client_name={this.props.cases[2].client_name}
                case_introduction={this.props.cases[2].case_introduction}
                url={this.props.cases[2].url}
              />
            </div>
          ) : (
            <div>
              <Caseitem
                image={this.props.cases[2].image}
                client_name={this.props.cases[2].client_name}
                case_introduction={this.props.cases[2].case_introduction}
                url={this.props.cases[2].url}
              />

              <div>
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
              </div>
            </div>
          ))}
      </Wrapper>
    );
  }
}
export default ThreeCasesTemplate;
