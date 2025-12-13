import { FC, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import {
  Dot,
  DotsContainer,
  NavButton,
  SliderControls,
  Container,
  Slide,
  Slider,
  SlidesWrap,
  BarrelSubtitle,
  BarrelText,
  BarrelTitle,
  SlideContainer,
  SlideImg,
  SlideTextWrap,
} from './BarrelsSectionMobContent.styled';
import barrel1 from '@/images/barrels/barrel-1.webp';
import barrel2 from '@/images/barrels/barrel-2.webp';
import barrel3 from '@/images/barrels/barrel-3.webp';
import barrel4 from '@/images/barrels/barrel-4.webp';
import { Link } from 'react-router-dom';
import { PagePaths } from '@/constants';

const Slide1: FC = () => {
  return (
    <SlideContainer>
      <Link to={PagePaths.maisie}>
        <SlideImg src={barrel1} alt='' />
      </Link>

      <SlideTextWrap>
        <BarrelTitle>МЕЙЗІ ЕДЕРТОН</BarrelTitle>
        <BarrelSubtitle>Maisie Edderton</BarrelSubtitle>
        <BarrelText>
          Поціновувачка вишуканого вінтажу, якщо хильнути зайвого в неї в
          гостях, — в інтер’єрі Мейзі дуже легко забути, який зараз рік.
        </BarrelText>
      </SlideTextWrap>
    </SlideContainer>
  );
};

const Slide2: FC = () => {
  return (
    <SlideContainer>
      <Link to={PagePaths.lochan}>
        <SlideImg src={barrel2} alt='' />
      </Link>

      <SlideTextWrap>
        <BarrelTitle>Лохан Чепелтон</BarrelTitle>
        <BarrelSubtitle>Lochan Chapelton</BarrelSubtitle>
        <BarrelText>
          Мріє стати великим актором. Проте колеги делікатно мовчать про те, що
          на сцені він трішки… дерев’яний.
        </BarrelText>
      </SlideTextWrap>
    </SlideContainer>
  );
};

const Slide3: FC = () => {
  return (
    <SlideContainer>
      <Link to={PagePaths.rory}>
        <SlideImg src={barrel3} alt='' />
      </Link>

      <SlideTextWrap>
        <BarrelTitle>Рорі Нок</BarrelTitle>
        <BarrelSubtitle>Rory Knock</BarrelSubtitle>
        <BarrelText>
          Провідник Шотландської залізниці. Для нього життя — це рух. Якби його
          воля, він би навіть спав на біговій доріжці.
        </BarrelText>
      </SlideTextWrap>
    </SlideContainer>
  );
};

const Slide4: FC = () => {
  return (
    <SlideContainer>
      <Link to={PagePaths.campbell}>
        <SlideImg src={barrel4} alt='' />
      </Link>

      <SlideTextWrap>
        <BarrelTitle>Містер Кемпбел</BarrelTitle>
        <BarrelSubtitle>Mr Campbell</BarrelSubtitle>
        <BarrelText>
          Священик за покликанням, він може витримати все: міцне віскі,
          токсичних родичів, відсутність Wi-Fi, — але тільки не зневіру
          ближнього.
        </BarrelText>
      </SlideTextWrap>
    </SlideContainer>
  );
};

const BarrelsSectionMobContent: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel();

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
    </Container>
  );
};

export default BarrelsSectionMobContent;
