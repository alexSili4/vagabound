import { FC, useEffect, useRef, useState } from 'react';
import {
  Section,
  FirstScreen,
  Image,
  Screen,
  Title,
  BarrelWrap,
  BarrelRight,
  BarrelLeft,
  Space1,
  BarrelRightTop,
  Space2,
  BarrelLeftTop,
  Space3,
  Space4,
  BarrelRightBottom,
  Space5,
  Space6,
  BarrelLeftBottom,
  BarrelCenterWrap,
  Vagabound,
  BarrelWithLogoWrap,
  BarrelCenter,
  BarrelContainer,
} from './TravelSection.styled';
import screen2 from '@/images/travel/screen-2.webp';
import screen3 from '@/images/travel/screen-3.webp';
import screen4 from '@/images/travel/screen-4.webp';
import screen5 from '@/images/travel/screen-5.webp';
import barrel from '@/images/travel/barrel.webp';
import barrelRight from '@/images/travel/barrel-right.webp';
import barrelLeft from '@/images/travel/barrel-left.webp';
import vagabound from '@/images/travel/vagabound.webp';

const TravelSection: FC = () => {
  const barrelWrapRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [logoOpacity, setLogoOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!barrelWrapRef.current || !sectionRef.current) return;

      // Once logo is visible, keep it visible forever
      // if (logoOpacity === 1) return;

      const container = barrelWrapRef.current;
      const section = sectionRef.current;
      const containerRect = container.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Check if the container is sticky and positioned at 95% from top
      const isStickyPositioned =
        Math.abs(containerRect.top - viewportHeight * 0.95) < 1;

      // Check if we've scrolled past the FirstScreen (150dvh) and other content
      const sectionBottom = sectionRect.bottom;
      const hasReachedEnd = sectionBottom <= viewportHeight;

      // Show logo when barrel reaches the end - it will stay visible forever
      if (isStickyPositioned && hasReachedEnd) {
        setLogoOpacity(1);
      } else if (!hasReachedEnd) {
        setLogoOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [logoOpacity]);

  useEffect(() => {
    if (logoOpacity === 1) {
      document.body.style.overflow = 'hidden';

      const timer = setTimeout(() => {
        document.body.style.overflow = '';
      }, 500);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [logoOpacity]);

  return (
    <Section ref={sectionRef}>
      <Title>Мандрівка бочки</Title>

      <BarrelContainer>
        <Space1></Space1>

        <BarrelWrap>
          <BarrelRightTop src={barrel} alt='Бочка' />
        </BarrelWrap>

        <Space2></Space2>

        <BarrelWrap>
          <BarrelLeftTop src={barrel} alt='Бочка' />
        </BarrelWrap>

        <Space3></Space3>

        <BarrelWrap>
          <BarrelLeft src={barrelLeft} alt='Бочка' />
        </BarrelWrap>

        <Space4></Space4>

        <BarrelWrap>
          <BarrelRightBottom src={barrel} alt='Бочка' />
        </BarrelWrap>

        <Space5></Space5>

        <BarrelWrap>
          <BarrelRight src={barrelRight} alt='Бочка' />
        </BarrelWrap>

        <Space6></Space6>

        <BarrelWrap>
          <BarrelLeftBottom src={barrel} alt='Бочка' />
        </BarrelWrap>
      </BarrelContainer>

      <FirstScreen></FirstScreen>

      <Screen data-header-theme='light'>
        <Image src={screen2} alt='Банер' />
      </Screen>
      <Screen data-header-theme='light'>
        <Image src={screen5} alt='Банер' />
      </Screen>
      <Screen data-header-theme='dark'>
        <Image src={screen3} alt='Банер' />
      </Screen>
      <Screen data-header-theme='light'>
        <Image src={screen4} alt='Банер' />
      </Screen>

      <BarrelContainer>
        <BarrelCenterWrap ref={barrelWrapRef}>
          <BarrelWithLogoWrap>
            <BarrelCenter src={barrel} alt='Бочка' />
            <Vagabound
              src={vagabound}
              alt='Логотип'
              style={{ opacity: logoOpacity }}
            />
          </BarrelWithLogoWrap>
        </BarrelCenterWrap>
      </BarrelContainer>
    </Section>
  );
};

export default TravelSection;
