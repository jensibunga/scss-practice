import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f3f6f6;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const ClientHeader = styled.div`
  grid-column: 1/-1;
`

export const LogoWrapper = styled.div`
  /* display: inline-flex;
  flex-direction: space-around; */
  display: flex;
  justify-content: space-around;
  height: 161px;
  
  img {
    width: 100%;
    height: auto;
    max-height: 100%;
  }
`;
export const LogoGrid = styled.div`
  display: grid;
  grid-column: 2/12;
  grid-template-columns: repeat(4, 1fr);
`;
