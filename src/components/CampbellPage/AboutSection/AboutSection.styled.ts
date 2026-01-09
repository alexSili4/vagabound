import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #252525;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(25)}px;
    padding-bottom: ${({ theme }) => theme.spacing(50)}px;
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
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: block;
    width: 1216px;
    max-width: none;
    padding-right: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 100%;
  margin-left: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 440px;
  }
`;

export const Title = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-style: Light;
  font-size: 40px;
  line-height: 1;
  letter-spacing: 0%;
  text-transform: uppercase;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 48px;
  }
`;

export const TextWrap = styled.div`
  position: relative;
`;

export const AboutAccent = styled.img`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    top: 140px;
    left: 260px;
    display: block;
    width: 195px;
  }
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 18px;
  }
`;

export const Frame = styled.img`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    position: absolute;
    top: 50%;
    left: 0;
    width: 718px;
    height: 651px;
    transform: translateY(-50%);
  }
`;

export const Cut = styled.img`
  position: absolute;
  top: -40px;
  left: 50%;
  width: 1500px;
  max-width: none;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 100%;
  }
`;
