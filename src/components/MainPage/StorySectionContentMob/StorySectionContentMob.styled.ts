import styled from '@emotion/styled';
import bg from '@/images/story/bg-mob.webp';

export const Container = styled.div`
  display: flex;
  height: 100dvh;
  padding-top: 21%;
  background-image: url(${bg});
  background-size: cover;
  background-position: top center;
  transition: height ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
`;

export const Book = styled.img`
  position: relative;
  max-width: none;
  width: 100%;
  user-select: none;
`;

export const Slider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
`;

export const SlidesWrap = styled.div`
  display: flex;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const Slide = styled.div`
  flex: 0 0 100%;
`;

export const SliderControls = styled.div`
  position: absolute;
  bottom: 26px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
`;

export const NavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #e8e8e8;
  color: #e8e8e8;
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};

  &:disabled {
    opacity: 0.5;
  }
`;

export const DotsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)}px;
  align-items: center;
  transform: translateX(-50%) translateY(-50%);
`;

export const Dot = styled.button<{ isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ isActive }) =>
    isActive ? '#E8E8E8' : 'rgba(232, 232, 232, 0.48)'};
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const Slide1Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-top: 10%;
  padding-left: 8%;
  padding-right: 10%;
`;

export const Slide1TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const Slide2Container = styled.div`
  aspect-ratio: 756/1135;
  padding-top: 12%;
  padding-left: 9%;
`;

export const Napkin = styled.img<{ isActive: boolean }>`
  position: absolute;
  top: -22%;
  left: 50%;
  width: 90%;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  transition: opacity ${({ theme }) => theme.transitionDurationAndFunc};
  transform: translateX(-50%);
`;

export const Napkin1 = styled(Napkin)``;

export const Napkin2 = styled(Napkin)``;

export const Napkin3 = styled(Napkin)``;

export const Card1Title = styled.p`
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.pica};
  font-weight: 400;
  font-size: 30px;
  line-height: 0.6;
  letter-spacing: 0%;
`;

export const Card1Date = styled.p`
  position: absolute;
  top: 3%;
  left: 50%;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 56px;
  line-height: 0.5;
  letter-spacing: 2%;
  rotate: -14deg;
`;

export const Card1Text = styled.p`
  width: 317px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const Card1 = styled.img`
  position: absolute;
  top: 43%;
  left: 5%;
  width: 85%;
`;

export const Lines1 = styled.img`
  position: absolute;
  top: 235px;
  left: 170px;
  width: 150px;
`;

export const Lines2 = styled.img`
  position: absolute;
  top: 255px;
  left: 30px;
  width: 155px;
`;

export const Card2 = styled.img`
  position: absolute;
  left: 8%;
  top: 5%;
  width: 80%;
`;

export const Card1TextAlt = styled.p`
  position: absolute;
  top: 45%;
  left: 7%;
  width: 83%;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const Slide3Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100%;
  padding-left: 20px;
  padding-top: 25px;
`;

export const Card3Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;
`;

export const Card3TextWrap = styled.div`
  position: relative;
  rotate: -4deg;
`;

export const Card3Text = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const Card3TextAccentWrap = styled.div`
  position: absolute;
  top: -5px;
  left: 145px;
`;

export const Card3TextAccent = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 52px;
  line-height: 0.3;
  letter-spacing: 0%;
`;

export const Accent1 = styled.img`
  position: absolute;
  top: -10px;
  left: -15px;
  max-width: none;
  width: 100px;
`;

export const Card3Photo = styled.img``;

export const Card3Text2Wrap = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing(27)}px;
`;

export const Accent2 = styled.img`
  position: absolute;
  top: 60px;
  left: -20px;
  max-width: none;
  width: 320px;
`;

export const Accent3 = styled.img`
  position: absolute;
  top: 80px;
  left: -20px;
  width: 80px;
`;

export const Card3Text2 = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`;

export const Slide4Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 100%;
  padding-left: 20px;
  padding-top: 25px;
`;

export const Card4Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Card4TitleWrap = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 250px;
`;

export const Spirit = styled.img`
  position: absolute;
  top: -110px;
  right: 20px;
  width: 200px;
`;

export const Card4Title = styled.p`
  width: 50px;
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.pica};
  font-weight: 400;
  font-size: 32px;
  line-height: 0.7;
  letter-spacing: 0%;
`;

export const Card4TextWrap = styled.div`
  position: relative;
`;

export const Accent4 = styled.img`
  position: absolute;
  top: 20px;
  left: 200px;
  width: 110px;
`;

export const Accent5 = styled.img`
  position: absolute;
  top: 42px;
  left: -15px;
  width: 240px;
`;

export const Candies = styled.img`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 280px;
  max-width: none;
`;

export const Card4Text = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  white-space: pre-wrap;
`;

export const Card4Text2Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-bottom: ${({ theme }) => theme.spacing(27)}px;
`;

export const Card4Text2 = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
`;

export const Card4Desc = styled.p`
  align-self: flex-end;
  width: 206px;
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 52px;
  line-height: 0.4;
  letter-spacing: 2%;
`;

export const Slide5Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 100%;
  padding-left: 40px;
  padding-top: 50px;
`;

export const Card5TitleWrap = styled.div`
  position: relative;
`;

export const Card5Title = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 52px;
  line-height: 0.3;
  letter-spacing: 2%;
`;

export const Slide5Photo = styled.img`
  position: absolute;
  top: 5px;
  left: 10px;
  width: 280px;
`;

export const Card5TextWrap = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(27)}px;
`;

export const Card5Text = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const TextAccent = styled.span`
  font-weight: 700;
`;

export const Slide6Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 310px;
  height: 100%;
  padding-left: 40px;
  padding-top: 50px;
`;

export const Card6Text = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide6Photo = styled.img``;

export const Slide7Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 100%;
  padding-left: 40px;
  padding-top: 50px;
`;

export const Card7Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Card7TitleWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

export const Card7Title = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 52px;
  line-height: 0.3;
  letter-spacing: 2%;
`;

export const Slide7Photo = styled.img``;

export const Card7TextWrap = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(27)}px;
`;

export const Card7Text = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide8Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 100%;
  padding-left: 40px;
  padding-top: 50px;
`;

export const Card8TextWrap = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing(27)}px;
`;

export const Accent6 = styled.img`
  position: absolute;
  top: 120px;
  left: 62px;
  width: 130px;
`;

export const Card8Text = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide8Photo = styled.img`
  width: 250px;
  margin-left: auto;
  margin-right: auto;
`;

export const Slide9Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 100%;
  padding-left: 40px;
  padding-top: 50px;
`;

export const Card9TitleWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(6)}px;
`;

export const Card9Title = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.soul};
  font-weight: 400;
  font-style: Script;
  font-size: 52px;
  line-height: 0.3;
  letter-spacing: 2%;
`;

export const Card9TextWrap = styled.div`
  position: relative;
`;

export const Accent7 = styled.img`
  position: absolute;
  top: 65px;
  left: 0;
  width: 165px;
`;

export const Card9Text = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide9PhotoWrap = styled.div`
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;
`;

export const Slide9Photo = styled.img``;

export const Slide10Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 310px;
  height: 100%;
  padding-left: 40px;
  padding-top: 50px;
`;

export const Card10TextWrap = styled.div`
  position: relative;
  padding-bottom: ${({ theme }) => theme.spacing(27)}px;
`;

export const Accent8 = styled.img`
  position: absolute;
  top: 80px;
  left: 0;
  width: 190px;
`;

export const Card10Text = styled.p`
  position: relative;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 14px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide10Photo = styled.img``;
