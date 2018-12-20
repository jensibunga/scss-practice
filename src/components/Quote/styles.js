import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-top: 50px;
  h1 {
    grid-column: 1/-1;
    font-family: Teko;
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.28;
    letter-spacing: normal;
    color: #272727;
  }
  p {
    width: 359px;
    height: 30px;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 2.31;
    letter-spacing: normal;
    color: #272727;
  }

  @media (min-width: 541px) {
    border-top: 1px solid #dddddd;
    max-width: 1200px;

    h1 {
      margin-top: 50px;
      grid-column: 4/11;
    }
    p {
      grid-column: 4/7;
    
    
    }
  }
`;
