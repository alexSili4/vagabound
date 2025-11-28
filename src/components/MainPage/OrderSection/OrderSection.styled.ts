import styled from '@emotion/styled';
import { css } from '@emotion/react';
import formBg from '@/images/order/form-bg.webp';
import { animations } from '@/constants';

export const Section = styled.section`
  background-color: #500800;
  padding-top: ${({ theme }) => theme.spacing(33)}px;
  padding-bottom: ${({ theme }) => theme.spacing(17)}px;
`;

export const Container = styled.div`
  position: relative;
  width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

export const PostboxWrap = styled.div`
  position: relative;
  width: auto;
`;

export const Postbox = styled.img`
  position: relative;
  width: 402px;
`;

export const BlackBox = styled.div`
  position: absolute;
  top: 100px;
  left: 10px;
  width: 380px;
  height: 350px;
  background-color: #000000;
`;

export const PostboxAlt = styled(Postbox)<{ isSuccess: boolean }>`
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: ${({ isSuccess }) => (isSuccess ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionWithDelay};
  transition-delay: 300ms;
`;

export const FormWrap = styled.div<{ isSuccess: boolean }>`
  position: absolute;
  bottom: 37px;
  left: 263px;
  display: flex;
  height: 150dvh;
  overflow: hidden;
  ${({ isSuccess }) =>
    isSuccess &&
    css`
      animation: ${animations.letter} 1s linear both;
      animation-delay: 400ms;
    `}
`;

export const Letter = styled.img`
  align-self: flex-end;
  width: 656px;
`;

export const LetterPartTopWrap = styled.div<{ isSuccess: boolean }>`
  position: absolute;
  z-index: ${({ isSuccess }) => (isSuccess ? 12 : 9)};
  bottom: 369px;
  left: 14px;
  transform: rotateX(${({ isSuccess }) => (isSuccess ? '180deg' : '0deg')});
  transform-origin: bottom;
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc};
  transition-delay: 400ms;
`;

export const LetterPartTop = styled.img<{ isSuccess: boolean }>`
  position: relative;
  width: 605px;
  opacity: ${({ isSuccess }) => (isSuccess ? 0 : 1)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const LetterPartTopGreen = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
`;

export const LetterPart = styled.img`
  position: absolute;
  z-index: 11;
  bottom: 0px;
  left: 12px;
  width: 612px;
  pointer-events: none;
`;

export const FormContainer = styled.div<{ isSuccess: boolean }>`
  position: absolute;
  z-index: 10;
  bottom: 58px;
  left: 50%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  width: 438px;
  height: 652px;
  padding: ${({ theme }) => theme.spacing(20)}px;
  padding-top: ${({ theme }) => theme.spacing(34)}px;
  background-image: url(${formBg});
  background-position: 0 0;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  translate: ${({ isSuccess }) =>
    isSuccess ? '-50% 55% !important' : '-50% 0'};
  rotate: ${({ isSuccess }) => (isSuccess ? '0deg !important' : '-2deg')};
  opacity: ${({ isSuccess }) => (isSuccess ? 0 : 1)};
  transition: translate ${({ theme }) => theme.transitionDurationAndFunc},
    rotate ${({ theme }) => theme.transitionDurationAndFunc},
    opacity ${({ theme }) => theme.transitionWithDelay};

  &:not(:hover, :has(input:focus)) {
    translate: -50% 208px;
    rotate: 6deg;
  }
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const FormTitle = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 70.1px;
  line-height: 50%;
  text-align: center;
`;

export const FormText = styled.p`
  color: rgba(37, 37, 37, 0.64);
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 12.75px;
  line-height: 1.4;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

// FORM
export const InputsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #e8e8e8;
  border-radius: 4px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  outline: none;

  &::placeholder {
    color: rgba(37, 37, 37, 0.48);
  }
`;

export const InputWrap = styled.div`
  position: relative;
`;

export const OpenSelectBtn = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: rgba(37, 37, 37, 0.48);
`;

export const OptionsContainer = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 100%;
  left: 0;
  width: 100%;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing(4)}px;
  background-color: ${({ theme }) => theme.colors.white};
  transform: translateY(-8px);
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li``;

export const OptionBtn = styled.button`
  width: 100%;
  padding-top: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(2)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  text-align: left;
`;

export const SubmitBtn = styled.button`
  align-self: center;
  width: 100%;
  max-width: 97px;
  height: 32px;
  background-color: #1a3e2f;
  border-radius: 4px;
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 500;
  font-size: 12.75px;
  line-height: 1;
  text-transform: uppercase;
`;
