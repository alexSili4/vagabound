import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  position: relative;
  background-color: #500800;
`;

export const CutImg = styled.img`
  position: absolute;
  top: -40px;
  left: 0;
  width: 100%;
`;

export const Title = styled.h2`
  position: absolute;
  scale: 0;
`;

export const Container = styled.div`
  position: relative;
  width: 1200px;
  height: 669px;
  margin-left: auto;
  margin-right: auto;
`;

export const LightLeftWrap = styled.div`
  position: absolute;
  top: -235px;
  left: -315px;
  pointer-events: none;
`;

export const LightLeft = styled.img`
  width: 1040px;
  height: 660px;
`;

export const LightRightWrap = styled.div`
  position: absolute;
  top: -175px;
  right: -225px;
  pointer-events: none;
`;

export const LightRight = styled.img`
  width: 1040px;
  height: 660px;
`;

export const BarrelLinkLeft = styled(Link)`
  position: absolute;
  top: -15px;
  left: 11px;
`;

export const BarrelCardLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const BarrelImgLeftWrap = styled.div`
  position: relative;
  width: 334px;
  height: 451px;
`;

export const BarrelLeftImg = styled.img`
  position: absolute;
  top: -12px;
  left: -13px;
  width: 357px;
  max-width: none;
`;

export const BarrelName = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: 2%;
  text-transform: uppercase;
`;

export const BarrelLeftName = styled(BarrelName)`
  position: absolute;
  top: 225px;
  left: 80px;
`;

export const BarrelBottomName = styled(BarrelName)`
  position: absolute;
  top: 150px;
  left: 118px;
`;

export const BarrelTopName = styled(BarrelName)`
  position: absolute;
  top: 266px;
  left: 70px;
`;

export const BarrelRightName = styled(BarrelName)`
  position: absolute;
  top: 152px;
  left: 80px;
`;

export const BarrelTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;

export const BarrelTopTextWrap = styled(BarrelTextWrap)`
  margin-left: ${({ theme }) => theme.spacing(36)}px;
`;

export const BarrelTitle = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.cormorantGaramond};
  font-weight: 300;
  font-style: Light;
  font-size: 32px;
  line-height: 1.2;
  font-variant: small-caps;
`;

export const BarrelText = styled.p`
  color: #e8e8e8;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
`;

export const BarrelCardBottom = styled.div`
  position: absolute;
  bottom: 0;
  left: 316px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const BarrelCardTop = styled.div`
  position: absolute;
  top: -90px;
  right: 207px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const BarrelCardRight = styled.div`
  position: absolute;
  bottom: 25px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const BarrelImgBottomWrap = styled.div`
  position: relative;
  width: 378px;
  height: 326px;
`;

export const BarrelImgTopWrap = styled.div`
  position: relative;
  width: 430px;
  height: 352px;
`;

export const BarrelImgRightWrap = styled.div`
  position: relative;
  width: 296px;
  height: 398px;
`;

export const BarrelBottomImg = styled.img`
  position: absolute;
  top: -10px;
  left: -15px;
  width: 410px;
  max-width: none;
`;

export const BarrelTopImg = styled.img`
  position: absolute;
  top: -20px;
  left: -20px;
  width: 455px;
  max-width: none;
`;

export const BarrelRightImg = styled.img`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 320px;
  max-width: none;
`;
