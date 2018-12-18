import styled from 'styled-components';

export const NavbarButton = styled.span`
  font-family: Teko;
  font-size: 18px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #0e0e0e;
  line-height: 5;

  @media only screen and (max-width: 540px) {
    line-height: 2.75;
    overflow: hidden;
    width: 37px;
    height: 32px;
  }

  @media only screen and (min-width: 541px) {
    overflow: hidden;
    width: 30px;
    height: 32px;
  }
`;
