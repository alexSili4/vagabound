import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #1a3e2f;
`;

export const SectionTitle = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 1232px;
    max-width: none;
  }
`;

export const TextWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 720px;
  }
`;

export const Title = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 500;
  font-size: 40px;
  line-height: 1;
  letter-spacing: 0%;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 48px;
  }
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 18px;
  }
`;

export const Accent = styled.span`
  font-weight: 700;
`;

export const ImageMob = styled.img`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const ImageDesk = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    right: 768px;
    bottom: 0;
    height: 856px;
    display: block;
  }
`;

export const Line = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    bottom: 168px;
    left: 250px;
    display: block;
    width: 250px;
  }
`;

export const Lines = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    bottom: -65px;
    left: 70px;
    display: block;
    width: 444px;
  }
`;
