import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #ad630b;
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
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 720px;
`;

export const Title = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 500;
  font-size: 48px;
  line-height: 1;
  letter-spacing: 0%;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Accent = styled.span`
  font-weight: 700;
`;

export const Image = styled.img`
  position: absolute;
  right: 768px;
  bottom: 0;
  height: 856px;
`;
