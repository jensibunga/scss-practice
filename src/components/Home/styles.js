import styled from 'styled-components/macro';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* for position fixed top banner */
  margin-top: 60px;

  @media (min-width: 541px) {
    margin-top: 0;
  }
`;

export const Column = styled.div`
  grid-column-start: ${props => props.start};
  grid-column-end: ${props => props.end};

  @media (min-width: 769px) {
    grid-column-start: ${props => props.desktopStart};
    grid-column-end: ${props => props.desktopEnd};
  }
`;

export const Space = styled.div`
  margin: ${props => props.margin}px;
`;

export const ContentContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`