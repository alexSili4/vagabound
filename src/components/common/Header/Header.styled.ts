import styled from '@emotion/styled';
import DSLogoIcon from '@/icons/ds-logo.svg?react';
import VagaboungLogoIcon from '@/icons/vagabound.svg?react';
import { motion } from 'framer-motion';

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(4)}px;
  backdrop-filter: blur(40px);
  box-shadow: 0px 0px 40px 0px #00000033;
  background-color: rgba(232, 232, 232, 0.01);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 1200px;
  }
`;

export const DSLogo = styled(DSLogoIcon)<{ isDark: boolean }>`
  width: 125px;
  fill: ${({ isDark }) => (isDark ? '#FFFFFF' : '#252525')};
  transition: fill ${({ theme }) => theme.transitionDurationAndFunc};

  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: block;
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const OrderLink = styled.a<{ isMobMenu: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isMobMenu }) => (isMobMenu ? '100%' : '122px')};
  height: ${({ isMobMenu }) => (isMobMenu ? '48px' : '44px')};
  background-color: #f6c6e4;
  border-radius: 8px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  text-transform: uppercase;
  overflow: hidden;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px rgba(246, 198, 228, 0.48),
      0px 0px 0px 2px rgba(26, 62, 47, 1);
  }
`;

export const OrderLinkTitle = styled.span`
  position: relative;
`;

export const OrderLinkBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(232, 232, 232, 0.24);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  a:hover > & {
    opacity: 1;
  }
`;

export const OrderLinkActiveBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(37, 37, 37, 0.24);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  a:active > & {
    opacity: 1;
    color: inherit;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(18)}px;
`;

export const NavWrap = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)}px;

  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: адуч;
  }
`;

export const Anchor = styled.a<{ $isDark?: boolean }>`
  width: 120px;
  color: ${({ $isDark }) => ($isDark ? '#FFFFFF' : '#252525')};
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  transition: color ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const VagaboungLogo = styled(VagaboungLogoIcon)<{
  isDark?: boolean;
  isMobMenu?: boolean;
}>`
  position: relative;
  z-index: 100;
  width: 131px;
  fill: ${({ isDark, isMobMenu }) =>
    isMobMenu ? '#E8E8E8' : isDark ? '#FFFFFF' : '#252525'};
  transition: fill ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 154px;
  }
`;

// mobile menu
export const MenuBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.36);
  color: #252525;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  background-color: #1a3e2f;
  padding-top: ${({ theme }) => theme.spacing(8)}px;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
`;

export const MobMenuLinks = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const ListItem = styled.li``;

export const MobAnchor = styled.a`
  display: block;
  width: 100%;
  color: #f6c6e4;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 700;
  font-style: Bold;
  font-size: 24px;
  line-height: 1.2;
  letter-spacing: 2%;
  text-align: center;
  text-transform: uppercase;
`;
