import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #500800;
  transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LogoWrap = styled.div`
  position: relative;
  width: 240px;
  aspect-ratio: 1/1;
`;

const blink = keyframes`
  0% {
    opacity: 1;
  }
  16.66% {
    opacity: 1;
  }
  16.67% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Logo = styled.img<{ $index: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${blink} 300ms linear infinite;
  animation-delay: ${({ $index }) => $index * 50}ms;
`;

export const Progress = styled.div`
  width: 100%;
  height: 8px;
`;
