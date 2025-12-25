import { FC } from 'react';
import {
  Logo,
  Section,
  Container,
  Photo,
  SectionTitle,
  Text,
  Title,
  TitleWrap,
  PhotoWrap,
  Accent,
} from './OrderSection.styled';
import logo from '@/images/barrel-page/maisie/logo.webp';
import passport from '@/images/barrel-page/maisie/passport.webp';

const OrderSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Замовлення</SectionTitle>
      <Container>
        <TitleWrap>
          <Title>Balblair </Title>
          <Text>
            <Accent>Вік:</Accent> 13 років
            <br />
            <br />
            <Accent>Бочка:</Accent> Pedro Ximénez
            <br />
            <br />
            <Accent>Аромат:</Accent> Різкий і дуже насичений аромат винограду,
            інжиру та родзинок.
            <br />
            <br />
            <Accent>Смак:</Accent> Потужна хвиля густого сиропу з червоного
            винограду, яка поступово переходить у м’ятну/солону ноту.
            <br />
            <br />
            <Accent>Післясмак:</Accent> Різкість м’яти прорізає PX, який
            залишається фоновим. Віскі складається з двох частин: великі,
            соковиті виноградини й освіжаючий солодовий характер Balblair.
            Чудовий приклад гармонії між солодом і деревом.
          </Text>
        </TitleWrap>
        <PhotoWrap>
          <Logo src={logo} alt='Логотип' />
          <Photo src={passport} alt='Паспорт' />
        </PhotoWrap>
      </Container>
    </Section>
  );
};

export default OrderSection;
