import styled from 'styled-components';

export const HomepageBannerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;

  width: 100%;
`;
export const HomepageBannerImage = styled.img`
  grid-column: 1/-1;
  height: 940px;
  width: 100%;
  background-color: gray;
`;

export const LogoNameWrapper = styled.div`
  grid-column: 2/12;
  position: absolute;
  border-bottom: 1px solid #0e0e0e;
  width: 100%;
`;

export const ImageLogoName = styled.img`
  padding: 20px 0 20px 0;
  width: 100px;
  height: 28px;
`;

export const NavbarWrapper = styled.div`
  /* position: absolute; */
  grid-column: 11/12;
`;

export const TextWrapper = styled.div`
  grid-column: 2/7;
`;
export const TitleText = styled.h1`
  position: absolute;
  font-family: Teko;
  font-size: 400px;
  color: #0e0e0e;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 1;
`;

export const ButtonWrapper = styled.div`
  /* grid-column: 10/12; */
  grid-column-start: 11;
  grid-column-end: 12;
  /* grid-row: 11/12; */
  position: absolute;
  width: 170px;
  height: 50px;

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

export const TopBarWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 12;
  background-color: purple;
  display: flex;
  justify-content: space-between;
`
