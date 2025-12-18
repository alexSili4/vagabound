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

export const Slide3Container = styled.div`
  aspect-ratio: 756/1135;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 12%;
  padding-bottom: 32%;
  padding-left: 9%;
  padding-right: 12%;
`;

export const Slide3TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)}px;
`;

export const Slide3Title = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.pica};
  font-weight: 400;
  font-size: 40px;
  line-height: 0.6;
  letter-spacing: 0%;
`;

export const Slide3Text = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide4Container = styled.div`
  aspect-ratio: 756/1135;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 12%;
  padding-bottom: 32%;
  padding-left: 9%;
  padding-right: 12%;
`;

export const Slide4Title = styled.p`
  width: 90%;
  color: #000000;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide4TextWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Slide4Text = styled.p`
  width: 80%;
  color: #000000;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide5Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  padding-top: 9%;
  padding-bottom: 32%;
  padding-left: 9%;
  padding-right: 12%;
`;

export const Slide5Text = styled.p`
  color: #000000;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0%;
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
  top: 240px;
  left: 170px;
  width: 150px;
`;

export const Lines2 = styled.img`
  position: absolute;
  top: 260px;
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
