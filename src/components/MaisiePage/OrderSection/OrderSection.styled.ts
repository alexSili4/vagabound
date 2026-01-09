import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #983400;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(30)}px;
  }
`;

export const SectionTitle = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 100%;
  max-width: 375px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: 0;
    flex-direction: row;
    width: 1216px;
    max-width: none;
    padding-left: ${({ theme }) => theme.spacing(21)}px;
  }
`;

export const TitleWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    gap: ${({ theme }) => theme.spacing(6)}px;
    width: 440px;
  }
`;

export const Title = styled.p`
  position: relative;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 80px;
  line-height: 0.7;
  letter-spacing: 0%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 120px;
  }
`;

export const Text = styled.p`
  position: relative;
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

export const Accent = styled.span`
  font-weight: 700;
`;

export const Logo = styled.img`
  position: absolute;
  top: 214px;
  left: 240px;
  width: 98px;
  height: 103px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    top: -92px;
    left: -119px;
    width: 195px;
    height: 200px;
  }
`;

export const PhotoWrap = styled.div`
  position: relative;
`;

export const Photo = styled.img`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 728px;
    height: 579px;
  }
`;
