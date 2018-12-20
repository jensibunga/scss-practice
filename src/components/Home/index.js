import React from 'react';
import FourCasesTemplate from '../Templates/FourCasesTemplate';
import ThreeCasesTemplate from '../Templates/ThreeCasesTemplate';
import TwoCasesTemplate from '../Templates/TwoCasesTemplate';
import HomepageBanner from '../HomepageBanner/index';
import FilterBar from '../FilterBar/index';
import Clients from '../Clients/index';
import Quote from '../Quote';
import ContactForm from '../ContactForm/index';
import Footer from '../Footer/Footer';
import Loading from '../../Loading/Loading';
import { Column, Space } from '../Home/styles';
import axios from 'axios';

import { Container, ContentContainer } from './styles';

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
        }, 5 * 1000);
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

        <Column start={1} end={-1}>
          <FilterBar />
        </Column>

        <Column start={1} end={-1}>
          <ContentContainer>
            {this.state.cases === 'loading' ? (
              <Loading />
            ) : (
              <Column start={1} end={-1}>
                <Space margin={50} />
                <FourCasesTemplate cases={this.state.cases.slice(0, 4)} />

                <Space margin={50} />
                <ThreeCasesTemplate
                  cases={this.state.cases.slice(4, 7)}
                  case_image_position="left"
                />
                <Space margin={50} />
                <TwoCasesTemplate cases={this.state.cases.slice(7, 9)} />
                <Space margin={50} />
                <ThreeCasesTemplate
                  cases={this.state.cases.slice(9, 12)}
                  case_image_position="right"
                />
                <Space margin={50} />
                <FourCasesTemplate cases={this.state.cases.slice(12, 16)} />
              </Column>
            )}
            <Column start={1} end={-1}>
              <Space margin={50} />
              <Quote />
            </Column>

            {this.state.cases && (
              <Column start={1} end={-1}>
                <Space margin={50} />
                <TwoCasesTemplate cases={this.state.cases.slice(16, 18)} />
              </Column>
            )}
          </ContentContainer>
        </Column>

        <Column start={1} end={-1}>
          <Space margin={50} />
          <Clients />
        </Column>

        <Column start={1} end={-1}>
          <Space margin={50} />
          <ContactForm />
        </Column>

        <Footer />
      </Container>
    );
  }
}

export default Home;
