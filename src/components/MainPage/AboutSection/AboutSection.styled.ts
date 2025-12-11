import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(30)}px;
  background-color: #500800;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const Title = styled.h2`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-style: Light;
  font-size: 56px;
  line-height: 1;
  text-transform: uppercase;
`;

export const Text = styled.p`
  width: 100%;
  max-width: 912px;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
`;

export const CutImg = styled.img`
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
`;
