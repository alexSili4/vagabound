import styled from '@emotion/styled';
import { IStyledProps } from './BagSection.types';
import letterBg from '@/images/bag/letter-bg.webp';

export const Section = styled.section`
  background-color: #500800;
  padding-bottom: ${({ theme }) => theme.spacing(84)}px;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-bottom: ${({ theme }) => theme.spacing(14)}px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const BagBtn = styled.button`
  position: relative;
`;

export const Closed = styled.div<IStyledProps>`
  opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Label = styled.img<IStyledProps>`
  position: absolute;
  bottom: 138px;
  left: -111px;
  width: 280px;
  height: 304px;
  transform: translateX(${({ isOpen }) => (isOpen ? '100%' : 1)});
  transition: transform ${({ theme }) => theme.transition800};

  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const ClosedBag = styled.img`
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 718px;
    height: 731px;
  }
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 50%;
  right: 0;
  width: 12%;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    bottom: 340px;
    right: -8px;
    width: 83px;
    height: 158px;
  }
`;

export const Text = styled.p`
  position: absolute;
  right: 20%;
  bottom: 55%;
  color: #f6c6e4;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 100px;
  line-height: 1.3;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    right: 97px;
    bottom: 396px;
    font-size: 128px;
  }
`;

export const Open = styled.div<IStyledProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  transform: translateX(-50%);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 725px;
    height: 731px;
  }
`;

export const OpenBag = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 732px;
    height: 742px;
  }
`;

export const VideoWrap = styled.div<IStyledProps>`
  position: absolute;
  bottom: -7%;
  left: 5%;
  width: 50.3%;
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.6)})
    rotate(${({ isOpen }) => (isOpen ? '-6deg' : 0)})
    translateX(${({ isOpen }) => (isOpen ? 0 : '80px')})
    translateY(${({ isOpen }) => (isOpen ? 0 : '80px')});
  transition: transform ${({ theme }) => theme.transition800};

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    bottom: 25px;
    left: -53px;
    width: 452px;
    height: 596px;
  }
`;

export const StyledVideo = styled.video`
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 80%;
`;

export const VideoBg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 115%;
  height: 111%;
  max-width: none;
  transform: translateX(-50%) translateY(-50%) rotate(-2deg);
`;

export const Ticket = styled.img<IStyledProps>`
  position: absolute;
  right: 233px;
  bottom: 124px;
  width: 205px;
  height: 171px;
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.8)});
  transition: transform ${({ theme }) => theme.transition800};

  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const Letter = styled.div<IStyledProps>`
  position: absolute;
  right: 8%;
  top: 30%;
  width: 60.7%;
  padding: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: ${({ theme }) => theme.spacing(40)}px;
  background-image: url(${letterBg});
  background-position: 0 0;
  background-size: 100% 100%;
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.6)})
    rotate(${({ isOpen }) => (isOpen ? '6.12deg' : '6deg')});
  transition: transform ${({ theme }) => theme.transition800};

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    right: 47px;
    bottom: -150px;
    top: auto;
    width: 350px;
    aspect-ratio: initial;
  }
`;

export const LetterTitle = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 40px;
  line-height: 0.7;
  letter-spacing: 0%;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 56px;
  }
`;

export const LetterText = styled.p`
  margin-top: ${({ theme }) => theme.spacing(1.5)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  text-align: left;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 16px;
  }
`;

export const LetterDesc = styled.p`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 40px;
  line-height: 0.7;
  letter-spacing: 0%;
  text-align: right;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    font-size: 48px;
  }
`;
