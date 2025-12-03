import { FC } from 'react';
import {
  Section,
  Container,
  SectionTitle,
  Text,
  Title,
  TitleWrap,
  Frame,
} from './AboutSection.styled';
import frame from '@/images/barrel-page/maisie/frame.webp';

const AboutSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Про нас</SectionTitle>
      <Container>
        <Frame src={frame} alt='Рамка' />
        <TitleWrap>
          <Title>Title</Title>
          <Text>
            Рорі Нок - провідник Шотланської залізниці. Пунктуальний
            перфекціоніст. Він знає понад 100 способів ідеально спакувати
            валізу, Пікассо та Малевич не вміли так віртуозно працювати з
            формою, як Рорі з ручною поклажею.
          </Text>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default AboutSection;
