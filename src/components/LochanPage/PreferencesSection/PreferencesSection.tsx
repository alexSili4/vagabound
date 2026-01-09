import { FC } from 'react';
import {
  Accent,
  Container,
  Section,
  SectionTitle,
  Text,
  TextWrap,
  Title,
  ImageDesk,
  ImageMob,
  Line,
  Lines,
} from './PreferencesSection.styled';
import image from '@/images/barrel-page/lochan/image.webp';
import imageMob from '@/images/barrel-page/lochan/image-mob.webp';
import line from '@/images/barrel-page/lochan/line.webp';
import lines from '@/images/barrel-page/lochan/lines.webp';

const PreferencesSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Вподбання</SectionTitle>
      <Container>
        <ImageMob src={imageMob} alt='Зображення' />
        <ImageDesk src={image} alt='Зображення' />
        <TextWrap>
          <Title>Лохан любить:</Title>
          <Text>
            <Accent>Перезнімати культові сцени кіно,</Accent> де він, звісно, у
            головній ролі. Його версія «Титаніка» закінчується хепі-ендом —
            переваги бути «дерев’яним» актором очевидні.
            <br />
            <br />
            <Accent>Давати подумки інтервʼю,</Accent> розповідаючи, як саме він
            досяг такого шаленого успіху й наскільки важко залишатися скромним,
            коли ти легенда.
            <br />
            <br />
            <Accent>Малювати на запітнілому дзеркалі у ванній</Accent> глядачів,
            перед якими репетирує свою промову на вручення Нобелівської премії.
            (Так, її не вручають за акторство, але Лохан ще не розібрався з
            преміями остаточно.)
            <br />
            <br />
            <Accent>Цитувати фрази з кіно:</Accent> сказати «Мені потрібен ваш
            одяг» у хімчистці або пафосно прошепотіти «Г’юстоне, у нас
            проблеми», коли закінчився туалетний папір.
            <br />
            <br />
            <Accent>Вуличних музик,</Accent> бо почувається ніби в мюзиклі.
            Якось він переслідував кішку дев’ять кварталів, уявивши себе актором
            «Cats».
          </Text>

          <Line src={line} alt='' />
          <Lines src={lines} alt='' />
        </TextWrap>
        <TextWrap>
          <Title>Лохан не любить:</Title>
          <Text>
            <Accent>Коли його творчий хаос називають “безладом”.</Accent> За
            словами Лохана, це — декорація до психологічної драми, в якій він
            готується зіграти.
            <br />
            <br />
            <Accent>
              Коли трапляється щось сумне, а на фоні не грає скрипка.
            </Accent>{' '}
            Реальність, вважає Лохан, має погано продуманий саунд-дизайн.
            <br />
            <br />
            <Accent>Коли для ролі треба скинути пару “літрів”.</Accent> На таке
            він точно не піде, бо кожен літр — частина його безцінного
            внутрішнього світу.
          </Text>
        </TextWrap>
      </Container>
    </Section>
  );
};

export default PreferencesSection;
