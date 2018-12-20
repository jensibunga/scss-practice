import styled from 'styled-components/macro';

export const FooterWrapper = styled.div`
  position: relative;
  grid-column: 1 /-1;
  background-color: #0e0e0e;
  height: 340px;

  a svg {
    position: absolute;
    top: 100px;
    left: 100px;

    fill: #ffffff;
  }
`;
