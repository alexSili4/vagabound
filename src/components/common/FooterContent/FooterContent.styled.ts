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
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(16)}px;
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
`;

export const Anchor = styled.a`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.4;
`;

export const LogoList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(10)}px;
  margin-top: ${({ theme }) => theme.spacing(10)}px;
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
`;

export const Text = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 400;
  font-size: 20px;
  line-height: 0.6;
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
  font-size: 84px;
  line-height: 0.6;
  text-align: center;
  font-variant: small-caps;
`;

export const DSLogo = styled(DSLogoIcon)``;

export const SilpoLogo = styled(SilpoLogoIcon)``;

export const InstagramLogo = styled(InstagramLogoIcon)``;

export const FBLogo = styled(FBLogoIcon)``;

export const Delimiter = styled(DelimiterIcon)``;
