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
            <Napkin src={napkin} alt='' isActive={activeIndex === 0} />
            <Napkin src={napkin2} alt='' isActive={activeIndex === 1} />
            <Napkin src={napkin3} alt='' isActive={activeIndex === 2} />

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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit, sit amet feugiat lectus.
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
                    vel bibendum lorem. Morbi convallis convallis diam sit amet
                    lacinia. Aliquam in elementum tellus.
                  </Card1Text>
                  <Card1Text>
                    Class aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Praesent auctor purus luctus
                    enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus
                    ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur
                    vel bibendum lorem. Morbi convallis convallis diam sit amet
                    lacinia. Aliquam in elementum tellus.
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus. Maecenas eget condimentum velit,
                sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent
                auctor purus luctus enim egestas, ac scelerisque ante pulvinar.
                Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor
                urna. Curabitur vel bibendum lorem. Morbi convallis convallis
                diam sit amet lacinia. Aliquam in elementum tellus.
              </Card2Text>

              <Card2Title>the spirit</Card2Title>

              <Card2Desc>
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Praesent auctor purus luctus
                enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
              </Card2Desc>
            </Card2Container>

            <Card3Container
              isActive={activeIndex === 2}
              data-header-theme='light'
            >
              <Card5 src={card5} alt='Фото' />
              <Card6 src={card6} alt='Фото' />
              <Card3Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
              </Card3Text>

              <Card4Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Card4Text>

              <Card5Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
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
