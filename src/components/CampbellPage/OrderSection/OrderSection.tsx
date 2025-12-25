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
import logo from '@/images/barrel-page/campbell/logo.webp';
import passport from '@/images/barrel-page/campbell/passport.webp';

const OrderSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Замовлення</SectionTitle>
      <Container>
        <TitleWrap>
          <Title>Williamson</Title>
          <Text>
            <Accent>Вік:</Accent> 13 років
            <br />
            <br />
            <Accent>Бочка:</Accent> Holyrood Peated, Islay Peated Quarter Cask
            <br />
            У цій бочці раніше витримували димний торф’яний віскі з острова
            Айла.
            <br />
            <br />
            <Accent>Аромат:</Accent> Феноли Laphroaig у повній гармонії. Чіткі
            відтінки торф’яних боліт.
            <br />
            <br />
            <Accent>Смак:</Accent> Потужно торф’яний спирт — грубий, дикий, саме
            такий, як очікуєш від однієї з найкращих винокурень Айли. Великий
            дим і насичені феноли; сама бочка підкреслює димність і додає
            наприкінці м’яку солодку карамель.
            <br />
            <br />
            <Accent>Післясмак:</Accent> Димові відтінки й льодяники від кашлю.
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
