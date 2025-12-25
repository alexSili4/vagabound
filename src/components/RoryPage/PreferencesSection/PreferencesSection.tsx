import { FC } from 'react';
import {
  Accent,
  Container,
  Section,
  SectionTitle,
  Text,
  TextWrap,
  Title,
  Image,
  Line,
  Lines,
} from './PreferencesSection.styled';
import image from '@/images/barrel-page/rory/image.webp';
import line from '@/images/barrel-page/rory/line.webp';
import lines from '@/images/barrel-page/rory/lines.webp';

const PreferencesSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Вподбання</SectionTitle>
      <Container>
        <Image src={image} alt='Зображення' />
        <TextWrap>
          <Title>Рорі любить:</Title>
          <Text>
            Як проносяться <Accent>краєвиди за вікном потяга.</Accent>
            <br />
            <br />
            <Accent>Організовувати багаж пасажирів.</Accent> Рорі може
            розмістити 50 валіз у просторі для 30-ти так, щоб вони утворили
            стіну без єдиної щілини.
            <br />
            <br />
            <Accent>Грати в шахи,</Accent> особливо момент початку гри, коли
            кожна фігура стоїть на своєму місці.
            <br />
            <br />
            <Accent>Звук компостера.</Accent> Іноді так захоплюється, що
            компостує все що попадає під руку: серветки, меню в ресторані, шарф,
            одного разу прокомпостував сто доларів – “Що ж, якщо це ціна
            задоволення, то воно того вартувало” – подумав Рорі.
          </Text>

          <Line src={line} alt='' />
        </TextWrap>
        <TextWrap>
          <Lines src={lines} alt='' />
          <Title>Рорі не любить:</Title>
          <Text>
            Коли люди стоять на ескалаторі зліва, незаповнені клітинки у
            кросвордах, слово «приблизно», сходи різної висоти, годинники що
            відстають, розвʼязані шнурки і інші докази хаотичності світу –
            докази, які він волів би знищити або, принаймні впорядкувати.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default PreferencesSection;
