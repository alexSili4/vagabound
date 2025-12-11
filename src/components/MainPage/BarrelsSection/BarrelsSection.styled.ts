import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  position: relative;
  background-color: #500800;
  padding-top: ${({ theme }) => theme.spacing(50)}px;
  padding-bottom: ${({ theme }) => theme.spacing(150)}px;
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
  z-index: 20;
  top: -235px;
  left: -315px;
  pointer-events: none;
  transform: rotate(-15deg);
  transform-origin: center left;
  transition: transform 1.2s ease-out;

  &.in-view {
    transform: rotate(0deg);
  }

  &.tracking {
    transition: transform 0.3s ease-out;
  }
`;

export const LightLeft = styled.img`
  width: 1040px;
  height: 660px;
`;

export const LightRightWrap = styled.div`
  position: absolute;
  z-index: 20;
  top: -175px;
  right: -225px;
  pointer-events: none;
  transform: rotate(15deg);
  transform-origin: center right;
  transition: transform 1.2s ease-out;

  &.in-view {
    transform: rotate(0deg);
  }

  &.tracking {
    transition: transform 0.3s ease-out;
  }
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
  width: 347px;
  max-width: none;
`;

export const BarrelTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(1)}px;
  width: 260px;
`;

export const BarrelTopTextWrap = styled(BarrelTextWrap)`
  width: 160px;
  margin-left: ${({ theme }) => theme.spacing(60)}px;
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

export const BarrelLinkBottom = styled(Link)`
  position: absolute;
  z-index: 10;
  bottom: 0;
  left: 316px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const BarrelLinkTop = styled(Link)`
  position: absolute;
  top: -190px;
  right: 297px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;

export const BarrelLinkRight = styled(Link)`
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

// Label
export const LabelContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  right: 0;
  rotate: 6deg;
`;

export const LabelBg = styled.img`
  width: 170px;
  height: 80px;
`;

export const LabelTextWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(0.5)}px;
  transform: translateX(-50%) translateY(-50%);
`;

export const LabelTitle = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 9.2px;
  line-height: 1.2;
  letter-spacing: 2%;
  text-align: center;
  text-transform: lowercase;
`;

export const LabelNumber = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 700;
  font-size: 26.69px;
  line-height: 0.9;
  letter-spacing: 2%;
  text-align: center;
  text-transform: uppercase;
`;

export const TotalNumber = styled.span`
  color: rgba(37, 37, 37, 0.24);
`;

export const LabelDesc = styled.p`
  color: #252525;
  font-family: ${({ theme }) => theme.fontFamily.rubik};
  font-weight: 400;
  font-size: 9.2px;
  line-height: 1.2;
  letter-spacing: 2%;
  text-align: center;
  text-transform: lowercase;
`;

export const DelimiterWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 127px;
  transform: translateX(-50%) translateY(-50%);
`;

export const Delimiter = styled.div`
  width: 17px;
  height: 1px;
  background-color: #252525;
`;
