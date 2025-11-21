import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #500800;
`;

export const Title = styled.h2`
  position: absolute;
  scale: 0;
`;

export const FirstScreen = styled.div`
  position: relative;
  height: 150dvh;
`;

export const Screen = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: bottom center;
`;

export const BarrelWrap = styled.div`
  position: sticky;
  top: 95%;
  left: 0;
  width: 100%;
`;

export const BarrelCenterWrap = styled(BarrelWrap)`
  z-index: 100;
`;

export const Barrel = styled.img`
  position: absolute;
  bottom: 20dvh;
  left: 50%;
  height: 50dvh;
  aspect-ratio: 343 / 433;
  transform: translateX(-50%);
`;

export const BarrelRightTop = styled(Barrel)`
  left: 73.3%;
  transform: translateX(0);
`;

export const BarrelLeftTop = styled(Barrel)`
  left: auto;
  right: 58.8%;
  transform: translateX(0);
`;

export const BarrelLeft = styled(Barrel)`
  left: 0;
  aspect-ratio: 534 / 866;
  transform: translateX(0);
`;

export const BarrelRight = styled(Barrel)`
  left: auto;
  right: 0;
  aspect-ratio: 456 / 866;
  transform: translateX(0);
`;

export const BarrelRightBottom = styled(Barrel)`
  left: 57%;
  transform: translateX(0);
`;

export const BarrelLeftBottom = styled(Barrel)`
  left: auto;
  right: 72.1%;
  transform: translateX(0);
`;

export const Space1 = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
`;

export const Space2 = styled.div`
  padding-top: ${({ theme }) => theme.spacing(1)}px;
`;

export const Space3 = styled.div`
  padding-top: ${({ theme }) => theme.spacing(6)}px;
`;

export const Space4 = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
`;

export const Space5 = styled.div`
  padding-top: ${({ theme }) => theme.spacing(4)}px;
`;

export const Space6 = styled.div`
  padding-top: ${({ theme }) => theme.spacing(6)}px;
`;
