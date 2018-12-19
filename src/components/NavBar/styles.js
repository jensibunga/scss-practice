import styled from 'styled-components/macro';

export const MenuBar = styled.div`
  line-height: 30px;
  height: 30px;

  &:hover {
    color: white;
    cursor: pointer;
  }

  @media only screen and (max-width: 540px) {
    line-height: 2.75;
    overflow: hidden;
    /* width: 37px;
    height: 32px; */
  }

  @media only screen and (min-width: 541px) {
    overflow: hidden;
    /* width: 30px;
    height: 32px; */
  }

  span {
    font-family: Teko;
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 3px;
    color: #0e0e0e;
    text-decoration: none;
  }
`;
