import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #252525;
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(30)}px;
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
`;

export const Image = styled.img`
  position: absolute;
  top: -56px;
  left: 415px;
  width: 768px;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 387px;
`;

export const Title = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 156px;
  line-height: 0.7;
  letter-spacing: 0%;
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-style: Bold;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Accent = styled.span`
  font-weight: 700;
`;
