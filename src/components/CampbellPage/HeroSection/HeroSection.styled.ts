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
  width: 1200px;
  height: 100dvh;
  padding-top: ${({ theme }) => theme.spacing(32)}px;
  padding-bottom: ${({ theme }) => theme.spacing(44)}px;
  margin-left: auto;
  margin-right: auto;
  transition: height ${({ theme }) => theme.transitionDurationAndFunc};
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)}px;
`;

export const Subtitle = styled.p`
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 2%;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: #1a3e2f;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 700;
  font-size: 72px;
  line-height: 1.2;
  letter-spacing: 2%;
  text-transform: uppercase;
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
