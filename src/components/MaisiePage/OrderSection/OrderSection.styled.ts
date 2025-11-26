import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #983400;
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(62)}px;
`;

export const SectionTitle = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  position: relative;
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
  align-self: flex-end;
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

export const Logo = styled.img`
  position: absolute;
  top: -79px;
  left: 69px;
  width: 209px;
  height: 212px;
`;

export const Photo = styled.img`
  position: absolute;
  top: -11px;
  left: 248px;
  max-width: none;
  width: 786px;
  height: 570px;
`;
