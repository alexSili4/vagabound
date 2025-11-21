import styled from '@emotion/styled';
import LogoIcon from '@/icons/hero/logo.svg?react';
import bgImg from '@/images/hero/video.webp';

export const Section = styled.section``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(69)}px;
  height: 900px;
  /* padding-top: ${({ theme }) => theme.spacing(36)}px; */
  /* padding-bottom: ${({ theme }) => theme.spacing(36)}px; */
  background-image: url(${bgImg});
  background-size: cover;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Title = styled.h1`
  color: #ebac3d;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 700;
  font-style: Bold;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
`;

export const SwitcherBtnWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const SwitcherBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 204px;
`;

export const SwitcherBtnImg = styled.img`
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const SwitcherBtnImgDefault = styled(SwitcherBtnImg)``;

export const SwitcherBtnImgHover = styled(SwitcherBtnImg)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  opacity: 0;

  button:is(:hover, :focus) > & {
    opacity: 1;
  }
`;

export const Text = styled.p`
  width: 100%;
  max-width: 400px;
  color: #ebac3d;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
`;

export const Logo = styled(LogoIcon)`
  position: absolute;
  top: -258px;
  left: 50%;
  transform: translateX(-50%);
`;
