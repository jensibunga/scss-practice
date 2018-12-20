import styled from 'styled-components/macro';

export const HomepageBannerContainer = styled.div`
  position: relative;
  height: 320px;
  background: url('/images/Vacanselect-2-1440x810-c.jpg')  no-repeat center center fixed;
    background-size: cover;

  @media only screen and (min-width: 541px) {
    width: 100%;
    height: 940px;
  }
`;

export const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  z-index: 999;
  padding: 20px 20px 10px 20px;
  border-bottom: 1px solid #f3f6f6;

  @media (min-width: 541px) {
    border: none;
    background: none;
    position: absolute;
    grid-column-start: 2;
    grid-column-end: 12;

    height: 80px;

    max-width: 1200px;
    margin: 0 auto;
  }
  svg {
    width: 55px;
    height: 15px;

    @media (min-width: 769px) {
      height: 28px;
    }
  }
`;

export const TopBarWrapperContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 541px) {
    border-bottom: 1px solid #0e0e0e;
  }
`;

export const HomepageBannerImage = styled.img`
  @media only screen and (max-width: 540px) {
    grid-column: 1/-1;
    height: 320px;
    width: 100%;
  }
  @media only screen and (min-width: 541px) {
    grid-column: 1/-1;
    height: 940px;
    width: 100%;
  }
`;

export const LogoNameWrapper = styled.div`
  grid-column: 2/12;
  position: absolute;
  border-bottom: 1px solid #0e0e0e;
  width: 100%;
`;

export const ImageLogoName = styled.img`
  @media only screen and (max-width: 540px) {
    height: 14px;
    width: 50px;
    padding: 15px 0 15px 0;
  }
  @media only screen and (min-width: 541px) {
    height: 28px;
    width: 100px;
    padding: 20px 0 20px 0;
  }
`;
export const TextWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;
export const TitleText = styled.h1`
  font-family: Teko;
  color: #0e0e0e;
  font-weight: normal;
  letter-spacing: normal;
  font-size: 170px;
  line-height: 0.6;
  margin: 0;
  position: absolute;
  top: 100px;
  left: 20px;

  @media only screen and (min-width: 541px) {
    font-size: 200px;
    height: 200px;
    left: 20px;
    top: 300px;
  }

  @media (min-width: 768px) and (max-width: 1000px) {
    font-size: 300px;
    height: 300px;
  }

  @media only screen and (min-width: 1001px) {
    font-size: 400px;
    height: 400px;
  }
`;

export const NavbarWrapper = styled.div`
  grid-column: 11/12;
`;

export const ButtonWrapper = styled.div`
  bottom: 100px;
    display: none;

  @media only screen and (min-width: 541px) {
    max-width: 1200px;
    margin: 0 auto;
  }

  button {
    position: absolute;
    right: 100px;
    bottom: 100px;
    width: 170px;
    height: 50px;
    display: inline-block;
    border: none;
    text-decoration: none;
    font-weight: bold;
    font-stretch: normal;
    font-size: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #ffffff;
    line-height: 2;
    letter-spacing: normal;
    text-align: center;
    background-color: #0e0e0e;
    font-family: Helvetica, Arial, sans-serif;
  }
`;
