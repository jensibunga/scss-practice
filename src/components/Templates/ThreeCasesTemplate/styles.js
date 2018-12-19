import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-gap: 30px; */
  @media (max-width: 540px) {
    /* grid-template-columns: 1fr; */
  }
  @media (min-width: 541px) and (max-width: 1000px) {
    /* grid-template-columns: 1fr; */
  }
`;


