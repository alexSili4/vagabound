import { FC } from 'react';
import {
  Section,
  Container,
  SectionTitle,
  Text,
  Title,
  TitleWrap,
  Frame,
  Cut,
  Bag,
  TextWrap,
} from './AboutSection.styled';
import frame from '@/images/barrel-page/rory/frame.webp';
import cut from '@/images/barrel-page/rory/cut.webp';
import bag from '@/images/barrel-page/rory/bag.webp';

const AboutSection: FC = () => {
  return (
    <Section>
      <Cut src={cut} alt='Декоративний елемент' />
      <SectionTitle>Про нас</SectionTitle>
      <Container>
        <Bag src={bag} alt='Чемодан' />
        <Frame src={frame} alt='Рамка' />
        <TitleWrap>
          <Title>
            Рорі
            <br />
            Нок
          </Title>
          <TextWrap>
            <Text>
              Рорі Нок - провідник Шотланської залізниці.
              <br />
              <br />
              Пунктуальний перфекціоніст. Він знає понад 100 способів ідеально
              спакувати валізу, Пікассо та Малевич не вміли так віртуозно
              працювати з формою, як Рорі з ручною поклажею.
            </Text>
          </TextWrap>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default AboutSection;
