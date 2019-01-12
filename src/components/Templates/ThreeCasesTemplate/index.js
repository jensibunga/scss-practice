import React from 'react';

import Caseitem from '../CaseItem/index';

class ThreeCasesTemplate extends React.Component {
  render() {
    return (
      this.props.cases &&
      (this.props.case_image_position === 'right' ? (
        <article className="three-cases-wrapper">
          <div className="column-start-1 column-end--1 column-desktop-start-1 column-desktop-end-4">
            <div className="three-cases-top-wrapper">
              <Caseitem
                client_name={this.props.cases[0].client_name}
                case_introduction={this.props.cases[0].case_introduction}
                url={this.props.cases[0].url}
              />
            </div>
            <div className="three-cases-wrapper">
              <Caseitem
                client_name={this.props.cases[1].client_name}
                case_introduction={this.props.cases[1].case_introduction}
                url={this.props.cases[1].url}
              />
            </div>
          </div>

          <div className="column-start-1 column-end--1 column-desktop-start-6 column-desktop-end-13">
            <Caseitem
              image={this.props.cases[2].image_wide}
              client_name={this.props.cases[2].client_name}
              case_introduction={this.props.cases[2].case_introduction}
              url={this.props.cases[2].url}
            />
          </div>
        </article>
      ) : (
        <article className="three-cases-wrapper">
          <div className="column-start-1 column-end--1 column-desktop-start-1 column-desktop-end-9">
            <Caseitem
              image={this.props.cases[2].image_wide}
              client_name={this.props.cases[2].client_name}
              case_introduction={this.props.cases[2].case_introduction}
              url={this.props.cases[2].url}
            />
          </div>

          <div className="column-start-1 column-end--1 column-desktop-start-10 column-desktop-end-13">
            <div className="three-cases-top-wrapper">
              <Caseitem
                client_name={this.props.cases[0].client_name}
                case_introduction={this.props.cases[0].case_introduction}
                url={this.props.cases[0].url}
              />
            </div>
            <div className="three-cases-wrapper">
              <Caseitem
                client_name={this.props.cases[1].client_name}
                case_introduction={this.props.cases[1].case_introduction}
                url={this.props.cases[1].url}
              />
            </div>
          </div>
        </article>
      ))
    );
  }
}
export default ThreeCasesTemplate;
