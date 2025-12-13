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
  Slide3Container,
  Slide3Text,
  Slide3Title,
  Slide3TitleWrap,
  Slide4Container,
  Slide4Text,
  Slide4TextWrap,
  Slide4Title,
  Slide5Container,
  Slide5Text,
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
} from './StorySectionContentMob.styled';
import book from '@/images/story/book-mob.webp';
import useEmblaCarousel, { EmblaViewportRefType } from 'embla-carousel-react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import Fade from 'embla-carousel-fade';
import slide3Img from '@/images/story/card-4.webp';
import slide4Img from '@/images/story/card-5.webp';
import slide5Img from '@/images/story/card-6.webp';
import napkin from '@/images/story/napkin-mob.webp';
import napkin2 from '@/images/story/napkin-2-mob.webp';
import napkin3 from '@/images/story/napkin-3-mob.webp';
import card1 from '@/images/story/card-1.webp';
import lines1 from '@/images/story/lines-1.webp';
import lines2 from '@/images/story/lines-2.webp';
import card2 from '@/images/story/card-2.webp';

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
      <Slide3TitleWrap>
        <Slide3Title>Бортовий Журнал</Slide3Title>
        <img src={slide3Img} alt='' />
      </Slide3TitleWrap>

      <Slide3Text>
        Суб’єкт: Лохан
        <br />
        Експеримент: участь у зйомках авангардного римейку «Гуллівера». Деталі:
        Лохана помістили в макет міста ліліпутів. Оскільки інші актори були
        надто малі, Лохан нарешті відчув себе Великою Зіркою. Він грав
        Гуллівера, який мовчки споглядає метушню дрібних людей. Спостереження:
        деревина роздулася від гордості; тиск усередині бочки зріс на 15%. Вплив
        на смак: у віскі з’явилися нотки величі та ледь помітний присмак
        зіркової хвороби.
      </Slide3Text>
    </Slide3Container>
  );
};

const Slide4: FC = () => {
  return (
    <Slide4Container>
      <Slide4Title>
        Експеримент: сеанс вінілової терапії.
        <br />
        Деталі: з програвача 24 години лунав джаз 30-х років із характерним
        потріскуванням голки. Спостереження: Мейзі занурилася в стан глибокої
        ностальгії.
      </Slide4Title>

      <Slide4TextWrap>
        <img src={slide4Img} alt='' />
        <Slide4Text>
          Вплив на смак: напій набув «теплого лампового» характеру; дегустатори
          відзначають, що після ковтка хочеться вдягнути твідовий піджак.
        </Slide4Text>
      </Slide4TextWrap>
    </Slide4Container>
  );
};

const Slide5: FC = () => {
  return (
    <Slide5Container>
      <img src={slide5Img} alt='' />

      <Slide5Text>
        Суб’єкт: Рорі
        <br />
        Експеримент: аудіосимуляція трансконтинентального експресу. Деталі: для
        Рорі увімкнули зациклений запис: «чух-чух… чух-чух…» та звук перонного
        дзвона. Спостереження: уперше за весь час експерименту Рорі заспокоївся.
        Він увійшов у медитативний транс, ритмічно погойдуючись (або це нам
        здалося). Вплив на смак: смак став стрімким і прямим, мов рельси;
        з’явився довгий фініш, що нагадує нескінченну дорогу додому.
      </Slide5Text>
    </Slide5Container>
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
