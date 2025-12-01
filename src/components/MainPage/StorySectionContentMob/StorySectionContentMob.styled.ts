import styled from '@emotion/styled';
import bg from '@/images/story/bg-mob.webp';
import VagaboundIcon from '@/icons/story/vagabound.svg?react';

export const Container = styled.div`
  display: flex;
  height: 100dvh;
  padding-top: 21%;
  background-image: url(${bg});
  background-size: cover;
  background-position: top center;

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
  padding-top: 7.4%;
  padding-left: 9%;
  padding-right: 13%;
`;

export const Slide1TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const Vagabound = styled(VagaboundIcon)`
  width: 98px;
  height: 49px;
`;

export const Slide1Title = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.pica};
  font-weight: 400;
  font-size: 9.42px;
  line-height: 0.6;
  letter-spacing: 0%;
`;

export const Slide1Text = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0%;
`;

export const Slide2Container = styled.div`
  aspect-ratio: 756/1135;
  padding-top: 12%;
  padding-left: 9%;
`;

export const Slide2Text = styled.p`
  width: 34%;
  height: 250px;
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  letter-spacing: 0%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 14;
  -webkit-box-orient: vertical;
`;

export const Slide2Img = styled.img`
  position: absolute;
  bottom: 20%;
  right: 12%;
  width: 38%;
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
  font-size: 62px;
  line-height: 0.6;
  letter-spacing: 0%;
`;

export const Slide3Text = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 13px;
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
  width: 70%;
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
  width: 50%;
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
  padding-top: 12%;
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
