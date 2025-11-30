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
} from './BottlesSection.styled';
import bottle1 from '@/images/bottles/bottle-1.webp';
import bottle2 from '@/images/bottles/bottle-2.webp';
import bottle3 from '@/images/bottles/bottle-3.webp';
import bottle4 from '@/images/bottles/bottle-4.webp';
import { useAccordionElement } from '@/hooks';
import { LuChevronUp } from 'react-icons/lu';

const Card1Characteristics: FC = () => {
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
          Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask (квотеркаск, в
          якому витримували неназване віскі з Айли, потім витримували обкурене
          віскі Holyrood, а потім витримували в ньому наше віскі)
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
          Аромат: Феноли Laphroaig у всій своїй красі та гармонії. Смак: Потужні
          торф’яні ноти — саме те, чого очікуєш від легендарної гуральні Айли.
          Посмак: Дим й льодяники від кашлю
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
          Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask (квотеркаск, в
          якому витримували неназване віскі з Айли, потім витримували обкурене
          віскі Holyrood, а потім витримували в ньому наше віскі)
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
          Аромат: Феноли Laphroaig у всій своїй красі та гармонії. Смак: Потужні
          торф’яні ноти — саме те, чого очікуєш від легендарної гуральні Айли.
          Посмак: Дим й льодяники від кашлю
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
          Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask (квотеркаск, в
          якому витримували неназване віскі з Айли, потім витримували обкурене
          віскі Holyrood, а потім витримували в ньому наше віскі)
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
          Аромат: Феноли Laphroaig у всій своїй красі та гармонії. Смак: Потужні
          торф’яні ноти — саме те, чого очікуєш від легендарної гуральні Айли.
          Посмак: Дим й льодяники від кашлю
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
          Ex-Holyrood Peated #1603 Ex Islay Peated Quarter Cask (квотеркаск, в
          якому витримували неназване віскі з Айли, потім витримували обкурене
          віскі Holyrood, а потім витримували в ньому наше віскі)
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
          Аромат: Феноли Laphroaig у всій своїй красі та гармонії. Смак: Потужні
          торф’яні ноти — саме те, чого очікуєш від легендарної гуральні Айли.
          Посмак: Дим й льодяники від кашлю
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
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card1>
        </ListItem>
        <ListItem>
          <Card2>
            <Name>Лохан</Name>
            <Card2Content />
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card2>
        </ListItem>
        <ListItem>
          <Card3>
            <Name>Кемпбел</Name>
            <Card3Content />
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card3>
        </ListItem>
        <ListItem>
          <Card4>
            <Name>Мейзі</Name>
            <Card4Content />
            <CardLink href='/'>ЗАМОВИТИ | ₴10'000</CardLink>
          </Card4>
        </ListItem>
      </List>
    </Section>
  );
};

export default BottlesSection;
