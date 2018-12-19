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
import { Column } from '../Home/styles';
import axios from 'axios';

import { Container, ButtonWrapper } from './styles';

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
        <Column start={1} end={-1}>
          <HomepageBanner />
        </Column>
        <ButtonWrapper>
          <ViewCaseButton />
        </ButtonWrapper>
        <Column start={1} end={-1}>
          <FilterBar />
        </Column>

        {this.state.cases === 'loading' ? (
          <div>Loading</div>
        ) : (
          <Column start={2} end={12}>
            <FourCasesTemplate cases={this.state.cases.slice(0, 4)} />
            {/* <FourCasesTemplate cases={this.state.cases.slice(2, 4)} /> */}

            <ThreeCasesTemplate
              cases={this.state.cases.slice(4, 7)}
              case_image_position="left"
            />
            <TwoCasesTemplate cases={this.state.cases.slice(7, 9)} />
            <ThreeCasesTemplate
              cases={this.state.cases.slice(9, 12)}
              case_image_position="right"
            />
            <FourCasesTemplate cases={this.state.cases.slice(12, 16)} />
          </Column>
        )}
        <Column start={2} end={12}>
          <Quote />
        </Column>

        {this.state.cases && (
        <Column start={2} end={12}>
            <TwoCasesTemplate cases={this.state.cases.slice(16, 18)} />
          </Column>
        )}

        <Column start={1} end={-1}>
          <Clients />
        </Column>

        <Column start={1} end={-1}>
          <ContactForm />
        </Column>

        <Footer />
      </Container>
    );
  }
}

export default Home;
