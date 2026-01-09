import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #ad630b;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(30)}px;
    padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  }
`;

export const SectionTitle = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 100%;
  max-width: 375px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: block;
    width: 1232px;
    max-width: none;
  }
`;

export const Doll = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    left: -111px;
    top: 155px;
    display: block;
    width: 146px;
  }
`;

export const ImageMob = styled.img`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const Image = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    top: -56px;
    left: 415px;
    display: block;
    width: 768px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 387px;
  }
`;

export const Title = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 80px;
  line-height: 0.7;
  letter-spacing: 0%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 156px;
  }
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-style: Bold;
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
