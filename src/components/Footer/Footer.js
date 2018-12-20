import React from 'react';
import DeptLogo from '../../Generic/logo/DeptLogo';
import { FooterWrapper } from './styles';

class Footer extends React.Component {
  render() {
    return (
      <FooterWrapper>
        <DeptLogo />
      </FooterWrapper>
    );
  }
}

export default Footer;
