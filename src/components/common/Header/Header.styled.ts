import styled from '@emotion/styled';
import DSLogoIcon from '@/icons/ds-logo.svg?react';
import VagaboungLogoIcon from '@/icons/vagabound.svg?react';

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
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const DSLogo = styled(DSLogoIcon)`
  width: 125px;
`;

export const OrderLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 122px;
  height: 44px;
  background-color: #f6c6e4;
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  text-transform: uppercase;
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
`;

export const Anchor = styled.a`
  width: 120px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
`;

export const VagaboungLogo = styled(VagaboungLogoIcon)`
  width: 154px;
`;
