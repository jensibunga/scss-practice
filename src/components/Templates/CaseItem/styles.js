import styled from 'styled-components/macro';

export const CaseWrapper = styled.div`

`;



export const CaseImage = styled.img`
  height: 500px;
  width: 100%;
`;

export const StyledClientName = styled.div`
  grid-column: 1/2;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 2;
  letter-spacing: normal;
  color: #939393;
`;

export const Title = styled.div`
  grid-column: 1/2;
  font-family: 'Teko', sans-serif;
  font-size: 30px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.07;
  letter-spacing: normal;
  color: #272727;
`;

export const UnstyledLink = styled.div`
  grid-column: 1/2;
  @media (min-width: 541px) {
    text-decoration: none;
    line-height: 30px;
    color: #1a18f7;
    size: 14px;
    font-family: Helvetica, Arial, sans-serif;
  }
  span {
    @media (max-width: 540px) {
      display: none;
    }
  }
`;
