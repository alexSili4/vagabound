import styled from '@emotion/styled';

export const Slider = styled.div`
  width: 100%;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    display: none;
  }
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

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
  width: 100%;
`;

export const SliderControls = styled.div`
  position: relative;
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

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
`;

export const SlideImg = styled.img``;

export const SlideTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing()}px;
`;

export const BarrelTitle = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: -1%;
  font-variant: small-caps;
`;

export const BarrelSubtitle = styled.p`
  color: rgba(232, 232, 232, 0.48);
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 300;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: -1%;
`;

export const BarrelText = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;
  letter-spacing: 0%;
`;
