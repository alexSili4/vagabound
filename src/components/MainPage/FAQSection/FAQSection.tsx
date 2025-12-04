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
  // Accent,
  AnswerText2,
  // Paper,
} from './FAQSection.styled';
import { IoIosArrowRoundDown } from 'react-icons/io';
// import accent from '@/images/faq/accent.webp';
// import paper from '@/images/faq/paper.webp';
import { SectionId } from '@/constants';

const Question1: FC = () => {
  const { elementRef, elementScrollHeight, isShowElement, onQuestionBtnClick } =
    useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onQuestionBtnClick}>
        <Position>01</Position>
        <QuestionBtnLabel>Хто ви?</QuestionBtnLabel>
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
          <AnswerText>
            Капітан Себастьян Перейра, торговець чорним деревом.
            <br />
            <br />
            Ні, насправді ні — ми новий віскі-ботлер, який поставив під сумнів
            тезу «віскі любить тишу». Як ті добрі люди, що, дізнавшись про те,
            що поросята, через свою анатомію, не можуть самостійно задерти
            голову, щоб подивитись на сонце, і почали спеціально підіймати їх,
            щоб показати блакить неба, так і ми, замислившись над тим, що бочки
            віскі ведуть плідне, але нудне життя на складі, вирішили його
            урізноманітнити й додати більше барв і почуттів.
            <br />
            <br />
            Наша перша Дія (ми любимо театр і театральну лексику) має чотири
            дійові особи:
            <br />
            <br />
            {'    '}• Knockdhu 18 років aka Мейзі Нок
            <br />
            <br />
            {'    '}• Breival 15 років aka Лохан Чепелтон
            <br />
            <br />
            {'    '}• Williamson 13 років aka Містер Кемпбелл
            <br />
            <br />
            {'    '}• та Balblair 13 років aka Рорі Едртон
            <br />
            <br />
            Вони житимуть найплідніше життя з тих, що фізично можуть мати бочки
            з віскі аж до тих пір, поки ми їх не розіллєм по пляшках у 2026
            році.
          </AnswerText>
        </Answer>
      </AnswerWrap>
      {/* <Accent src={accent} alt='Акцент' isShowElement={isShowElement} /> */}
    </Question>
  );
};

const Question2: FC = () => {
  const { elementRef, elementScrollHeight, isShowElement, onQuestionBtnClick } =
    useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onQuestionBtnClick}>
        <Position>02</Position>
        <QuestionBtnLabel>Це можна буде купити?</QuestionBtnLabel>
        <IconWrap isShowElement={isShowElement}>
          <IoIosArrowRoundDown size={28} />
        </IconWrap>
      </QuestionBtn>

      {/* <Paper src={paper} alt='Папірець' isShowElement={isShowElement} /> */}
      <AnswerWrap
        ref={elementRef}
        scrollHeight={elementScrollHeight}
        isShowElement={isShowElement}
      >
        <Answer>
          <AnswerText2>
            Так. В нашому плані, десь там, за два шари нижче, після розваг і
            експериментів, йде комерційний шар. Результатом цього проєкту
            стануть справжнісінькі пляшки високоякісного односолодового
            шотландського віскі. На відміну від наших бочок, вони навряд чи
            розмовлятимуть з вами (хоча…), а ось те, що це будуть вишукані
            однобочкові віскі суперпреміального сегмента — це ми гарантуємо.
            <br />
            <br />
            Ціни для підписників на цьому сайті будуть кращими за ті, що пізніше
            з’являться в крамницях. Так, це натяк. Підписуйтесь.{' '}
          </AnswerText2>
        </Answer>
      </AnswerWrap>
    </Question>
  );
};

const Question3: FC = () => {
  const { elementRef, elementScrollHeight, isShowElement, onQuestionBtnClick } =
    useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onQuestionBtnClick}>
        <Position>03</Position>
        <QuestionBtnLabel>
          Звідки я дізнаюсь, що все те, що ви робили з бочками, вплинуло на смак
          віскі?
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
          <AnswerText>
            Дуже просто: якщо віскі вийшло смачне, значить в нас все вийшло.
            «Але, можливо, віскі було б смачне й без усього цього», — скажете
            ви. Можливо. А може ні.
            <br />
            <br />
            Ми вирішили, що наступного разу (о, так, це тільки початок!), будемо
            робити подвійні релізи з кожної бочки — версію «без уцього всього»
            та версію «з оцим усим». І тоді ви зможете точно визначити наскільки
            наші бочкові програми «Стань краще» та «Наступний рівень» впливають
            на смак віскі.
            <br />
            <br />
            Всі б’юті-процедури та процедури з поліпшення внутрішнього світу
            бочок — будь-то розгойдування бочки на спеціальному кріслі чи
            слухання музики з низкими частотами під самою колонкою будуть
            фіксуватися (скільки разів в день, тривалість). Так це гра, але ми
            граємо в неї серйозно.
          </AnswerText>
        </Answer>
      </AnswerWrap>
    </Question>
  );
};

const Question4: FC = () => {
  const { elementRef, elementScrollHeight, isShowElement, onQuestionBtnClick } =
    useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onQuestionBtnClick}>
        <Position>04</Position>
        <QuestionBtnLabel>
          Ви ж в курсі, що насправді бочки — не живі істоти й вони не
          розмовляють?
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
          <AnswerText>
            Скажіть Орхану Памуку, що червоний колір в його романі «Мене
            називають Червоний» не може насправді розмовляти. Або Гоголю, що ніс
            не може окремо від людини роз’їзжати в кареті. Хоча ні, Гоголю ви це
            не скажете — він же ж помер.
            <br />
            <br />
            Окей, якщо сарказм не подіяв, то ось вам серйозна відповідь: ми
            наділили бочки людськими іменами та характерами, щоб була очевидніша
            різниця між ними, їхніми світоглядами та між іхніми діями (нашими
            діями по відношенню до них, якщо насправді). Димне айлівське віскі
            геть не схоже на пряно-фруктове віскі північного Хайленду, ви ж не
            будете з цим сперечатися? Ми додали трохи театру, бо так веселіше, а
            іноді навіть простіше пояснювати деякі речі.
          </AnswerText>
        </Answer>
      </AnswerWrap>
    </Question>
  );
};

const Question5: FC = () => {
  const { elementRef, elementScrollHeight, isShowElement, onQuestionBtnClick } =
    useAccordionElement();

  return (
    <Question>
      <QuestionBtn onClick={onQuestionBtnClick}>
        <Position>05</Position>
        <QuestionBtnLabel>Чи можна купити саму бочку?</QuestionBtnLabel>
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
          <AnswerText>
            Взагалі-то ми хотіли написати «ні», бо планували після бутилювання
            віскі віддати бочки броварні Beermaster для витримки в них стаутів
            та барлівайнів.
            <br />
            <br />А потім подумали: «Послухаємо-но пропозицію по ціні, а там
            хтозна». Якщо не домовимось — Beermaster буде щасливий отримати
            свіжі духмяні бочки з-під повнолітніх односолодових віскі.
          </AnswerText>
        </Answer>
      </AnswerWrap>
    </Question>
  );
};

const FAQSection: FC = () => {
  return (
    <Section id={SectionId.faq}>
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
          <ListItem>
            <Question5 />
          </ListItem>
        </List>
      </Container>
    </Section>
  );
};

export default FAQSection;
