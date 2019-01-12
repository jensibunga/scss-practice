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
import { Space } from '../Home/styles';
import axios from 'axios';

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
      <div className="container">
        <div className="column-start-1 column-end--1">
          <HomepageBanner />
        </div>

        {/* <Column start={1} end={-1}>
          <FilterBar />
        </Column> */}

        <div className="column-start-1 column-end--1">
          <div className="content-container">
            {this.state.cases === 'loading' ? (
              <Loading />
            ) : (
              <div className="column-start-1 column-end--1">
                
                <div className="mt-50" />
                <FourCasesTemplate cases={this.state.cases.slice(0, 4)} />

                <div className="mt-50" />
                <ThreeCasesTemplate
                  cases={this.state.cases.slice(4, 7)}
                  case_image_position="left"
                />
                <div className="mt-50" />
                <TwoCasesTemplate cases={this.state.cases.slice(7, 9)} />
                <div className="mt-50" />
                <ThreeCasesTemplate
                  cases={this.state.cases.slice(9, 12)}
                  case_image_position="right"
                />
                <div className="mt-50" />
                <FourCasesTemplate cases={this.state.cases.slice(12, 16)} />
              </div>
            )}
            <div className="column-start-1 column-end--1">
            <div className="mt-50" />
              <Quote />

              {this.state.cases && (
                <div clasName="column-start-1 column-end--1">
                 <div className="mt-50" />
                  <TwoCasesTemplate cases={this.state.cases.slice(16, 18)} />
                </div>
              )}
            </div>
          </div>

          <div className="column-start-1 column-end--1">
          <div className="mt-50" />
            <Clients />
          </div>

          <div className="column-start-1 column-end--1">
          <div className="mt-50" />
            <ContactForm />
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
