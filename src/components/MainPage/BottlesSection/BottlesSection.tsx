import { FC } from 'react';
import {
  Section,
  Card1,
  Card2,
  Card3,
  Card4,
  CardContent,
  CardInfo,
  CardInfoItem,
  CardText,
  CardTitle,
  Image,
  List,
  ListItem,
  Delimiter,
  CardLink,
  Name,
  Desk,
  Accordion,
  AccordionBtn,
  IconWrap,
  ContentWrap,
  Content,
  CardInfoWrap,
  Accent,
  CardName,
} from './BottlesSection.styled';
import bottle1 from '@/images/bottles/bottle-1.webp';
import bottle2 from '@/images/bottles/bottle-2.webp';
import bottle3 from '@/images/bottles/bottle-3.webp';
import bottle4 from '@/images/bottles/bottle-4.webp';
import { useAccordionElement } from '@/hooks';
import { LuChevronUp } from 'react-icons/lu';
import { SectionId } from '@/constants';

const Card1Characteristics: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>вік</CardTitle>
        <CardText>18 років</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
        <CardText>Листопад 2011</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ТИП БОЧКИ</CardTitle>
        <CardText>
          Knockdhu — Amontillado (сухий, глибокий стилістичний вплив, який
          робить профіль ще темнішим і насиченим)
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card1Annotation: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>ХАРАКТЕР</CardTitle>
        <CardText>
          <Accent>Аромат:</Accent> Торф’яне вугілля, що тліє. Найтемніший і
          найбрутальніший профіль у всій серії.
          <br />
          <Accent>Смак:</Accent> Класичний торф’яний Knockdhu з відтінками
          вологої землі. Подрібнений підсмажений мигдаль, змішаний з торф’яним
          болотом.
          <br />
          <Accent>Посмак:</Accent> Маслянистий, горіховий, безкомпромісний.
          Олійна гладкість контрастує з довгим торф’яним димом, який обволікає
          піднебіння повністю. Північ Шотландії у пляшці.
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card1CharacteristicsAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Характеристики</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card1Characteristics />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card1AnnotationAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Аннотація та історія смаку</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card1Annotation />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card1Content: FC = () => {
  return (
    <CardContent>
      <Image src={bottle1} alt='' />
      <CardInfoWrap>
        <CardInfo>
          <CardName>KNOCKDHU</CardName>
          <Card1CharacteristicsAccordion />
          <Card1AnnotationAccordion />
          <Desk>
            <Card1Characteristics />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
          <Desk>
            <Card1Annotation />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
        </CardInfo>
        <CardInfoItem>
          <CardTitle>ТИРАЖ</CardTitle>
          <CardText>ХХХ пляшок 0,75л</CardText>
        </CardInfoItem>
      </CardInfoWrap>
    </CardContent>
  );
};

const Card2Characteristics: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>вік</CardTitle>
        <CardText>15 років</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
        <CardText>Листопад 2011</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ТИП БОЧКИ</CardTitle>
        <CardText>
          Rivesaltes
          <br />
          (солодке кріплене вино, яке додає рожевий відтінок, фруктову
          насиченість і м’яку карамельність)
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card2Annotation: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>ХАРАКТЕР</CardTitle>
        <CardText>
          <Accent>Аромат:</Accent> Солодкі цукрові ноти з карамеллю, легка
          ягідність. Колір набуває ніжного рожевого тону.
          <br />
          <Accent>Смак:</Accent> Рожа/малина з бочки зливається з м’яким
          солодовим профілем, відкриваючи повний потенціал Rivesaltes.
          <br />
          <Accent>Посмак:</Accent>
          Винні ноти й сухофрукти, особливо курага. Довгий таніновий фініш, який
          затримується на язиці.
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card2CharacteristicsAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Характеристики</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card2Characteristics />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card2AnnotationAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Аннотація та історія смаку</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card2Annotation />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card2Content: FC = () => {
  return (
    <CardContent>
      <Image src={bottle2} alt='' />
      <CardInfoWrap>
        <CardInfo>
          <CardName>BREIVAL</CardName>
          <Card2CharacteristicsAccordion />
          <Card2AnnotationAccordion />
          <Desk>
            <Card2Characteristics />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
          <Desk>
            <Card2Annotation />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
        </CardInfo>
        <CardInfoItem>
          <CardTitle>ТИРАЖ</CardTitle>
          <CardText>ХХХ пляшок 0,75л</CardText>
        </CardInfoItem>
      </CardInfoWrap>
    </CardContent>
  );
};

const Card3Characteristics: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>вік</CardTitle>
        <CardText>13 років</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
        <CardText>Листопад 2011</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ТИП БОЧКИ</CardTitle>
        <CardText>
          Breival
          <br />
          (квотеркаск, в якому витримували неназване віскі з Айли, потім
          витримували обкурене віскі Holyrood, а потім витримували в ньому наше
          віскі)
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card3Annotation: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>ХАРАКТЕР</CardTitle>
        <CardText>
          <Accent>Аромат:</Accent> Феноли Laphroaig у всій своїй красі та
          гармонії.
          <br />
          <Accent>Смак:</Accent> Потужні торф’яні ноти — саме те, чого очікуєш
          від легендарної гуральні Айли.
          <br />
          <Accent>Посмак:</Accent> Дим й льодяники від кашлю
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card3CharacteristicsAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Характеристики</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card3Characteristics />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card3AnnotationAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Аннотація та історія смаку</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card3Annotation />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card3Content: FC = () => {
  return (
    <CardContent>
      <Image src={bottle3} alt='' />
      <CardInfoWrap>
        <CardInfo>
          <CardName>WILLIAMSON</CardName>
          <Card3CharacteristicsAccordion />
          <Card3AnnotationAccordion />
          <Desk>
            <Card3Characteristics />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
          <Desk>
            <Card3Annotation />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
        </CardInfo>
        <CardInfoItem>
          <CardTitle>ТИРАЖ</CardTitle>
          <CardText>ХХХ пляшок 0,75л</CardText>
        </CardInfoItem>
      </CardInfoWrap>
    </CardContent>
  );
};

const Card4Characteristics: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>вік</CardTitle>
        <CardText>13 років</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ПОЧАТОК ВИТРИМКИ</CardTitle>
        <CardText>Листопад 2011</CardText>
      </CardInfoItem>
      <Delimiter></Delimiter>
      <CardInfoItem>
        <CardTitle>ТИП БОЧКИ</CardTitle>
        <CardText>
          Pedro Ximénez (PX)
          <br />
          (солодке десертне вино, що дарує густий, інжирно-виноградний профіль)
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card4Annotation: FC = () => {
  return (
    <CardInfo>
      <CardInfoItem>
        <CardTitle>ХАРАКТЕР</CardTitle>
        <CardText>
          <Accent>Аромат:</Accent> Дуже насичені ноти винограду, інжиру та
          родзинок.
          <br />
          <Accent>Смак:</Accent> Потужна хвиля густого виноградного сиропу, що
          переходить у м’ятно-солону ноту.
          <br />
          <Accent>Посмак:</Accent> Різка м’ята прорізає солодкий PX, який
          залишається глибоким фоном. Профіль складається з двох частин:
          соковиті виноградини та освіжаюча солодовість Balblair. Чистий приклад
          гармонії солоду й дерева.
        </CardText>
      </CardInfoItem>
    </CardInfo>
  );
};

const Card4CharacteristicsAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Характеристики</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card4Characteristics />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card4AnnotationAccordion: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Accordion>
      <AccordionBtn onClick={onAccordionBtnClick}>
        <span>Аннотація та історія смаку</span>
        <IconWrap isShowElement={isShowElement}>
          <LuChevronUp size={24} />
        </IconWrap>
      </AccordionBtn>

      <ContentWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Content>
          <Card4Annotation />
        </Content>
      </ContentWrap>
    </Accordion>
  );
};

const Card4Content: FC = () => {
  return (
    <CardContent>
      <Image src={bottle4} alt='' />
      <CardInfoWrap>
        <CardInfo>
          <CardName>BALBLAIR</CardName>
          <Card4CharacteristicsAccordion />
          <Card4AnnotationAccordion />
          <Desk>
            <Card4Characteristics />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
          <Desk>
            <Card4Annotation />
          </Desk>
          <Desk>
            <Delimiter></Delimiter>
          </Desk>
        </CardInfo>
        <CardInfoItem>
          <CardTitle>ТИРАЖ</CardTitle>
          <CardText>ХХХ пляшок 0,75л</CardText>
        </CardInfoItem>
      </CardInfoWrap>
    </CardContent>
  );
};

const BottlesSection: FC = () => {
  return (
    <Section>
      <List>
        <ListItem>
          <Card1>
            <Name>Рорі</Name>
            <Card1Content />
            <CardLink href={`#${SectionId.contacts}`}>
              ЗАМОВИТИ | ₴10'000
            </CardLink>
          </Card1>
        </ListItem>
        <ListItem>
          <Card2>
            <Name>Лохан</Name>
            <Card2Content />
            <CardLink href={`#${SectionId.contacts}`}>
              ЗАМОВИТИ | ₴10'000
            </CardLink>
          </Card2>
        </ListItem>
        <ListItem>
          <Card3>
            <Name>Кемпбел</Name>
            <Card3Content />
            <CardLink href={`#${SectionId.contacts}`}>
              ЗАМОВИТИ | ₴10'000
            </CardLink>
          </Card3>
        </ListItem>
        <ListItem>
          <Card4>
            <Name>Мейзі</Name>
            <Card4Content />
            <CardLink href={`#${SectionId.contacts}`}>
              ЗАМОВИТИ | ₴10'000
            </CardLink>
          </Card4>
        </ListItem>
      </List>
    </Section>
  );
};

export default BottlesSection;
