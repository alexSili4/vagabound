import { FC, MouseEvent, useState } from 'react';
import background from '@/images/story/bg.webp';
import napkin from '@/images/story/napkin.webp';
import napkin2 from '@/images/story/napkin-2.webp';
import napkin3 from '@/images/story/napkin-3.webp';
import {
  Section,
  Title,
  Background,
  Container,
  Napkin,
  Card1Container,
  Content,
  Book,
  BookWrap,
  Card1,
  Card2,
  Card1Text,
  Card1TextContainer,
  Card1Logo,
  Card1TextWrap,
  Card1Title,
  Card1TitleWrap,
  Controls,
  SliderBtn,
  Card2Container,
  Card3,
  Card4,
  Card2Text,
  Card2Title,
  Card2Desc,
  Card3Container,
  Card5,
  Card6,
  Card3Text,
  Card4Text,
  Card5Text,
  Signature,
} from './StorySection.styled';
import book from '@/images/story/book.webp';
import card1 from '@/images/story/card-1.webp';
import card2 from '@/images/story/card-2.webp';
import card3 from '@/images/story/card-3.webp';
import card4 from '@/images/story/card-4.webp';
import card5 from '@/images/story/card-5.webp';
import card6 from '@/images/story/card-6.webp';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';

const StorySection: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const incrementActiveIndex = () => {
    if (activeIndex === 2) {
      return;
    }

    setActiveIndex((prevState) => prevState + 1);
  };

  const decrementActiveIndex = () => {
    if (activeIndex === 0) {
      return;
    }

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

  return (
    <Section>
      <Title>Історія</Title>
      <Container>
        <Background src={background} alt='Фон' />

        <Content>
          <BookWrap>
            <Napkin src={napkin} alt='Папірець' isActive={activeIndex === 0} />
            <Napkin src={napkin2} alt='Папірець' isActive={activeIndex === 1} />
            <Napkin src={napkin3} alt='Папірець' isActive={activeIndex === 2} />

            <Book src={book} alt='Книга' />

            <Card1Container
              isActive={activeIndex === 0}
              data-header-theme='light'
            >
              <Card1 src={card1} alt='Фото' />
              <Card2 src={card2} alt='Фото' />

              <Card1TextContainer>
                <Card1TitleWrap>
                  <Card1Logo />
                  <Card1Title>the spirit worth chasing / filling</Card1Title>
                </Card1TitleWrap>

                <Card1TextWrap>
                  <Card1Text>
                    Vagabound — це клуб ексцентричних дослідників, які шукають
                    відповіді там, де наука боїться навіть поставити питання. У
                    доробку Vagabound — експерименти, про які мовчать
                    підручники: Чи можливо одомашнити блискавку? Як смакуватиме
                    вечеря, якій кухар шепотів компліменти? Скільки треба
                    кричати в мушлю, щоб записати крик? Що, якщо об’єднати
                    скелелазіння і шибарі?
                  </Card1Text>
                  <Card1Text>
                    Що буде, якщо говорити перед дзеркалом задом наперед? Усі
                    дослідження Vagabound були під грифом «Цілком таємно». Аж до
                    сьогодні. Бо для наступного експерименту необхідні свідки,
                    які впливають на результат. Ми переконані: віскі настоюється
                    не лише в деревині, а й у звуках, світлі та часі — у
                    вібраціях і ритмах. Ця пригода — доказ того, що світ трохи
                    дивніший, ніж здається, і набагато цікавіший, ніж ми звикли
                    думати.
                  </Card1Text>
                </Card1TextWrap>
              </Card1TextContainer>
            </Card1Container>

            <Card2Container
              isActive={activeIndex === 1}
              data-header-theme='light'
            >
              <Card3 src={card3} alt='Фото' />
              <Card4 src={card4} alt='Фото' />
              <Card2Text>
                Все починається тут. Ми віримо: ми всі — резонатори. Усе, що ми
                відчуваємо, не зникає безслідно. Воно відкладається в нас,
                змінюючи нашу внутрішню структуру. Ритм танців, музична терапія,
                дубова гімнастика, читання вголос — ніщо не проходить повз.
                Кожна вібрація занотовується в дубовій пам’яті. Не з кожним
                віскі поводяться так шанобливо, дозволяючи розкрити відмінності
                та риси особистості. Ми спостерігаємо, як народжується смак. Це
                не уява, а фізичний досвід: світло, звук, запахи, вібрації,
                дотик, простір. Це ланцюгова реакція: Від відчуттів — до дерева.
                Від дерева — до віскі.
                <br />
                Від віскі — до вас. Згодом цей
                <br />
                досвід опиниться у пляшках.
                <br />І коли ви зробите ковток,
                <br />
                пам’ятайте: Усе, до чого ми
                <br />
                торкаємось, торкається
                <br />
                нас у відповідь.
              </Card2Text>

              <Card2Title>Бортовий Журнал</Card2Title>

              <Card2Desc>
                Суб’єкт: Лохан
                <br />
                Експеримент: участь у зйомках авангардного римейку «Гуллівера».
                Деталі: Лохана помістили в макет міста ліліпутів. Оскільки інші
                актори були надто малі, Лохан нарешті відчув себе Великою
                Зіркою. Він грав Гуллівера, який мовчки споглядає метушню
                дрібних людей. Спостереження: деревина роздулася від гордості;
                тиск усередині бочки зріс на 15%. Вплив на смак: у віскі
                з’явилися нотки величі та ледь помітний присмак зіркової
                хвороби.
              </Card2Desc>
            </Card2Container>

            <Card3Container
              isActive={activeIndex === 2}
              data-header-theme='light'
            >
              <Card5 src={card5} alt='Фото' />
              <Card6 src={card6} alt='Фото' />
              <Card3Text>
                Експеримент: сеанс вінілової терапії.
                <br />
                Деталі: з програвача 24 години лунав джаз 30-х років із
                характерним потріскуванням голки. Спостереження: Мейзі
                занурилася в стан глибокої ностальгії.
              </Card3Text>

              <Card4Text>
                Вплив на смак: напій набув «теплого лампового» характеру;
                дегустатори відзначають, що після ковтка хочеться вдягнути
                твідовий піджак.
              </Card4Text>

              <Card5Text>
                Суб’єкт: Рорі Експеримент: аудіосимуляція трансконтинентального
                експресу. Деталі: для Рорі увімкнули зациклений запис: «чух-чух…
                чух-чух…» та звук перонного дзвона. Спостереження: уперше за
                весь час експерименту Рорі заспокоївся. Він увійшов у
                медитативний транс, ритмічно погойдуючись (або це нам здалося).
                Вплив на смак: смак став стрімким і прямим, мов рельси; з’явився
                довгий фініш, що нагадує нескінченну дорогу додому.
              </Card5Text>

              <Signature>підпис</Signature>
            </Card3Container>
          </BookWrap>

          <Controls>
            <SliderBtn type='button' onClick={onPrevSlideBtnClick}>
              <IoIosArrowRoundBack size={28} />
            </SliderBtn>
            <SliderBtn type='button' onClick={onNextSlideBtnClick}>
              <IoIosArrowRoundForward size={28} />
            </SliderBtn>
          </Controls>
        </Content>
      </Container>
    </Section>
  );
};

export default StorySection;
