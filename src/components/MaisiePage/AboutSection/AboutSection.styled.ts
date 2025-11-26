import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #983400;
  padding-top: ${({ theme }) => theme.spacing(50)}px;
  padding-bottom: ${({ theme }) => theme.spacing(50)}px;
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
  padding-right: ${({ theme }) => theme.spacing(10)}px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 440px;
  margin-left: auto;
`;

export const Title = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-style: Light;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0%;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-style: Regular;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Frame = styled.img`
  position: absolute;
  top: 50%;
  left: 0;
  width: 718px;
  height: 651px;
  transform: translateY(-50%);
`;
