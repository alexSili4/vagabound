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
import image from '@/images/barrel-page/maisie/image.webp';
import line from '@/images/barrel-page/maisie/line.webp';
import lines from '@/images/barrel-page/maisie/lines.webp';

const PreferencesSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Вподбання</SectionTitle>
      <Container>
        <Image src={image} alt='Зображення' />
        <TextWrap>
          <Title>Мейзі любить:</Title>

          <Line src={line} alt='' />

          <Text>
            <Accent>Знаходити на барахолках унікальні речі</Accent> і вигадувати
            їм біографії. Купуючи срібну ложку, вона свято вірить, що нею колись
            розмішували отруту в чаї невірного графа.
            <br />
            <br />
            <Accent>Пришивати, старовинні ґудзики на нові сорочки,</Accent>{' '}
            перетворюючи нудний мас-маркет на музейний експонат.
            <br />
            <br />
            <Accent>Слухати музику на вінілі.</Accent> Якщо вам здалось, що вона
            насолоджується не так джазом, як потріскуванням платівки, вам не
            здалось.
            <br />
            <br />
            <Accent>Фотографувати на стару камеру дрібниці,</Accent> які інші не
            помічають: чи то тріщину в асфальті, що нагадує блискавку, чи то
            тінь, яка живе окремим життям.
            <br />
            <br />
            <Accent>Епістолярний тролінг.</Accent> Відправляти незнайомцям
            старовинні листівки з іронічними посланнями, виведеними бездоганним
            каліграфічним почерком, на кшталт: «Спиш?» або «Сови – не те, чим
            здаються».
          </Text>
        </TextWrap>
        <TextWrap>
          <Lines src={lines} alt='' />
          <Title>Мейзі не любить:</Title>
          <Text>
            <Accent>Коли підробку видають за антикваріат,</Accent> напис «Made
            in China» на дні «вікторіанської» чашки для неї рівносильно
            особистій образі.
            <br />
            <br />
            <Accent>Варварські нотатки на полях старовинних книг,</Accent> якось
            вона знайшла підпис “Не смішно” на полях “Божественої комедії”.
            <br />
            <br />
            <Accent>
              Мейзі не любить будь-які речі, що зроблені без душі,
            </Accent>{' '}
            із пластику або поспіхом. Як ви вже зрозуміли, шоу «Холостяк» – не
            для Мейзі.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default PreferencesSection;
