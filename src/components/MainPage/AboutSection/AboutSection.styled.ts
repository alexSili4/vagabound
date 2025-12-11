import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(25)}px;
  padding-bottom: ${({ theme }) => theme.spacing(25)}px;
  background-color: #500800;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(30)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 1200px;
  }
`;

export const Title = styled.h2`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-style: Light;
  font-size: 40px;
  line-height: 1;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 56px;
  }
`;

export const Text = styled.p`
  width: 100%;
  max-width: 912px;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 18px;
  }
`;

export const CutImg = styled.img`
  position: absolute;
  top: -10px;
  left: 0;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -40px;
  }
`;
