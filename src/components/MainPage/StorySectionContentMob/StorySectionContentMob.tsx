import { FC, useCallback, useEffect, useState } from 'react';
import {
  Book,
  Container,
  Content,
  Slider,
  SlidesWrap,
  Slide,
  SliderControls,
  NavButton,
  DotsContainer,
  Dot,
  Slide1Container,
  Slide1TitleWrap,
  Slide2Container,
  Napkin1,
  Napkin2,
  Napkin3,
  Card1Date,
  Card1Text,
  Card1Title,
  Card1,
  Lines1,
  Lines2,
  Card2,
  Card1TextAlt,
  Slide3Container,
  Card3Content,
  Card3TextWrap,
  Card3Text,
  Card3TextAccentWrap,
  Card3TextAccent,
  Accent1,
  Card3Photo,
  Card3Text2Wrap,
  Accent2,
  Card3Text2,
  Accent3,
  Slide4Container,
  Card4Content,
  Card4TextWrap,
  Card4Text,
  Card4TitleWrap,
  Spirit,
  Card4Title,
  Accent4,
  Accent5,
  Candies,
  Card4Text2Wrap,
  Card4Text2,
  Card4Desc,
  Slide5Container,
  Card5TitleWrap,
  Card5Title,
  Slide5Photo,
  Card5Text,
  TextAccent,
  Card6Text,
  Slide6Photo,
  Slide6Container,
  Slide7Container,
  Card7TitleWrap,
  Card7Title,
  Slide7Photo,
  Card7Text,
  Slide8Container,
  Card8Text,
  Slide8Photo,
  Card5TextWrap,
  Card7TextWrap,
  Card8TextWrap,
  Slide9Container,
  Slide9PhotoWrap,
  Card9TitleWrap,
  Card9Title,
  Card9Text,
  Slide9Photo,
  Accent6,
  Card9TextWrap,
  Accent7,
  Slide10Container,
  Card10TextWrap,
  Accent8,
  Card10Text,
  Slide10Photo,
} from './StorySectionContentMob.styled';
import book from '@/images/story/book-mob.webp';
import useEmblaCarousel, { EmblaViewportRefType } from 'embla-carousel-react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import Fade from 'embla-carousel-fade';
import napkin from '@/images/story/napkin-mob.webp';
import napkin2 from '@/images/story/napkin-2-mob.webp';
import napkin3 from '@/images/story/napkin-3-mob.webp';
import card1 from '@/images/story/card-1.webp';
import lines1 from '@/images/story/lines-1.webp';
import lines2 from '@/images/story/lines-2.webp';
import card2 from '@/images/story/card-2.webp';
import accent1 from '@/images/story/accent-1.webp';
import accent2 from '@/images/story/accent-2.webp';
import accent3 from '@/images/story/accent-3.webp';
import accent4 from '@/images/story/accent-4.webp';
import accent5 from '@/images/story/accent-5.webp';
import accent6 from '@/images/story/accent-6.webp';
import accent7 from '@/images/story/accent-7.webp';
import accent8 from '@/images/story/accent-8.webp';
import card2Photo from '@/images/story/card-2-photo.webp';
import card3Photo from '@/images/story/card-3-photo.webp';
import card4Photo from '@/images/story/card-4-photo.webp';
import card4Photo1 from '@/images/story/card-4-photo-1.webp';
import card4Photo2 from '@/images/story/card-4-photo-2-mob.webp';
import card5Photo1 from '@/images/story/card-5-photo-1.webp';
import card5Photo2 from '@/images/story/card-5-photo-2.webp';
import spirit from '@/images/story/spirit.webp';
import candies from '@/images/story/candies.webp';

interface IStorySliderProps {
  emblaRef: EmblaViewportRefType;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
}

const Slide1: FC = () => {
  return (
    <Slide1Container>
      <Slide1TitleWrap>
        <Card1Title>vagabound</Card1Title>
        <Card1Date>11/24/25’</Card1Date>
      </Slide1TitleWrap>

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

      <Lines1 src={lines1} alt='' />
      <Lines2 src={lines2} alt='' />

      <Card1 src={card1} alt='' />
    </Slide1Container>
  );
};

const Slide2: FC = () => {
  return (
    <Slide2Container>
      <Card1TextAlt>
        {'      '}Усі дослідження Vagabound були під грифом «Цілком таємно». Аж
        до сьогодні. Бо для наступного експерименту необхідні свідки, які
        впливають на результат.
        <br />
        {'      '}Ми переконані: віскі настоюється не лише в деревині, а й у
        звуках, світлі та часі — у вібраціях і ритмах. Ця пригода — доказ того,
        що світ трохи дивніший, ніж здається, і набагато цікавіший, ніж ми
        звикли думати.
      </Card1TextAlt>
      <Card2 src={card2} alt='' />
    </Slide2Container>
  );
};

const Slide3: FC = () => {
  return (
    <Slide3Container>
      <Card3Content>
        <Card3TextWrap>
          <Card3Text>
            Ми віримо: ми всі —
            <br />
            Усе, що ми відчуваємо, не зникає безслідно. Воно відкладається в
            нас, змінюючи нашу внутрішню структуру.
          </Card3Text>
          <Card3TextAccentWrap>
            <Accent1 src={accent1} alt='' />
            <Card3TextAccent>резонатори</Card3TextAccent>
          </Card3TextAccentWrap>
        </Card3TextWrap>
        <Card3Photo src={card2Photo} alt='' />
      </Card3Content>
      <Card3Text2Wrap>
        <Accent2 src={accent2} alt='' />
        <Accent3 src={accent3} alt='' />
        <Card3Text2>
          Ритм танців, музична терапія, дубова гімнастика, читання вголос — ніщо
          не проходить повз.
          <br />
          Кожна вібрація занотовується в дубовій пам’яті. Не з кожним віскі
          поводяться так шанобливо, дозволяючи розкрити відмінності та риси
          особистості.
        </Card3Text2>
      </Card3Text2Wrap>
    </Slide3Container>
  );
};

const Slide4: FC = () => {
  return (
    <Slide4Container>
      <Card4Content>
        <Card4TitleWrap>
          <Spirit src={spirit} alt='' />
          <Card4Title>the spirit</Card4Title>
        </Card4TitleWrap>

        <Card4TextWrap>
          <Accent4 src={accent4} alt='' />
          <Accent5 src={accent5} alt='' />
          <Card4Text>
            Ми спостерігаємо, як народжується смак. Це не уява, а фізичний
            досвід: світло, звук, запахи, вібрації, дотик, простір.
            <br />
            Це ланцюгова реакція:
            <br />
            Від відчуттів — до дерева.
            <br />
            Від дерева — до віскі.
            <br />
            Від віскі — до вас.
          </Card4Text>
          <Candies src={candies} alt='' />
        </Card4TextWrap>
      </Card4Content>
      <Card4Text2Wrap>
        <Card4Text2>
          Згодом цей досвід опиниться у пляшках. І коли ви зробите ковток,
          пам’ятайте:
        </Card4Text2>
        <Card4Desc>
          Усе, до чого ми торкаємось, торкається нас у відповідь.
        </Card4Desc>
      </Card4Text2Wrap>
    </Slide4Container>
  );
};

const Slide5: FC = () => {
  return (
    <Slide5Container>
      <Card5TitleWrap>
        <Card5Title>Запис №7</Card5Title>
        <Slide5Photo src={card3Photo} alt='' />
      </Card5TitleWrap>

      <Card5TextWrap>
        <Card5Text>
          <TextAccent>Суб’єкт:</TextAccent> Лохан
          <br />
          <br />
          <TextAccent>Експеримент:</TextAccent> участь у зйомках авангардного
          римейку «Гуллівера»
          <br />
          <br />
          <TextAccent>Деталі:</TextAccent> Лохана помістили в макет міста
          ліліпутів. Оскільки інші актори були надто малі, Лохан нарешті відчув
          себе Великою Зіркою. Він грав Гуллівера, який мовчки споглядає метушню
          дрібних людей
        </Card5Text>
      </Card5TextWrap>
    </Slide5Container>
  );
};

const Slide6: FC = () => {
  return (
    <Slide6Container>
      <Card6Text>
        <TextAccent>Спостереження:</TextAccent> деревина роздулася від гордості;
        тиск усередині бочки зріс на 15%
        <br />
        <br />
        <TextAccent>Вплив на смак:</TextAccent> у віскі з’явилися нотки величі
        та ледь помітний присмак зіркової хвороби
      </Card6Text>

      <Slide6Photo src={card4Photo} alt='' />
    </Slide6Container>
  );
};

const Slide7: FC = () => {
  return (
    <Slide7Container>
      <Card7TitleWrap>
        <Card7Title>Запис №14</Card7Title>
        <Slide7Photo src={card4Photo1} alt='' />
      </Card7TitleWrap>

      <Card7TextWrap>
        <Card7Text>
          <TextAccent>Експеримент:</TextAccent> сеанс вінілової терапії
          <br />
          <br />
          <TextAccent>Деталі:</TextAccent> з програвача 24 години лунав джаз
          30-х років із характерним потріскуванням голки
        </Card7Text>
      </Card7TextWrap>
    </Slide7Container>
  );
};

const Slide8: FC = () => {
  return (
    <Slide8Container>
      <Slide8Photo src={card4Photo2} alt='' />

      <Card8TextWrap>
        <Accent6 src={accent6} alt='' />
        <Card8Text>
          <TextAccent>Спостереження:</TextAccent> Мейзі занурилася в стан
          глибокої ностальгії
          <br />
          <br />
          <TextAccent>Вплив на смак:</TextAccent> напій набув «теплого
          лампового» характеру; дегустатори відзначають, що після ковтка
          хочеться вдягнути твідовий піджак...
        </Card8Text>
      </Card8TextWrap>
    </Slide8Container>
  );
};

const Slide9: FC = () => {
  return (
    <Slide9Container>
      <Card9TitleWrap>
        <Card9Title>Запис №42</Card9Title>
        <Card9TextWrap>
          <Accent7 src={accent7} alt='' />
          <Card9Text>
            <TextAccent>Суб’єкт:</TextAccent> Рорі
            <br />
            <br />
            <TextAccent>Експеримент:</TextAccent> аудіосимуляція
            трансівьафбьфіватьного експресу
            <br />
            <br />
            <TextAccent>Деталі:</TextAccent> для Рорі увімкнули зациклений
            запис: «чух-чух… чух-чух…» та звук перонного дзвона
          </Card9Text>
        </Card9TextWrap>

        <Slide9PhotoWrap>
          <Slide9Photo src={card5Photo1} alt='' />
        </Slide9PhotoWrap>
      </Card9TitleWrap>
    </Slide9Container>
  );
};

const Slide10: FC = () => {
  return (
    <Slide10Container>
      <Slide10Photo src={card5Photo2} alt='' />

      <Card10TextWrap>
        <Accent8 src={accent8} alt='' />
        <Card10Text>
          <TextAccent>Спостереження:</TextAccent> уперше за весь час
          експерименту Рорі заспокоївся. Він увійшов у медитативний транс,
          ритмічно погойдуючись
          <br />
          (або це нам здалося)
          <br />
          <br />
          <TextAccent>Вплив на смак:</TextAccent> смак став стрімким і прямим,
          мов рельси; з’явився довгий фініш, що нагадує нескінченну дорогу
          додому...
        </Card10Text>
      </Card10TextWrap>
    </Slide10Container>
  );
};

const StorySlider: FC<IStorySliderProps> = ({
  emblaRef,
  canScrollNext,
  canScrollPrev,
  scrollNext,
  scrollPrev,
  scrollSnaps,
  selectedIndex,
  scrollTo,
}) => {
  return (
    <>
      <Slider ref={emblaRef}>
        <SlidesWrap>
          <Slide>
            <Slide1 />
          </Slide>
          <Slide>
            <Slide2 />
          </Slide>
          <Slide>
            <Slide3 />
          </Slide>
          <Slide>
            <Slide4 />
          </Slide>
          <Slide>
            <Slide5 />
          </Slide>
          <Slide>
            <Slide6 />
          </Slide>
          <Slide>
            <Slide7 />
          </Slide>
          <Slide>
            <Slide8 />
          </Slide>
          <Slide>
            <Slide9 />
          </Slide>
          <Slide>
            <Slide10 />
          </Slide>
        </SlidesWrap>
      </Slider>

      <SliderControls>
        <NavButton
          type='button'
          onClick={scrollPrev}
          disabled={!canScrollPrev}
          aria-label='Попередній слайд'
        >
          <GoArrowLeft size={28} />
        </NavButton>

        <NavButton
          type='button'
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label='Наступний слайд'
        >
          <GoArrowRight size={28} />
        </NavButton>

        <DotsContainer>
          {scrollSnaps.map((_, index) => (
            <Dot
              key={index}
              type='button'
              isActive={index === selectedIndex}
              onClick={() => scrollTo(index)}
              aria-label={`Перейти до слайду ${index + 1}`}
            />
          ))}
        </DotsContainer>
      </SliderControls>
    </>
  );
};

const StorySectionContentMob: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(undefined, [Fade()]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onInit();
    onSelect();
    emblaApi.on('init', onInit);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('init', onInit);
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <Container>
      <Content>
        <Napkin1 src={napkin} alt='' isActive={selectedIndex === 0} />
        <Napkin2
          src={napkin2}
          alt=''
          isActive={selectedIndex === 1 || selectedIndex === 2}
        />
        <Napkin3
          src={napkin3}
          alt=''
          isActive={selectedIndex === 3 || selectedIndex === 4}
        />

        <Book src={book} alt='' />

        <StorySlider
          emblaRef={emblaRef}
          canScrollNext={canScrollNext}
          canScrollPrev={canScrollPrev}
          scrollNext={scrollNext}
          scrollPrev={scrollPrev}
          scrollSnaps={scrollSnaps}
          scrollTo={scrollTo}
          selectedIndex={selectedIndex}
        />
      </Content>
    </Container>
  );
};

export default StorySectionContentMob;
