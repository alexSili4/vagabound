import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140dvh;

  @media (max-width: ${({ theme }) => theme.breakpoints.desk - 1}px) {
    display: none;
  }
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Napkin = styled.img<{ isActive: boolean }>`
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
  transition: height ${({ theme }) => theme.transitionDurationAndFunc};
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

export const Card1Container = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
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

export const Card3Container = styled.div<{ isActive: boolean }>`
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

export const Card2Container = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  pointer-events: ${({ isActive }) => (isActive ? 'auto' : 'none')};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Card2TextWrap = styled.div`
  display: flex;
  height: 100%;
`;

export const Card2TextColumn1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-top: 6%;
  padding-left: 16%;
  padding-right: 4%;
  padding-bottom: 14%;
`;

export const Card2TextContainer = styled.div`
  position: relative;
`;

export const Card2Text1 = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  rotate: -4deg;
`;

export const Card2Text1Accent = styled.p`
  position: absolute;
  top: -4%;
  left: 43%;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-size: 76px;
  line-height: 0.3;
  rotate: -4deg;
`;

export const Accent1 = styled.img`
  position: absolute;
  top: -6%;
  left: 38%;
  width: 135px;
`;

export const Card2Photo = styled.img`
  width: 100%;
`;

export const Card2Text2Wrap = styled.div`
  position: relative;
  padding-right: 5%;
`;

export const Card2Text2 = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Accent2 = styled.img`
  position: absolute;
  top: 43%;
  left: -4%;
  width: 90%;
  height: 15%;
`;

export const Accent3 = styled.img`
  position: absolute;
  top: 58%;
  left: -2%;
  width: 18%;
  height: 15%;
`;

export const Card2TextColumn2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`;

export const Card2TextContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

export const Card2TitleWrap = styled.div`
  position: relative;
  padding-top: 15%;
  padding-left: 50%;
`;

export const Spirit = styled.img`
  position: absolute;
  top: -45%;
  left: 7%;
  width: 309px;
`;

export const Card2Title = styled.p`
  width: 100px;
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.pica};
  font-weight: 400;
  font-size: 48px;
  line-height: 0.7;
`;

export const Card2Text1Wrap = styled.div`
  position: relative;
  padding-left: 6%;
`;

export const Card2Text3 = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Candies = styled.img`
  position: absolute;
  top: 13%;
  left: 14%;
  width: 340px;
`;

export const Accent4 = styled.img`
  position: absolute;
  top: 15%;
  left: 43%;
  width: 17%;
  height: 15%;
`;

export const Accent5 = styled.img`
  position: absolute;
  top: 30%;
  left: 4%;
  width: 42%;
  height: 15%;
`;

export const Card2Text4Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
  padding-bottom: 28%;
  padding-left: 5%;
  padding-right: 19%;
`;

export const Card2Text4 = styled.p`
  width: 370px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Card2Text4Alt = styled.p`
  align-self: flex-end;
  width: 340px;
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-size: 72px;
  line-height: 0.4;
`;

export const Card3TextWrap = styled.div`
  display: flex;
  height: 100%;
`;

export const Card3TextColumn1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-top: 5%;
  padding-left: 14%;
  padding-right: 4%;
  padding-bottom: 14%;
`;

export const Card3TextContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Card3Text1 = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 72px;
  line-height: 0.3;
  letter-spacing: 2%;
`;

export const Card3Photo = styled.img`
  position: absolute;
  top: 40%;
  left: 12%;
  width: 358px;
`;

export const Card3Text2 = styled.p`
  width: 362px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Card3Text2Accent = styled.span`
  font-weight: 700;
`;

export const Card3TextColumn2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-top: 8%;
  padding-left: 3%;
  padding-right: 4%;
  padding-bottom: 14%;
`;

export const Card3Text3Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
`;

export const Card3Text3 = styled.p`
  width: 336px;
  color: #252525;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Card4Photo = styled.img`
  width: 340px;
`;

export const Card4Container = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Card4TextWrap = styled.div`
  display: flex;
  height: 100%;
`;

export const Card4TextColumn1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-top: 5%;
  padding-left: 14%;
  padding-right: 4%;
  padding-bottom: 14%;
`;

export const Card4TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(7)}px;
  width: 100%;
`;

export const Card4Text1 = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 72px;
  line-height: 0.3;
  letter-spacing: 2%;
`;

export const Card4Photo1 = styled.img`
  width: 365px;
`;

export const Card4Text2 = styled.p`
  width: 370px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Card4TextColumn2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 4%;
  padding-bottom: 17%;
`;

export const Card4TextContainer2 = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;

export const Card4Photo2 = styled.img`
  position: absolute;
  top: -80%;
  left: -20%;
  width: 533px;
  max-width: none;
`;

export const Card4Text3Wrap = styled.div`
  position: relative;
`;

export const Card4Text3 = styled.p`
  position: relative;
  width: 336px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Accent6 = styled.img`
  position: absolute;
  bottom: 0%;
  left: 13%;
  width: 28%;
`;

export const Card5Container = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transition800};
`;

export const Card5TextWrap = styled.div`
  display: flex;
  height: 100%;
`;

export const Card5TextColumn1 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-top: 5%;
  padding-left: 14%;
  padding-right: 4%;
  padding-bottom: 15%;
`;

export const Card5TextContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(8)}px;
  width: 100%;
`;

export const Card5Text1 = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 72px;
  line-height: 0.3;
  letter-spacing: 2%;
`;

export const Card5Text2Wrap = styled.div`
  position: relative;
`;

export const Accent7 = styled.img`
  position: absolute;
  top: 48%;
  left: -1%;
  width: 49%;
`;

export const Card5Text2 = styled.p`
  position: relative;
  width: 336px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Card5Photo1 = styled.img`
  width: 334px;
`;

export const Card5TextColumn2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
  padding-top: 5%;
  padding-left: 3%;
  padding-right: 4%;
  padding-bottom: 15%;
`;

export const Card5TextContainer2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)}px;
  width: 100%;
`;

export const Card5Photo2 = styled.img`
  width: 334px;
`;

export const Card5Text4 = styled.p`
  position: relative;
  width: 336px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Card5Text4Wrap = styled.div`
  position: relative;
`;

export const Accent8 = styled.img`
  position: absolute;
  top: 35%;
  left: 21%;
  width: 37%;
`;
