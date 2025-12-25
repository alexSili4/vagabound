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
import logo from '@/images/barrel-page/rory/logo.webp';
import passport from '@/images/barrel-page/rory/passport.webp';

const OrderSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Замовлення</SectionTitle>
      <Container>
        <TitleWrap>
          <Title>Knockdhu</Title>
          <Text>
            <Accent>Вік:</Accent> 18 років
            <br />
            <br />
            <Accent>Бочка:</Accent> Amontillado
            <br />
            <br />
            <Accent>Аромат:</Accent> Торфяне вугілля, що тліє. Найтемніший напій
            з усієї групи.
            <br />
            <br />
            <Accent>Смак:</Accent> Безпомилково торф’яний Knockdhu зі смаком
            Подрібнений підсмажений мигдаль, розчавлений у торф’яному болоті.
            <br />
            <br />
            <Accent>Післясмак:</Accent> ховий і безкомпромісний. Глака
            маслянистість протистоїть торф’яному диму, який тримається довше й
            повністю обволікає піднебіння. Північ Шотландії у пляшці.
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
