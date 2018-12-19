import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const ButtonWrapper = styled.div`
  @media only screen and (max-width: 540px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin: 0 20px 0 20px;
  }
  @media only screen and (min-width: 541px) {
    display: none;
  }
`;
export const Column = styled.div`
  grid-column-start: ${props => props.start};
  grid-column-end: ${props => props.end};
`;
