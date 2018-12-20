import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: relative;
  height: 500px;

  h1 {
    margin: auto 20px;
    height: 180px;
    font-family: Teko;
    font-size: 60px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    color: #0e0e0e;
    text-transform: uppercase;

    @media (min-width: 541 px) {
      margin: auto 250px;
      max-width: 250px;
    }
    @media (min-width: 1000px) {
      height: 250px;
      margin: auto 200px;
      max-width: 250px;
    }
    @media (min-width: 1540px) {
      margin: auto 400px;
      max-width: 250px;
    }
  }
`;
export const StyledFormWrapper = styled.div`
  position: absolute;
  top: 150px;
  left: 100px;
  margin: 0 20px;

  @media (min-width: 541px) {
    top: 250;
    left: 150px;
    margin: auto 250px;
  }
  @media (min-width: 1000px) {
    height: 250px;
    margin: auto 200px;
    max-width: 250px;

    top: 2px;
    left: 350px;
  }
  @media (min-width: 1540px) {
    max-width: 250px;
    top: 2px;
    left: 500px;
  }
`;
