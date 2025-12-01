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
  Vagabound,
  Slide1Title,
  Slide1Text,
  Slide2Container,
  Slide2Text,
  Slide2Img,
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
} from './StorySectionContentMob.styled';
import book from '@/images/story/book-mob.webp';
import useEmblaCarousel from 'embla-carousel-react';
import { GoArrowRight, GoArrowLeft } from 'react-icons/go';
import Fade from 'embla-carousel-fade';
import slide2Img from '@/images/story/card-3.webp';
import slide3Img from '@/images/story/card-4.webp';
import slide4Img from '@/images/story/card-5.webp';
import slide5Img from '@/images/story/card-6.webp';

const Slide1: FC = () => {
  return (
    <Slide1Container>
      <Slide1TitleWrap>
        <Vagabound />
        <Slide1Title>the spirit worth chasing </Slide1Title>
      </Slide1TitleWrap>

      <Slide1Text>
        Скільки треба кричати в мушлю, щоб перезаписати звук моря? Що, якщо на
        ловця снів установити пам’ять, щоб він записував сни? Що, якщо сушити
        одяг над прірвою — чи його носій зможе подолати страх висоти? Чи можна
        приручити блискавку і вирощувати її вдома як свійську тварину? Що, якщо
        кімнатному базиліку рік показувати документалки про хижаків? Що, якщо
        їжа смакує краще, коли їй робити компліменти? І що, якщо відкрити
        ресторан, де працюють не лише кухарі, а й дипломовані лестуни? Це все
        експерименти, про які не згадують у підручниках. Це серйозні витівки
        Vagabound — таємної організації ексцентричних дослідників, що ставлять
        питання, на які наука боїться давати відповіді.
      </Slide1Text>
    </Slide1Container>
  );
};

const Slide2: FC = () => {
  return (
    <Slide2Container>
      <Slide2Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
        molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
        fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
        elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
        lectus. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
        egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse
        ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
        convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
      </Slide2Text>
      <Slide2Img src={slide2Img} alt='' />
    </Slide2Container>
  );
};

const Slide3: FC = () => {
  return (
    <Slide3Container>
      <Slide3TitleWrap>
        <Slide3Title>the spirit</Slide3Title>
        <img src={slide3Img} alt='' />
      </Slide3TitleWrap>

      <Slide3Text>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
        scelerisque ante pulvinar. Donec ut rhoncus ex.
      </Slide3Text>
    </Slide3Container>
  );
};

const Slide4: FC = () => {
  return (
    <Slide4Container>
      <Slide4Title>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </Slide4Title>

      <Slide4TextWrap>
        <img src={slide4Img} alt='' />
        <Slide4Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Nunc vulputate libero et velit
        interdum, ac aliquet odio mattis.
      </Slide5Text>
    </Slide5Container>
  );
};

const StorySlider: FC = () => {
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
  return (
    <Container>
      <Content>
        <Book src={book} alt='' />

        <StorySlider />
      </Content>
    </Container>
  );
};

export default StorySectionContentMob;
