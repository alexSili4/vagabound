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
} from './PreferencesSection.styled';
import image from '@/images/barrel-page/lochan/image.webp';
import line from '@/images/barrel-page/lochan/line.webp';

const PreferencesSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Вподбання</SectionTitle>
      <Container>
        <Image src={image} alt='Зображення' />
        <TextWrap>
          <Title>Містер Кемпбел любить:</Title>
          <Text>
            <Accent>
              Спостерігати, як вечірнє сонце проходить крізь кольорові вітражі.
            </Accent>
            <br />
            <br />
            <Accent>Запах старого паперу й бджолиного воску.</Accent> Особливо —
            книги, в яких запитань більше, ніж відповідей.
            <br />
            <br />
            <Accent>Допомагати ближньому не лише словом, а й ділом.</Accent> Він
            — найкращий детектив парафії: на його рахунку десятки розкритих
            справ. Одна з найгучніших — справа про зниклу свічку. Містер Кемпбел
            блискуче впорався: «Вона вигоріла на роботі».
            <br />
            <br />
            <Accent>
              Той факт, що частка віскі випаровується під час витримки.
            </Accent>{' '}
            Кемпбел любить нагадувати, що навіть Вищі Сили цінують якісний
            продукт, тому забирають свій відсоток.
            <br />
            <br />
            <Accent>Спостерігати за котами в бінокль.</Accent> Він переконаний,
            що коти — вінець творіння, досконалі істоти. І що вони роблять
            людині величезну послугу, дозволяючи себе чухати.
          </Text>

          <Line src={line} alt='' />
        </TextWrap>
        <TextWrap>
          <Title>Містер Кемпбел не любить:</Title>
          <Text>
            <Accent>Штучне світло.</Accent> Електричні лампи, на його думку,
            вбивають магію, бо жодна магія не працює від батарейок.
            <br />
            <br />
            <Accent>Коли люди плутають мовчанку з тишею.</Accent> Для нього тиша
            у храмі — це не відсутність звуків, це простір, де можна почути
            власні думки.
            <br />
            <br />
            <Accent>Коли не вдається “розкрити справу”.</Accent> Якось він три
            години шукав ключі від складу, допитав свідків і склав карту
            пересувань — доки не з’ясував, що весь цей час ключі були в руках у
            парафіянина, який думав що їх вкрали.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default PreferencesSection;
