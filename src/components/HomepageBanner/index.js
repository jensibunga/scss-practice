import React from 'react';
import DeptLogo from '../../Generic/logo/DeptLogo';
import Navbar from '../NavBar/index';

import {
  HomepageBannerContainer,
  TextWrapper,
  TitleText,
  ButtonWrapper,
  TopBarWrapper,
  TopBarWrapperContent
} from './styles';

class HomepageBanner extends React.Component {
  render() {
    return (
      <HomepageBannerContainer>
        <TopBarWrapper>
          <TopBarWrapperContent>
          <DeptLogo />
          <Navbar />
          </TopBarWrapperContent>
        </TopBarWrapper>

        
        <TextWrapper>
          <TitleText>WORK</TitleText>
        </TextWrapper>


        <ButtonWrapper>
          <button>View Case</button>
        </ButtonWrapper>

     
      </HomepageBannerContainer>
    );
  }
}

export default HomepageBanner;
