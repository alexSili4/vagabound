import styled from '@emotion/styled';
import LogoIcon from '@/icons/hero/logo.svg?react';

export const Section = styled.section`
  position: relative;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(69)}px;
  height: 900px;
  /* padding-top: ${({ theme }) => theme.spacing(36)}px; */
  /* padding-bottom: ${({ theme }) => theme.spacing(36)}px; */
`;

export const Title = styled.h1`
  color: #e8e8e8;
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
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    z-index: 10;
    top: 0;
    left: -100%;
    width: 70%;
    height: 100%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.6) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-20deg);
    pointer-events: none;
  }

  &:is(:hover, :focus)::before {
    animation: shine 0.6s ease-in-out forwards;
  }

  @keyframes shine {
    from {
      left: -100%;
    }
    to {
      left: 150%;
    }
  }
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
  color: #e8e8e8;
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

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 80%;
`;
