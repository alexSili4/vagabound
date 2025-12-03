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
  AboutAccent,
  TextWrap,
} from './AboutSection.styled';
import frame from '@/images/barrel-page/lochan/frame.webp';
import cut from '@/images/barrel-page/lochan/cut.webp';
import aboutAccent from '@/images/barrel-page/lochan/about-accent.webp';

const AboutSection: FC = () => {
  return (
    <Section>
      <Cut src={cut} alt='Декоративний елемент' />
      <SectionTitle>Про нас</SectionTitle>
      <Container>
        <Frame src={frame} alt='Рамка' />
        <TitleWrap>
          <Title>
            Лохан
            <br />
            Чепелтон
          </Title>
          <TextWrap>
            <AboutAccent src={aboutAccent} alt='' />
            <Text>
              Лохан Чепелтон — мріє стати відомим актором.
              <br />
              <br />
              Він невиправний оптиміст: для нього бочка завжди наполовину повна.
              Його життєве кредо: «Якщо глядачі закидають тебе помідорами —
              зроби з них сік і запроси всіх на “Криваву Мері”.» Звісно, на
              основі віскі.
            </Text>
          </TextWrap>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default AboutSection;
