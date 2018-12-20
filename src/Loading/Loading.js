import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './styles';

class Loading extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
    };
  }
  componentDidMount() {
    const stopper = this.props.text + '...'
    this.interval = window.setInterval(
      function() {
        if (this.state.text === stopper) {
          this.setState(function() {
            return {
              text: this.props.text,
            };
          });
        } else {
          this.setState(function(prevState) {
            return {
              text: prevState.text + '.',
            };
          });
        }
      }.bind(this),
      this.props.speed,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <StyledText>{this.state.text}</StyledText>
      </div>
    );
  }
}

Loading.propTypes = {
  text: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
  text: 'Loading',
  speed: 300,
};

export default Loading;
