import styled from '@emotion/styled';
import bg from '@/images/story/bg-mob.png';

export const Section = styled.section`
  overflow: hidden;
`;

export const Title = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  display: flex;
  height: 100dvh;
  padding-top: 21%;
  background-image: url(${bg});
  background-size: cover;
  background-position: bottom center;
`;

export const Content = styled.div`
  position: relative;
  height: 100%;
`;

export const Book = styled.img`
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
