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
import frame from '@/images/barrel-page/campbell/frame.webp';
import cut from '@/images/barrel-page/campbell/cut.webp';
import aboutAccent from '@/images/barrel-page/campbell/about-accent.webp';

const AboutSection: FC = () => {
  return (
    <Section data-header-theme='dark'>
      <Cut src={cut} alt='Декоративний елемент' />
      <SectionTitle>Про нас</SectionTitle>
      <Container>
        <Frame src={frame} alt='Рамка' />
        <TitleWrap>
          <Title>
            Містер
            <br />
            Кемпбел
          </Title>
          <TextWrap>
            <AboutAccent src={aboutAccent} alt='Акцент' />
            <Text>
              Містер Кемпбел — священник у четвертому поколінні.
              <br />
              <br />
              Як і годиться духовним особам, він заглиблений у роздуми над
              фундаментальними питаннями: порятунок душі, природа добра і зла і,
              звісно, чому не можна просто взяти й надрукувати гроші для всіх.
            </Text>
          </TextWrap>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default AboutSection;
