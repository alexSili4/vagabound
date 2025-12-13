import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #500800;
  padding-top: ${({ theme }) => theme.spacing(50)}px;
  padding-bottom: ${({ theme }) => theme.spacing(150)}px;
`;

export const Title = styled.h2`
  position: absolute;
  scale: 0;
`;
