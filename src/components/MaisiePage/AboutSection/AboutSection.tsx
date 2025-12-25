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
  TextWrap,
} from './AboutSection.styled';
import frame from '@/images/barrel-page/maisie/frame.webp';
import cut from '@/images/barrel-page/maisie/cut.webp';

const AboutSection: FC = () => {
  return (
    <Section data-header-theme='dark'>
      <Cut src={cut} alt='Декоративний елемент' />
      <SectionTitle>Про нас</SectionTitle>
      <Container>
        <Frame src={frame} alt='Рамка' />
        <TitleWrap>
          <Title>
            МЕЙЗІ
            <br />
            ЕДЕРТОН
          </Title>
          <TextWrap>
            <Text>
              Мейзі Едертон — поціновувачка вінтажу, власниця вишуканого смаку.
              <br />
              <br />
              Для Мейзі календар це пропаганда, вона живе в тій епосі, яка їй
              пасує під настрій.
            </Text>
          </TextWrap>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default AboutSection;
