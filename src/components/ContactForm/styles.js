import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  h1 {
    width: 300px;
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
  }
`;
export const StyledFormWrapper = styled.div`
  width: 600px;
  top: 0;
  right: 224px;


  @media (min-width: 541px) {
    width: 600px;
    position: absolute;
    top: 0;
    right: 224px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;
