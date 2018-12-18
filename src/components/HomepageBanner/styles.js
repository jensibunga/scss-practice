import styled from 'styled-components';

export const HomepageBannerContainer = styled.div`
  @media only screen and (max-width: 540px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    width: 100%;
    background-color: pink;
  }

  @media only screen and (min-width: 541px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    position: relative;
    width: 100%;
    background-color: orange;
  }
`;

export const TopBarWrapper = styled.div`
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 540px) {
    width: 100%;
    height: 40px;
    grid-column-start: 2;
    grid-column-end: 12;
  }
  @media only screen and (min-width: 541px) {
    position: absolute;
    width: 100%;
    grid-column-start: 2;
    grid-column-end: 12;
    border-bottom: 1px solid #0e0e0e;
    height: 80px;
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
  width: 100%;
  grid-column: 2/7;
`;
export const TitleText = styled.h1`
  position: absolute;
  font-family: Teko;
  color: #0e0e0e;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1;

  @media only screen and (max-width: 540px) {
    font-size: 170px;
    height: 170px;
    line-height: 0.6;
  }
  @media only screen and (min-width: 541px) {
    font-size: 200px;
    height: 200px;
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
  /* position: absolute; */
  grid-column: 11/12;
`;

export const ButtonWrapper = styled.div`
  @media only screen and (max-width: 540px) {
    display: none;
  }
  @media only screen and (min-width: 541px) {
    /* grid-column: 10/12; */
    grid-column-start: 11;
    grid-column-end: 12;
    /* grid-row: 11/12; */
    position: absolute;
    width: 170px;
    height: 50px;
  }

  button {
    position: absolute;
    right: 100px;
    bottom: -800px;
    display: inline-block;
    border: none;
    width: 100%;
    height: 100%;
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
