import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #983400;
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;
`;

export const SectionTitle = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${({ theme }) => theme.spacing(21)}px;
`;

export const TitleWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 440px;
`;

export const Title = styled.p`
  position: relative;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 120px;
  line-height: 0.7;
  letter-spacing: 0%;
`;

export const Text = styled.p`
  position: relative;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Accent = styled.span`
  font-weight: 700;
`;

export const Logo = styled.img`
  position: absolute;
  top: -92px;
  left: -119px;
  width: 195px;
  height: 200px;
`;

export const PhotoWrap = styled.div`
  position: relative;
`;

export const Photo = styled.img`
  width: 728px;
  height: 579px;
`;
