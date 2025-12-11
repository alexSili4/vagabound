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
  z-index: 1;
  width: 402px;
`;

export const BlackBox = styled.div`
  position: absolute;
  z-index: 0;
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
`;

export const FormWrap = styled.div<{ isSuccess: boolean }>`
  position: absolute;
  z-index: 5;
  bottom: 37px;
  left: 263px;
  display: flex;
  height: 150dvh;
  overflow: hidden;
  ${({ isSuccess }) =>
    isSuccess &&
    css`
      animation: ${animations.letter} 1200ms linear both;
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
  transition: transform ${({ theme }) => theme.transitionDurationAndFunc},
    z-index 0s;
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

export const StyledInput = styled.input<{ isError: boolean }>`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  border-color: ${({ isError }) => (isError ? '#F55452' : '#e8e8e8')};
  border-radius: 4px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  outline: none;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};

  &::placeholder {
    color: rgba(37, 37, 37, 0.48);
  }
`;

export const Error = styled.p`
  color: #f55452;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 9px;
  line-height: 1.4;
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

export const SuccessMsgWrap = styled.div<{ isSuccess: boolean }>`
  position: absolute;
  z-index: ${({ isSuccess }) => (isSuccess ? 20 : 0)};
  bottom: 37px;
  left: 263px;
  transform: translateX(-60%) translateY(10%) scale(0.4);
  transition: z-index ${({ theme }) => theme.transitionDurationAndFunc};
  transition-delay: 2000ms;
  ${({ isSuccess }) =>
    isSuccess &&
    css`
      animation: ${animations.successMsg} 1200ms linear both;
      animation-delay: 1600ms;
    `}
`;

export const SuccessMsgBg = styled.img`
  width: 637px;
  aspect-ratio: 300/210;
`;

export const SuccessMsgTextWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(6)}px;
  width: 100%;
  height: 100%;
`;

export const SuccessMsgTitle = styled.p`
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.viaoda};
  font-weight: 400;
  /* font-size: 32px; */
  font-size: 48px;
  line-height: 1.2;
  letter-spacing: 0%;
  text-align: center;
  text-transform: uppercase;
`;

export const SuccessMsgText = styled.p`
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 300;
  /* font-size: 14px; */
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 0%;
  text-align: center;
`;
