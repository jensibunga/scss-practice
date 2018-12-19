import React from 'react';
import Navbar from '../NavBar/index';
import Button from '../ViewCaseButton/index';
import {
  HomepageBannerImage,
  HomepageBannerContainer,
  TextWrapper,
  TitleText,
  ButtonWrapper,
  ImageLogoName,
  TopBarWrapper,
} from './styles';

class HomepageBanner extends React.Component {
  render() {
    return (
      <HomepageBannerContainer>
        <TopBarWrapper>
          <ImageLogoName src="images/logos/deptLogo.png" alt="dept" />
          <Navbar />
        </TopBarWrapper>
        <TextWrapper>
          <TitleText>WORK</TitleText>
        </TextWrapper>
        <ButtonWrapper>
          <Button />
        </ButtonWrapper>

        <HomepageBannerImage />
      </HomepageBannerContainer>
    );
  }
}

export default HomepageBanner;
