import React from 'react';
import Navbar from '../NavBar/index';
import {
  HomepageBannerImage,
  HomepageBannerContainer,
  TextWrapper,
  TitleText,
  ButtonWrapper,
  LogoNameWrapper,
  ImageLogoName,
  NavbarWrapper,
  TopBarWrapper
} from './styles';

class HomepageBanner extends React.Component {
  render() {
    return (
      <HomepageBannerContainer>
        <TopBarWrapper>
          <ImageLogoName src="logos/deptLogo.png" alt="dept" />
          <Navbar />
        </TopBarWrapper>
        <TextWrapper>
          <TitleText>WORK</TitleText>
        </TextWrapper>
        <ButtonWrapper>
          {' '}
          <button>View Case</button>
        </ButtonWrapper>
        <HomepageBannerImage />
      </HomepageBannerContainer>
    );
  }
}

export default HomepageBanner;
