import { useAccordionElement } from '@/hooks';
import { FC } from 'react';
import {
  Section,
  Container,
  Desc,
  List,
  ListItem,
  Title,
  TitleWrap,
  Answer,
  AnswerText,
  AnswerWrap,
  IconWrap,
  Position,
  Question,
  QuestionBtn,
  QuestionBtnLabel,
  Line,
  Accent,
  AnswerText2,
  Paper,
} from './FAQSection.styled';
import { IoIosArrowRoundDown } from 'react-icons/io';
import accent from '@/images/faq/accent.webp';
import paper from '@/images/faq/paper.webp';

const Question1: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onAccordionBtnClick}>
        <Position>01</Position>
        <QuestionBtnLabel>Чому так довго?</QuestionBtnLabel>
        <IconWrap isShowElement={isShowElement}>
          <IoIosArrowRoundDown size={28} />
        </IconWrap>
      </QuestionBtn>

      <AnswerWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Answer>
          <AnswerText>Бо бочка катається по всій Шотландії.</AnswerText>
        </Answer>
      </AnswerWrap>
      <Accent src={accent} alt='' isShowElement={isShowElement} />
    </Question>
  );
};

const Question2: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onAccordionBtnClick}>
        <Position>02</Position>
        <QuestionBtnLabel>Чи можна купити саму бочку?</QuestionBtnLabel>
        <IconWrap isShowElement={isShowElement}>
          <IoIosArrowRoundDown size={28} />
        </IconWrap>
      </QuestionBtn>

      <Paper src={paper} alt='' isShowElement={isShowElement} />
      <AnswerWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Answer>
          <AnswerText2>Можливо.</AnswerText2>
        </Answer>
      </AnswerWrap>
    </Question>
  );
};

const Question3: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onAccordionBtnClick}>
        <Position>03</Position>
        <QuestionBtnLabel>
          Звідки мені знати, чи це дійсно вплинуло на смак?
        </QuestionBtnLabel>
        <IconWrap isShowElement={isShowElement}>
          <IoIosArrowRoundDown size={28} />
        </IconWrap>
      </QuestionBtn>

      <AnswerWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Answer>
          <AnswerText>Відповідь</AnswerText>
        </Answer>
      </AnswerWrap>
    </Question>
  );
};

const Question4: FC = () => {
  const {
    elementRef,
    elementScrollHeight,
    isShowElement,
    onAccordionBtnClick,
  } = useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onAccordionBtnClick}>
        <Position>04</Position>
        <QuestionBtnLabel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit?
        </QuestionBtnLabel>
        <IconWrap isShowElement={isShowElement}>
          <IoIosArrowRoundDown size={28} />
        </IconWrap>
      </QuestionBtn>

      <AnswerWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Answer>
          <AnswerText>Відповідь</AnswerText>
        </Answer>
      </AnswerWrap>
    </Question>
  );
};

const FAQSection: FC = () => {
  return (
    <Section>
      <Container>
        <TitleWrap>
          <Line />
          <Title>блок нечастих питань</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </Desc>
        </TitleWrap>

        <List>
          <ListItem>
            <Question1 />
          </ListItem>
          <ListItem>
            <Question2 />
          </ListItem>
          <ListItem>
            <Question3 />
          </ListItem>
          <ListItem>
            <Question4 />
          </ListItem>
        </List>
      </Container>
    </Section>
  );
};

export default FAQSection;
