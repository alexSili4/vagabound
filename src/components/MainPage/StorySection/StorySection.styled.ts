import styled from '@emotion/styled';
import { StyledCardContainerProps } from './StorySection.types';

export const Section = styled.section`
  position: relative;
  background-color: #500800;
`;

export const Title = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140dvh;
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Napkin = styled.img<StyledCardContainerProps>`
  position: absolute;
  z-index: -10;
  top: -30%;
  right: -10%;
  width: 420px;
  height: 416px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Content = styled.div`
  position: relative;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
`;

export const BookWrap = styled.div`
  position: relative;
`;

export const Book = styled.img`
  height: 100%;
  max-height: 800px;
`;

export const Controls = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 83.3%;
  transform: translateX(-50%) translateY(-100%);
  pointer-events: none;
`;

export const SliderBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid #e8e8e8;
  border-radius: 50%;
  color: #e8e8e8;
  pointer-events: all;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  &:disabled {
    opacity: 0.5;
  }
`;

export const Card1Container = styled.div<StyledCardContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Card1 = styled.img`
  position: absolute;
  top: 40%;
  left: 10%;
  width: 38%;
`;

export const Card2 = styled.img`
  position: absolute;
  right: 14%;
  top: 5%;
  width: 35%;
`;

export const Card1Title = styled.p`
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.pica};
  font-weight: 400;
  font-size: 48px;
  line-height: 0.6;
  letter-spacing: 0%;
`;

export const Card1TextWrap = styled.div`
  padding-top: 5%;
  padding-left: 15%;
`;

export const Card1Text = styled.p`
  width: 37%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const Card1TextAlt = styled.p`
  position: absolute;
  top: 50%;
  left: 53%;
  width: 33%;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const Lines1 = styled.img`
  position: absolute;
  top: 39%;
  left: 15%;
  width: 14%;
`;

export const Lines2 = styled.img`
  position: absolute;
  top: 36.5%;
  left: 28%;
  width: 12%;
`;

export const Card1Date = styled.p`
  position: absolute;
  top: 5%;
  left: 33%;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 56px;
  line-height: 0.5;
  letter-spacing: 2%;
  rotate: -14deg;
`;

export const Card2Container = styled.div<StyledCardContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Card3 = styled.img`
  position: absolute;
  bottom: 20.7%;
  left: 30.3%;
  width: 17.7%;
`;

export const Card4 = styled.img`
  position: absolute;
  top: 14%;
  right: 16%;
  width: 32%;
`;

export const Card2Text = styled.p`
  position: absolute;
  top: 7%;
  left: 15%;
  width: 35%;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Card2Title = styled.p`
  position: absolute;
  top: 8%;
  right: 14%;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.pica};
  font-weight: 400;
  font-size: 56px;
  line-height: 0.6;
`;

export const Card2Desc = styled.p`
  position: absolute;
  right: 15%;
  bottom: 20%;
  width: 32%;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Card3Container = styled.div<StyledCardContainerProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Card5 = styled.img`
  position: absolute;
  top: 23%;
  left: 14%;
  width: 34.1%;
`;

export const Card6 = styled.img`
  position: absolute;
  top: 8%;
  right: 14%;
  width: 34.1%;
`;

export const Card3Text = styled.p`
  position: absolute;
  top: 8%;
  left: 16%;
  width: 30%;
  color: #000000;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Card4Text = styled.p`
  position: absolute;
  bottom: 23%;
  left: 16%;
  width: 25%;
  color: #000000;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Card5Text = styled.p`
  position: absolute;
  bottom: 27%;
  right: 13%;
  width: 33%;
  color: #000000;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
`;

export const Signature = styled.p`
  position: absolute;
  bottom: 22%;
  right: 13%;
  width: 200px;
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 96px;
  line-height: 0%.3;
  letter-spacing: 2%;
  text-align: center;
  rotate: 6.87deg;
`;
