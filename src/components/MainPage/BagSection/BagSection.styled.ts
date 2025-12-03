import styled from '@emotion/styled';
import { IStyledProps } from './BagSection.types';
import letterBg from '@/images/bag/letter-bg.webp';

export const Section = styled.section`
  background-color: #500800;
  padding-bottom: ${({ theme }) => theme.spacing(14)}px;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
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
`;

export const ClosedBag = styled.img`
  position: relative;
  width: 718px;
  height: 731px;
`;

export const Arrow = styled.img`
  position: absolute;
  bottom: 340px;
  right: -8px;
  width: 83px;
  height: 158px;
`;

export const Text = styled.p`
  position: absolute;
  right: 97px;
  bottom: 396px;
  color: #f6c6e4;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 128px;
  line-height: 1.3;
`;

export const Open = styled.div<IStyledProps>`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 725px;
  height: 731px;
  transform: translateX(-50%);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const OpenBag = styled.img`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 732px;
  height: 742px;
  transform: translateX(-50%);
`;

export const VideoWrap = styled.div<IStyledProps>`
  position: absolute;
  bottom: 25px;
  left: -53px;
  width: 452px;
  height: 596px;
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.6)})
    rotate(${({ isOpen }) => (isOpen ? '-6deg' : 0)})
    translateX(${({ isOpen }) => (isOpen ? 0 : '80px')})
    translateY(${({ isOpen }) => (isOpen ? 0 : '80px')});
  transition: transform ${({ theme }) => theme.transition800};
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
`;

export const Letter = styled.div<IStyledProps>`
  position: absolute;
  right: 77px;
  bottom: 178px;
  width: 332px;
  height: 292px;
  padding: ${({ theme }) => theme.spacing(8)}px;
  padding-top: ${({ theme }) => theme.spacing(3)}px;
  background-image: url(${letterBg});
  background-position: 0 0;
  background-size: 100% 100%;
  transform: scale(${({ isOpen }) => (isOpen ? 1 : 0.6)})
    rotate(${({ isOpen }) => (isOpen ? '6.12deg' : '6deg')});
  transition: transform ${({ theme }) => theme.transition800};
`;

export const LetterTitle = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 56px;
  line-height: 0.7;
  letter-spacing: 0%;
  text-align: left;
`;

export const LetterText = styled.p`
  margin-top: ${({ theme }) => theme.spacing(1.5)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  text-align: left;
`;

export const LetterDesc = styled.p`
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 48px;
  line-height: 0.7;
  letter-spacing: 0%;
  text-align: right;
`;
