import { FC } from 'react';
import barrelWithDolls from '@/images/barrel-page/lochan/barrel-with-dolls.webp';
import barrelWithDollsMob from '@/images/barrel-page/lochan/barrel-with-dolls-mob.webp';
import {
  Section,
  Container,
  SectionTitle,
  Doll,
  Image,
  TextWrap,
  Accent,
  Text,
  Title,
  ImageMob,
} from './RecordSection.styled';
import doll from '@/images/barrel-page/lochan/doll.webp';

const RecordSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Експеримент</SectionTitle>

      <Container>
        <Doll src={doll} alt='Лялька' />
        <ImageMob src={barrelWithDollsMob} alt='Бочка та ляльки' />
        <Image src={barrelWithDolls} alt='Бочка та ляльки' />
        <TextWrap>
          <Title>Запис №42</Title>
          <Text>
            <Accent>Суб’єкт:</Accent> Лохан Чепелтон
            <br />
            <br />
            <Accent>Експеримент</Accent>: Зйомки рімейку фільму «Гуллівер»
            <br />
            <br />
            <Accent>Деталі:</Accent> Лохана помістили в центр іграшкового міста
            та заплутали мотузками. На тлі ліліпутів завбільшки з сірник він
            нарешті відчув себе Великим Актором.
            <br />
            <br />
            <Accent>Сереження:</Accent> Лохан грав зв’язаного героя — геніально:
            жодного зайвого руху. Абсолютна статика, яку критики назвали б
            «глибоким внутрішнім ням».
            <br />
            <br />
            <Accent>Вплив на смак:</Accent> Відбулася гра масштабів: тіло напою
            велетенське, але на язику розсипається на десятки ліліпутських
            ноток.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default RecordSection;
