import React from 'react';
import axios from 'axios';
import { Wrapper, LogoWrapper, LogoGrid , ClientHeader} from './styles';

class Clients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: null,
    };
  }
  componentDidMount() {
    axios
      .get('/clients.json')
      .then(response => {
        console.log('response', response);
        this.setState({
          clients: response.data,
        });
      })
      .catch(error => {
        console.log('error', error);
      });
  }
  render() {
    return (
      <Wrapper>
        <ClientHeader>
          <h1>Clients</h1>
          <p>
          We value a great working relationship with our clients above all else.
          It's why they often come to our parties . It's also why we're able to
          challenge and inspire them to reach for the stars.
          </p>
        </ClientHeader>
        <LogoGrid>
          {this.state.clients &&
            this.state.clients.map(item => {
              return (
                <LogoWrapper>
                  <img src={item.logo} alt={item.name} />
                </LogoWrapper>
              );
            })}
        </LogoGrid>
      </Wrapper>
    );
  }
}
export default Clients;
