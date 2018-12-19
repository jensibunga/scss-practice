import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 541px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
