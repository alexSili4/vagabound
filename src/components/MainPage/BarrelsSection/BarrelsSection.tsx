import { FC } from 'react';
import barrelLeft from '@/images/barrels/barrel-left.webp';
import barrelRight from '@/images/barrels/barrel-right.webp';
import barrelBottom from '@/images/barrels/barrel-bottom.webp';
import barrelTop from '@/images/barrels/barrel-top.webp';
import lightLeft from '@/images/barrels/light-left.webp';
import lightRight from '@/images/barrels/light-right.webp';
import {
  Section,
  BarrelCardLeft,
  BarrelImgLeftWrap,
  BarrelLeftImg,
  BarrelText,
  BarrelTextWrap,
  BarrelTitle,
  Container,
  LightLeft,
  LightLeftWrap,
  LightRight,
  LightRightWrap,
  BarrelBottomImg,
  BarrelRightImg,
  BarrelTopImg,
  BarrelImgRightWrap,
  BarrelImgBottomWrap,
  Title,
  BarrelImgTopWrap,
  BarrelCardBottom,
  BarrelCardTop,
  BarrelCardRight,
  BarrelTopTextWrap,
  CutImg,
  BarrelLeftName,
  BarrelBottomName,
  BarrelTopName,
  BarrelRightName,
} from './BarrelsSection.styled';
import cut from '@/images/barrels/cut.webp';

const BarrelsSection: FC = () => {
  return (
    <Section>
      <CutImg src={cut} alt='Декоративний обрив' />
      <Title>Бочки</Title>
      <Container>
        <BarrelCardLeft>
          <BarrelImgLeftWrap>
            <BarrelLeftImg src={barrelLeft} alt='МЕЙЗІ' />
            <BarrelLeftName>мейзі</BarrelLeftName>
          </BarrelImgLeftWrap>
          <BarrelTextWrap>
            <BarrelTitle>МЕЙЗІ</BarrelTitle>
            <BarrelText>subtitle</BarrelText>
          </BarrelTextWrap>
        </BarrelCardLeft>

        <BarrelCardBottom>
          <BarrelImgBottomWrap>
            <BarrelBottomImg src={barrelBottom} alt='МЕЙЗІ' />
            <BarrelBottomName>мейзі</BarrelBottomName>
          </BarrelImgBottomWrap>
          <BarrelTextWrap>
            <BarrelTitle>МЕЙЗІ</BarrelTitle>
            <BarrelText>subtitle</BarrelText>
          </BarrelTextWrap>
        </BarrelCardBottom>

        <BarrelCardTop>
          <BarrelImgTopWrap>
            <BarrelTopImg src={barrelTop} alt='МЕЙЗІ' />
            <BarrelTopName>мейзі</BarrelTopName>
          </BarrelImgTopWrap>
          <BarrelTopTextWrap>
            <BarrelTitle>МЕЙЗІ</BarrelTitle>
            <BarrelText>subtitle</BarrelText>
          </BarrelTopTextWrap>
        </BarrelCardTop>

        <BarrelCardRight>
          <BarrelImgRightWrap>
            <BarrelRightImg src={barrelRight} alt='МЕЙЗІ' />
            <BarrelRightName>мейзі</BarrelRightName>
          </BarrelImgRightWrap>
          <BarrelTextWrap>
            <BarrelTitle>МЕЙЗІ</BarrelTitle>
            <BarrelText>subtitle</BarrelText>
          </BarrelTextWrap>
        </BarrelCardRight>

        <LightLeftWrap>
          <LightLeft src={lightLeft} alt='Прожектор' />
        </LightLeftWrap>
        <LightRightWrap>
          <LightRight src={lightRight} alt='Прожектор' />
        </LightRightWrap>
      </Container>
    </Section>
  );
};

export default BarrelsSection;
