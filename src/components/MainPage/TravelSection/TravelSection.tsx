import { FC } from 'react';
import {
  Section,
  FirstScreen,
  Image,
  Screen,
  Title,
  Barrel,
  BarrelWrap,
  BarrelRight,
  BarrelLeft,
  Space1,
  BarrelRightTop,
  Space2,
  BarrelLeftTop,
  Space3,
  Space4,
  BarrelRightBottom,
  Space5,
  Space6,
  BarrelLeftBottom,
  BarrelCenterWrap,
} from './TravelSection.styled';
import screen2 from '@/images/travel/screen-2.jpg';
import screen3 from '@/images/travel/screen-3.jpg';
import screen4 from '@/images/travel/screen-4.jpg';
import barrel from '@/images/travel/barrel.png';
import barrelRight from '@/images/travel/barrel-right.png';
import barrelLeft from '@/images/travel/barrel-left.png';

const TravelSection: FC = () => {
  return (
    <Section>
      <Title>Мандрівка бочки</Title>

      <BarrelCenterWrap>
        <Barrel src={barrel} alt='Бочка' />
      </BarrelCenterWrap>

      <Space1></Space1>

      <BarrelWrap>
        <BarrelRightTop src={barrel} alt='Бочка' />
      </BarrelWrap>

      <Space2></Space2>

      <BarrelWrap>
        <BarrelLeftTop src={barrel} alt='Бочка' />
      </BarrelWrap>

      <Space3></Space3>

      <BarrelWrap>
        <BarrelLeft src={barrelLeft} alt='Бочка' />
      </BarrelWrap>

      <Space4></Space4>

      <BarrelWrap>
        <BarrelRightBottom src={barrel} alt='Бочка' />
      </BarrelWrap>

      <Space5></Space5>

      <BarrelWrap>
        <BarrelRight src={barrelRight} alt='Бочка' />
      </BarrelWrap>

      <Space6></Space6>

      <BarrelWrap>
        <BarrelLeftBottom src={barrel} alt='Бочка' />
      </BarrelWrap>

      <FirstScreen></FirstScreen>

      <Screen>
        <Image src={screen2} alt='Банер' />
      </Screen>
      <Screen>
        <Image src={screen3} alt='Банер' />
      </Screen>
      <Screen>
        <Image src={screen4} alt='Банер' />
      </Screen>
    </Section>
  );
};

export default TravelSection;
