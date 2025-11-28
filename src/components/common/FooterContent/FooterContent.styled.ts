import FBLogoIcon from '@/icons/footer/fb.svg?react';
import InstagramLogoIcon from '@/icons/footer/instagram.svg?react';
import SilpoLogoIcon from '@/icons/footer/silpo.svg?react';
import DSLogoIcon from '@/icons/footer/ds.svg?react';
import DelimiterIcon from '@/icons/footer/delimiter.svg?react';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(10)}px;
  padding-bottom: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-top: ${({ theme }) => theme.spacing(30)}px;
    padding-bottom: ${({ theme }) => theme.spacing(16)}px;
  }
`;

export const Vagabound = styled.img`
  width: 64px;
  height: 64px;
`;

export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)}px;
  margin-top: ${({ theme }) => theme.spacing(16)}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const Anchor = styled.a`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;

export const LogoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;
  row-gap: 40px;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(10)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing(10)}px;
  }
`;

export const ListItem = styled.li``;

export const Desc = styled.p`
  margin-top: ${({ theme }) => theme.spacing(12)}px;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 400;
  font-size: 20px;
  line-height: 0.6;
  text-align: center;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
  margin-top: ${({ theme }) => theme.spacing(6)}px;

  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    flex-direction: column;
  }
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 400;
  font-size: 20px;
  line-height: 0.6;

  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    order: 2;
  }
`;

export const Delimiter = styled(DelimiterIcon)`
  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    order: 1;
  }
`;

export const Copy = styled.p`
  margin-top: ${({ theme }) => theme.spacing(6)}px;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 400;
  font-size: 20px;
  line-height: 0.6;
  text-align: center;
`;

export const Warning = styled.p`
  margin-top: ${({ theme }) => theme.spacing(12)}px;
  color: rgba(232, 232, 232, 0.08);
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-style: Light;
  font-size: 40px;
  line-height: 0.6;
  text-align: center;
  font-variant: small-caps;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 84px;
  }
`;

export const DSLogo = styled(DSLogoIcon)``;

export const SilpoLogo = styled(SilpoLogoIcon)``;

export const InstagramLogo = styled(InstagramLogoIcon)``;

export const FBLogo = styled(FBLogoIcon)``;
