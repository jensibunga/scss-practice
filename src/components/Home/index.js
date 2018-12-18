import React from 'react';
import FourCasesTemplate from '../Templates/FourCasesTemplate';
import ThreeCasesTemplate from '../Templates/ThreeCasesTemplate';
import TwoCasesTemplate from '../Templates/TwoCasesTemplate';
import HomepageBanner from '../HomepageBanner/index';
import ViewCaseButton from '../ViewCaseButton/index';
import FilterBar from '../FilterBar/index';
import Clients from '../Clients/index';
import Quote from '../Quote';
import ContactForm from '../ContactForm/index';
import Footer from '../Footer/Footer';
import axios from 'axios';

import {
  Container,
  HomepageBannerWrapper,
  ButtonWrapper,
  FilterBarWrapper,
  ProjectWrapper,
  ContactFormWrapper,
  ClientWrapper,
  QuoteWrapper,
} from './styles';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cases: 'loading',
    };
  }

  componentDidMount() {
    axios
      .get('/cases.json')
      .then(response => {
        setTimeout(() => {
          console.log('response', response);
          this.setState({
            cases: response.data,
          });
        }, 3000);
      })
      .catch(error => {
        console.log('error', error);
      });
  }

  render() {
    return (
      <Container>
        <HomepageBannerWrapper>
          <HomepageBanner />
        </HomepageBannerWrapper>
        <ButtonWrapper>
          <ViewCaseButton />
        </ButtonWrapper>
        <FilterBarWrapper>
          <FilterBar />
        </FilterBarWrapper>

        {this.state.cases === 'loading' ? (
          <div>Loading</div>
        ) : (
          <ProjectWrapper>
            <FourCasesTemplate cases={this.state.cases.slice(0, 4)} />
            {/* <FourCasesTemplate cases={this.state.cases.slice(2, 4)} /> */}

            <ThreeCasesTemplate
              cases={this.state.cases.slice(4, 7)}
              position="right"
            />
            <TwoCasesTemplate cases={this.state.cases.slice(7, 9)} />
            <ThreeCasesTemplate
              cases={this.state.cases.slice(9, 12)}
              position="l"
            />
            <FourCasesTemplate cases={this.state.cases.slice(12, 16)} />
          </ProjectWrapper>
        )}
        <QuoteWrapper>
          <Quote />
        </QuoteWrapper>

        {this.state.cases && (
          <ProjectWrapper>
            <TwoCasesTemplate cases={this.state.cases.slice(16, 18)} />
          </ProjectWrapper>
        )}

        <ClientWrapper>
          <Clients />
        </ClientWrapper>

        <ContactFormWrapper>
          <ContactForm />
        </ContactFormWrapper>

        <Footer />
      </Container>
    );
  }
}

export default Home;
