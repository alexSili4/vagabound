import { FC } from 'react';
import frame2 from '@/images/barrel-page/maisie/frame-2.webp';
import {
  Section,
  Container,
  SectionTitle,
  Image,
  TextWrap,
  Accent,
  Text,
  Title,
} from './RecordSection.styled';

const RecordSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Експеримент</SectionTitle>

      <Container>
        <Image src={frame2} alt='Бочка' />
        <TextWrap>
          <Title>Запис №17</Title>
          <Text>
            <Accent>Суб’єкт:</Accent> Мейзі Еддертон
            <br />
            <br />
            <Accent>Експеримент:</Accent> Шопінг на Блошиному ринку
            <br />
            <br />
            <Accent>Деталі:</Accent> Серед вінтажних дзеркал, срібних ложок,
            старих книг – Мейзі шукала «своє».
            <br />
            <br />
            <Accent>Спостереження:</Accent> Вона ігнорувала все, що виглядало
            надто добре. Мейзі знала: ідеальними бувають тільки підробки.
            Найбільший відгук в її душі викликала скринька з відламаною ніжкою –
            Мейзі дуже прониклась її трагічною історією.
            <br />
            <br />
            <Accent>Вплив на смак:</Accent> Смак набув характеру «сімейної
            реліквії». Це напій, який хочеться не тільки пити, а і передати у
            спадок.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default RecordSection;
