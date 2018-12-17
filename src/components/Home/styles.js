import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const HomepageBannerWrapper = styled.header`
  grid-column: 1/ -1;
`;

export const FilterBarWrapper = styled.div`
  grid-column: 1/-1;
`;
export const ProjectWrapper = styled.article`
  grid-column: 2/12;
`;
export const ClientWrapper = styled.div`
  grid-column: 1/-1;
`;

export const ContactFormWrapper = styled.div`
  grid-column: 1/-1;
`;
