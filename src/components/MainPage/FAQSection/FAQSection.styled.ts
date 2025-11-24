import styled from '@emotion/styled';
import {
  IStyledIconWrapProps,
  IStyledAnswerWrapProps,
  IStyledImageProps,
} from './FAQSection.types';
import LineIcon from '@/icons/faq/line.svg?react';

export const Section = styled.section`
  background-color: #500800;
  padding-top: ${({ theme }) => theme.spacing(30)}px;
  padding-bottom: ${({ theme }) => theme.spacing(30)}px;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing(15)}px;
  padding-left: ${({ theme }) => theme.spacing(30)}px;
  padding-right: ${({ theme }) => theme.spacing(30)}px;
`;

export const TitleWrap = styled.div`
  flex-shrink: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 400px;
`;

export const Line = styled(LineIcon)`
  position: absolute;
  top: 57px;
  left: -26px;
  width: 121px;
  height: 68px;
`;

export const Title = styled.h2`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 500;
  font-size: 56px;
  line-height: 1;
  letter-spacing: 2%;
  text-transform: uppercase;
`;

export const Desc = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
`;

export const List = styled.ul`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
`;

export const ListItem = styled.li``;

export const Question = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing(8)}px;
  border-bottom: 1px solid rgba(232, 232, 232, 0.24);
`;

export const QuestionBtn = styled.button`
  display: flex;
  align-items: start;
  gap: ${({ theme }) => theme.spacing(1)}px;
  width: 100%;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 600;
  font-size: 32px;
  line-height: 1.4;
  letter-spacing: -4%;
  text-align: left;
`;

export const Position = styled.p`
  color: #ec7444;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 600;
  font-size: 24px;
  line-height: 1.4;
  letter-spacing: -4%;
  transform: translateY(5.5px);
`;

export const QuestionBtnLabel = styled.span`
  flex-grow: 1;
`;

export const IconWrap = styled.span<IStyledIconWrapProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotateX(${({ isShowElement }) => (isShowElement ? 180 : 0)}deg);
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const AnswerWrap = styled.div<IStyledAnswerWrapProps>`
  max-height: ${({ isShowElement, scrollHeight }) =>
    isShowElement ? scrollHeight : 0}px;
  overflow-y: hidden;
  transition: max-height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Answer = styled.div`
  padding-top: ${({ theme }) => theme.spacing(6)}px;
  padding-left: ${({ theme }) => theme.spacing(6)}px;
`;

export const Accent = styled.img<IStyledImageProps>`
  position: absolute;
  bottom: 17px;
  left: 256px;
  width: 147px;
  height: 93px;
  pointer-events: none;
  opacity: ${({ isShowElement }) => (isShowElement ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Paper = styled.img<IStyledImageProps>`
  position: absolute;
  bottom: 8px;
  left: -18px;
  width: 174px;
  height: 70px;
  pointer-events: none;
  opacity: ${({ isShowElement }) => (isShowElement ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const AnswerText = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const AnswerText2 = styled(AnswerText)`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 46px;
  line-height: 0.5;
  letter-spacing: 0%;
`;
