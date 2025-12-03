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
} from './OrderSection.styled';
import logo from '@/images/barrel-page/maisie/logo.webp';
import photo from '@/images/barrel-page/maisie/photo.webp';

const OrderSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Замовлення</SectionTitle>
      <Container>
        <TitleWrap>
          <Logo src={logo} alt='Логотип' />
          <Photo src={photo} alt='Світлина' />
          <Title>Заголовок</Title>
          <Text>
            Рорі Нок, він вже 18 років настоює KNOCKDHU cask: Amontillado
            <br />
            Аромат: торфяне вугілля, що тліє. Найтемніший напій з усієї групи.
            Смак: Безпомилково торф’яний Knockdhu зі смаком багатої, вологої
            землі. Подрібнений підсмажений мигдаль, розчавлений у торф’яному
            болоті.
            <br />
            Післясмак: Маслянистий, горіховий і безкомпромісний. Гладка
            маслянистість протистоїть торф’яному диму, який тримається довше й
            повністю обволікає піднебіння. Північ Шотландії у пляшці.
          </Text>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default OrderSection;
