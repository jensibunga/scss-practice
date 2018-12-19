import styled from 'styled-components/macro';

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 541px) and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const TopStyledWrapper = styled.div`
  border-top: solid 1px #dddddd;
`;

export const StyledWrapper = styled.div`
  border-top: solid 1px #dddddd;
  border-bottom: solid 1px #dddddd;
`;
