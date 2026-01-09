import styled from '@emotion/styled';
import banner from '@/images/barrel-page/lochan/banner.webp';

export const Section = styled.section`
  background-image: url(${banner});
  background-position: 0 0;
  background-size: cover;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 375px;
  height: 100dvh;
  padding-left: ${({ theme }) => theme.spacing(4)}px;
  padding-right: ${({ theme }) => theme.spacing(4)}px;
  padding-top: ${({ theme }) => theme.spacing(20)}px;
  padding-bottom: ${({ theme }) => theme.spacing(20)}px;
  margin-left: auto;
  margin-right: auto;
  transition: height ${({ theme }) => theme.transitionDurationAndFunc};

  @media (min-width: ${({ theme }) => theme.breakpoints.desk}px) {
    width: 1232px;
    max-width: none;
    padding-top: ${({ theme }) => theme.spacing(32)}px;
    padding-bottom: ${({ theme }) => theme.spacing(44)}px;
  }
`;

export const Video = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 80%;
`;
