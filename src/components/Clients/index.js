import React from 'react';
import axios from 'axios';

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
      <div className="client-wrapper">
        <div className="client-header">
          <h1 className="title">Clients</h1>
          <p className="client-comment">
            We value a great working relationship with our clients above all
            else. It's why they often come to our parties . It's also why we're
            able to challenge and inspire them to reach for the stars.
          </p>
        </div>
        <div className="logo-grid">
          {this.state.clients &&
            this.state.clients.map(item => {
              return (
                <div className="logo-wrapper">
                  <img className="logo-image" src={item.logo} alt={item.name} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Clients;
