import { FC } from 'react';
import frame2 from '@/images/barrel-page/rory/frame-2.webp';
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
          <Title>Запис №22</Title>
          <Text>
            <Accent>Суб’єкт:</Accent> Рорі Нок у взаємодії з об'єктом Мейзі
            Еддертон
            <br />
            <br />
            <Accent>Експеримент:</Accent> Романтичної вечеря у вагні-ресторані.
            <br />
            <br />
            <Accent>Деталі:</Accent> Між Рорі і Мейзі запалена свічка та
            метроном.
            <br />
            <br />
            <Accent>Спостереження:</Accent> Конфлікт часових поясів. Рорі
            намагався пришвидшити вечір, щоб встигнути до десерту за розкладом,
            тоді як Мейзі "тягнула час", щоб посмакувати момент.
            <br />
            <br />
            <Accent>Вплив на смак:</Accent> Додався фініш старомодної романтики.
            Смак компромісу.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default RecordSection;
