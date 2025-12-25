import { FC } from 'react';
import frame2 from '@/images/barrel-page/campbell/frame-2.webp';
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
        <Image src={frame2} alt='Бочка та ляльки' />
        <TextWrap>
          <Title>Запис №13</Title>
          <Text>
            <Accent>Суб’єкт:</Accent> Містер Кемпбел
            <br />
            <br />
            <Accent>Експеримент:</Accent> Повна тиша та читання вголос Ніцше
            <br />
            <br />
            <Accent>Спостереження:</Accent> Жодних змін.
            <br />
            Абсолютний спокій.
            <br />
            <br />
            <Accent>Висновок:</Accent> Віра цієї обіцяє бути або божественним,
            або нігілістичним.
            <br />
            <br />
            <Accent>Вплив на смак:</Accent> либокий, як безодня, що вдивляється
            у вас у відповідь. Це смак «Надвіскі»: його міцність не вбиває, а
            робить вас сильнішим.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default RecordSection;
