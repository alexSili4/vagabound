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
import logo from '@/images/barrel-page/lochan/logo.webp';
import passport from '@/images/barrel-page/lochan/passport.webp';

const OrderSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Замовлення</SectionTitle>
      <Container>
        <TitleWrap>
          <Title>Breival</Title>
          <Text>
            <Accent>Вік:</Accent> 15 років
            <br />
            <br />
            <Accent>Бочка:</Accent> Rivesaltes
            <br />
            <br />
            <Accent>Аромат:</Accent> Солодкі, цукрові ноти з карамеллю; колір
            набуває легкого рожевого відтінку.
            <br />
            <br />
            <Accent>Смак:</Accent> Ягідні ноти троянди та малини з бочки
            переплітаються з м’яким солодовим характером, посилюючи аромат і
            даючи бочці Rivesaltes повністю розкритися.
            <br />
            <br />
            <Accent>Післясмак:</Accent> Яскраві винні відтінки та сухофрукти,
            особливо курага, залишаються на язиці з довгим таніновим фінішем
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
