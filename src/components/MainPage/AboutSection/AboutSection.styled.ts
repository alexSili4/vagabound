import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(50)}px;
  background-color: #500800;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Title = styled.h2`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-style: Light;
  font-size: 56px;
  line-height: 1;
  text-align: center;
  text-transform: uppercase;
`;

export const Text = styled.p`
  width: 100%;
  max-width: 912px;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
`;
