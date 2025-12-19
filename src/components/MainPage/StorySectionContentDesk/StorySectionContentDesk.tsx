import { FC, MouseEvent, useState } from 'react';
import book from '@/images/story/book.webp';
import card1 from '@/images/story/card-1.webp';
import card2 from '@/images/story/card-2.webp';
import lines1 from '@/images/story/lines-1.webp';
import lines2 from '@/images/story/lines-2.webp';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import background from '@/images/story/bg.webp';
import napkin from '@/images/story/napkin.webp';
import napkin2 from '@/images/story/napkin-2.webp';
import napkin3 from '@/images/story/napkin-3.webp';
import napkin4 from '@/images/story/napkin-4.webp';
import {
  Card1Container,
  Background,
  Book,
  BookWrap,
  Card1,
  Card1Date,
  Card1Text,
  Card1TextAlt,
  Card1TextWrap,
  Card1Title,
  Card2,
  Card2Container,
  Card3Container,
  Container,
  Content,
  Controls,
  Lines1,
  Lines2,
  Napkin,
  SliderBtn,
  Card2TextWrap,
  Card2TextColumn1,
  Card2TextColumn2,
  Card2Text1,
  Card2Photo,
  Card2TextContainer,
  Card2Text1Accent,
  Accent1,
  Card2Text2Wrap,
  Card2Text2,
  Accent2,
  Accent3,
  Spirit,
  Card2Title,
  Card2TitleWrap,
  Card2TextContainer2,
  Card2Text1Wrap,
  Card2Text3,
  Candies,
  Accent4,
  Accent5,
  Card2Text4,
  Card2Text4Alt,
  Card2Text4Wrap,
  Card3TextWrap,
  Card3TextColumn1,
  Card3TextContainer,
  Card3Text1,
  Card3Photo,
  Card3Text2Accent,
  Card3Text2,
  Card3TextColumn2,
  Card3Text3Container,
  Card3Text3,
  Card4Photo,
  Card4TextWrap,
  Card4TextColumn1,
  Card4Container,
  Card4TextContainer,
  Card4Text1,
  Card4Photo1,
  Card4Text2,
  Card4TextColumn2,
  Card4TextContainer2,
  Card4Photo2,
  Card4Text3,
  Accent6,
  Card4Text3Wrap,
  Card5TextWrap,
  Card5TextColumn1,
  Card5TextContainer,
  Card5Text1,
  Card5Container,
  Card5Text2,
  Card5Photo1,
  Card5TextColumn2,
  Card5TextContainer2,
  Card5Photo2,
  Card5Text4,
  Card5Text4Wrap,
  Accent8,
  Accent7,
  Card5Text2Wrap,
} from './StorySectionContentDesk.styled';
import card2Photo from '@/images/story/card-2-photo.webp';
import spirit from '@/images/story/spirit.webp';
import candies from '@/images/story/candies.webp';
import accent1 from '@/images/story/accent-1.webp';
import accent2 from '@/images/story/accent-2.webp';
import accent3 from '@/images/story/accent-3.webp';
import accent4 from '@/images/story/accent-4.webp';
import accent5 from '@/images/story/accent-5.webp';
import accent6 from '@/images/story/accent-6.webp';
import accent7 from '@/images/story/accent-7.webp';
import accent8 from '@/images/story/accent-8.webp';
import card3Photo from '@/images/story/card-3-photo.webp';
import card4Photo from '@/images/story/card-4-photo.webp';
import card4Photo1 from '@/images/story/card-4-photo-1.webp';
import card4Photo2 from '@/images/story/card-4-photo-2.webp';
import card5Photo1 from '@/images/story/card-5-photo-1.webp';
import card5Photo2 from '@/images/story/card-5-photo-2.webp';

const Card1Component: FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Card1Container isActive={isActive}>
      <Card1TextWrap>
        <Card1Title>vagabound</Card1Title>
        <Card1Date>11/24/25’</Card1Date>
        <Card1 src={card1} alt='' />
        <Card2 src={card2} alt='' />
        <Card1Text>
          {'      '}
          Це клуб ексцентричних дослідників, які шукають відповіді там, де наука
          боїться навіть поставити питання.
          <br />
          {'      '}У доробку Vagabound — експерименти, про які мовчать
          підручники:
          <br />
          {'      '}Чи можливо одомашнити блискавку? Як смакуватиме вечеря, якій
          кухар шепотів компліменти? Скільки треба кричати в мушлю, щоб записати
          крик? Що, якщо об’єднати скелелазіння і шибарі?
        </Card1Text>
        <Card1TextAlt>
          {'      '}Усі дослідження Vagabound були під грифом «Цілком таємно».
          Аж до сьогодні. Бо для наступного експерименту необхідні свідки, які
          впливають на результат.
          <br />
          {'      '}Ми переконані: віскі настоюється не лише в деревині, а й у
          звуках, світлі та часі — у вібраціях і ритмах. Ця пригода — доказ
          того, що світ трохи дивніший, ніж здається, і набагато цікавіший, ніж
          ми звикли думати.
        </Card1TextAlt>
        <Lines1 src={lines1} alt='' />
        <Lines2 src={lines2} alt='' />
      </Card1TextWrap>
    </Card1Container>
  );
};

const Card2Component: FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Card2Container isActive={isActive}>
      <Card2TextWrap>
        <Card2TextColumn1>
          <Card2TextContainer>
            <Card2Text1>
              Ми віримо: ми всі —
              <br />
              Усе, що ми відчуваємо, не зникає безслідно. Воно відкладається в
              нас, змінюючи нашу внутрішню структуру.
            </Card2Text1>
            <Accent1 src={accent1} alt='' />
            <Card2Text1Accent>резонатори</Card2Text1Accent>
            <Card2Photo src={card2Photo} alt='' />
          </Card2TextContainer>
          <Card2Text2Wrap>
            <Accent2 src={accent2} alt='' />
            <Accent3 src={accent3} alt='' />
            <Card2Text2>
              Ритм танців, музична терапія, дубова гімнастика, читання вголос —
              ніщо не проходить повз.
              <br />
              Кожна вібрація занотовується в дубовій пам’яті. Не з кожним віскі
              поводяться так шанобливо, дозволяючи розкрити відмінності та риси
              особистості.
            </Card2Text2>
          </Card2Text2Wrap>
        </Card2TextColumn1>
        <Card2TextColumn2>
          <Card2TextContainer2>
            <Card2TitleWrap>
              <Spirit src={spirit} alt='' />
              <Card2Title>the spirit</Card2Title>
            </Card2TitleWrap>
            <Card2Text1Wrap>
              <Accent4 src={accent4} alt='' />
              <Accent5 src={accent5} alt='' />
              <Card2Text3>
                Ми спостерігаємо, як народжується смак.
                <br />
                Це не уява, а фізичний досвід: світло, звук,
                <br />
                запахи, вібрації, дотик, простір.
                <br />
                Це ланцюгова реакція:
                <br />
                Від відчуттів — до дерева.
                <br />
                Від дерева — до віскі.
                <br />
                Від віскі — до вас.
              </Card2Text3>
              <Candies src={candies} alt='' />
            </Card2Text1Wrap>
          </Card2TextContainer2>
          <Card2Text4Wrap>
            <Card2Text4>
              Згодом цей досвід опиниться у пляшках. І коли ви зробите ковток,
              пам’ятайте:
            </Card2Text4>
            <Card2Text4Alt>
              Усе, до чого ми торкаємось, торкається нас у відповідь.
            </Card2Text4Alt>
          </Card2Text4Wrap>
        </Card2TextColumn2>
      </Card2TextWrap>
    </Card2Container>
  );
};

const Card3Component: FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Card3Container isActive={isActive}>
      <Card3TextWrap>
        <Card3TextColumn1>
          <Card3TextContainer>
            <Card3Text1>Запис №7</Card3Text1>
            <Card3Photo src={card3Photo} alt='' />
          </Card3TextContainer>
          <Card3Text2>
            <Card3Text2Accent>Суб’єкт:</Card3Text2Accent> Лохан
            <br />
            <br />
            <Card3Text2Accent>Експеримент:</Card3Text2Accent> участь у зйомках
            авангардного римейку «Гуллівера»
            <br />
            <br />
            <Card3Text2Accent>Деталі:</Card3Text2Accent> Лохана помістили в
            макет міста ліліпутів. Оскільки інші актори були надто малі, Лохан
            нарешті відчув себе Великою Зіркою. Він грав Гуллівера, який мовчки
            споглядає метушню дрібних людей
          </Card3Text2>
        </Card3TextColumn1>
        <Card3TextColumn2>
          <Card3Text3Container>
            <Card3Text3>
              <Card3Text2Accent>Спостереження:</Card3Text2Accent> деревина
              роздулася від гордості; тиск усередині бочки зріс на 15%
              <br />
              <br />
              <Card3Text2Accent>Вплив на смак:</Card3Text2Accent> у віскі
              з’явилися нотки величі та ледь помітний присмак зіркової хвороби
            </Card3Text3>
            <Card4Photo src={card4Photo} alt='' />
          </Card3Text3Container>
        </Card3TextColumn2>
      </Card3TextWrap>
    </Card3Container>
  );
};

const Card4Component: FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Card4Container isActive={isActive}>
      <Card4TextWrap>
        <Card4TextColumn1>
          <Card4TextContainer>
            <Card4Text1>Запис №14</Card4Text1>
            <Card4Photo1 src={card4Photo1} alt='' />
          </Card4TextContainer>
          <Card4Text2>
            <Card3Text2Accent>Експеримент:</Card3Text2Accent> сеанс вінілової
            терапії
            <br />
            <br />
            <Card3Text2Accent>Деталі:</Card3Text2Accent> з програвача 24 години
            лунав джаз 30-х років із характерним потріскуванням голки
          </Card4Text2>
        </Card4TextColumn1>
        <Card4TextColumn2>
          <Card4TextContainer2>
            <Card4Photo2 src={card4Photo2} alt='' />
          </Card4TextContainer2>
          <Card4Text3Wrap>
            <Accent6 src={accent6} alt='' />
            <Card4Text3>
              <Card3Text2Accent>Спостереження:</Card3Text2Accent> Мейзі
              занурилася в стан глибокої ностальгії
              <br />
              <br />
              <Card3Text2Accent>Вплив на смак:</Card3Text2Accent> напій набув
              «теплого лампового» характеру; дегустатори відзначають, що після
              ковтка хочеться вдягнути твідовий піджак...
            </Card4Text3>
          </Card4Text3Wrap>
        </Card4TextColumn2>
      </Card4TextWrap>
    </Card4Container>
  );
};

const Card5Component: FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <Card5Container isActive={isActive}>
      <Card5TextWrap>
        <Card5TextColumn1>
          <Card5TextContainer>
            <Card5Text1>Запис №42</Card5Text1>
            <Card5Text2Wrap>
              <Card5Text2>
                <Card3Text2Accent>Суб’єкт:</Card3Text2Accent> Рорі
                <br />
                <br />
                <Card3Text2Accent>Експеримент:</Card3Text2Accent> аудіосимуляція
                трансівьафбьфіватьного експресу
                <br />
                <Card3Text2Accent>Деталі:</Card3Text2Accent> для Рорі увімкнули
                зациклений запис: «чух-чух… чух-чух…» та звук перонного дзвона
              </Card5Text2>
              <Accent7 src={accent7} alt='' />
            </Card5Text2Wrap>
          </Card5TextContainer>
          <Card5Photo1 src={card5Photo1} alt='' />
        </Card5TextColumn1>
        <Card5TextColumn2>
          <Card5TextContainer2>
            <Card5Photo2 src={card5Photo2} alt='' />
            <Card5Text4Wrap>
              <Accent8 src={accent8} alt='' />
              <Card5Text4>
                <Card3Text2Accent>Спостереження:</Card3Text2Accent> уперше за
                весь час експерименту Рорі заспокоївся. Він увійшов у
                медитативний транс, ритмічно погойдуючись (або це нам здалося)
                <br />
                <br />
                <Card3Text2Accent>Вплив на смак:</Card3Text2Accent> смак став
                стрімким і прямим, мов рельси; з’явився довгий фініш, що нагадує
                нескінченну дорогу додому...
              </Card5Text4>
            </Card5Text4Wrap>
          </Card5TextContainer2>
        </Card5TextColumn2>
      </Card5TextWrap>
    </Card5Container>
  );
};

const StorySectionContentDesk: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const incrementActiveIndex = () => {
    setActiveIndex((prevState) => prevState + 1);
  };

  const decrementActiveIndex = () => {
    setActiveIndex((prevState) => prevState - 1);
  };

  const onNextSlideBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    incrementActiveIndex();
  };

  const onPrevSlideBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.blur();

    decrementActiveIndex();
  };

  const isFirstIndex = activeIndex === 0;
  const isLastIndex = activeIndex === 4;

  return (
    <Container>
      <Background src={background} alt='Фон' />

      <Content>
        <BookWrap>
          <Napkin
            src={napkin}
            alt='Папірець'
            isActive={isFirstIndex || activeIndex === 1}
          />
          <Napkin src={napkin2} alt='Папірець' isActive={activeIndex === 2} />
          <Napkin src={napkin3} alt='Папірець' isActive={activeIndex === 3} />
          <Napkin src={napkin4} alt='Папірець' isActive={isLastIndex} />

          <Book src={book} alt='Книга' />

          <Card1Component isActive={activeIndex === 0} />
          <Card2Component isActive={activeIndex === 1} />
          <Card3Component isActive={activeIndex === 2} />
          <Card4Component isActive={activeIndex === 3} />
          <Card5Component isActive={activeIndex === 4} />
        </BookWrap>

        <Controls>
          <SliderBtn
            type='button'
            onClick={onPrevSlideBtnClick}
            disabled={isFirstIndex}
          >
            <IoIosArrowRoundBack size={28} />
          </SliderBtn>
          <SliderBtn
            type='button'
            onClick={onNextSlideBtnClick}
            disabled={isLastIndex}
          >
            <IoIosArrowRoundForward size={28} />
          </SliderBtn>
        </Controls>
      </Content>
    </Container>
  );
};

export default StorySectionContentDesk;
