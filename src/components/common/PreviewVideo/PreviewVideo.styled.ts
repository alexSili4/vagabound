import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Video = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CheckAgeWrap = styled(motion.div)`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(37, 37, 37, 0.48);
`;

export const CheckAge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const CheckAgeTitle = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
`;

export const CheckAgeControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const YesBtn = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 48px;
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

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 69px;
    height: 44px;
  }
`;

export const YesBtnTitle = styled.span`
  position: relative;
`;

export const YesBtnBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(232, 232, 232, 0.24);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  button:hover > & {
    opacity: 1;
  }
`;

export const YesBtnActiveBg = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(37, 37, 37, 0.24);
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  button:active > & {
    opacity: 1;
    color: inherit;
  }
`;

export const NoBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 48px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid #f6c6e4;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 15px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};

  &:hover {
    background-color: rgba(246, 198, 228, 0.24);
  }

  &:focus {
    background-color: #500800;
    box-shadow: 0px 0px 0px 4px rgba(246, 198, 228, 0.48),
      0px 0px 0px 2px #1a3e2f;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 55px;
    height: 44px;
  }
`;
