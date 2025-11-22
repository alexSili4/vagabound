import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const Section = styled.section`
  position: relative;
  height: 400dvh;
  background-color: #500800;
`;

export const Paper = styled.img`
  position: sticky;
  top: -25%;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const ScreenWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Screen = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
`;

export const Card1 = styled(motion.img)`
  position: absolute;
  top: -10%;
  left: 39%;
  width: 20%;
  aspect-ratio: 285/417;
  pointer-events: none;
`;

export const Card2 = styled(motion.img)`
  position: absolute;
  top: -11%;
  left: 30%;
  width: 14.5%;
  aspect-ratio: 205/595;
  pointer-events: none;
`;

export const Card3 = styled(motion.img)`
  position: absolute;
  top: -12%;
  left: 30%;
  width: 19.6%;
  aspect-ratio: 282/808;
  pointer-events: none;
`;

export const Card4 = styled(motion.img)`
  position: absolute;
  top: -12%;
  left: 45%;
  width: 18%;
  aspect-ratio: 258/610;
  pointer-events: none;
`;

export const Card5 = styled(motion.img)`
  position: absolute;
  top: -12%;
  left: 42%;
  width: 16%;
  aspect-ratio: 231/962;
  pointer-events: none;
`;

export const Card6 = styled(motion.img)`
  position: absolute;
  top: -12%;
  left: 53%;
  width: 21.6%;
  aspect-ratio: 311/862;
  pointer-events: none;
`;

export const Card7 = styled(motion.img)`
  position: absolute;
  top: -13%;
  left: 60%;
  width: 21.6%;
  aspect-ratio: 311/776;
  pointer-events: none;
`;

export const ButtonWrap = styled(motion.div)`
  position: absolute;
  top: 33%;
  left: 56%;
`;

export const Button = styled.button`
  position: relative;
  width: 18vw;
  rotate: 20.49deg;
  overflow: hidden;
`;

export const Card8 = styled.img`
  aspect-ratio: 265/180;
  transition: filter ${({ theme }) => theme.transitionDurationAndFunc};

  button:not(:is(:hover, :focus)) > & {
    filter: grayscale(100%);
  }
`;

export const Stamp = styled.img`
  position: absolute;
  top: 50%;
  left: -8%;
  width: 26%;
  aspect-ratio: 1/1;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  button:not(:is(:hover, :focus)) > & {
    transform: translateX(-100%);
  }
`;

export const Lines = styled.img`
  position: absolute;
  top: 16px;
  right: -5px;
  width: 29%;
  aspect-ratio: 76/35;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};

  button:not(:is(:hover, :focus)) > & {
    transform: translateX(100%);
  }
`;
