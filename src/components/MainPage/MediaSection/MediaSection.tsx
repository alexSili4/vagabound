import { FC, useRef } from 'react';
import {
  Card1,
  Card2,
  Card3,
  Card4,
  Card5,
  Card6,
  Card7,
  Card8,
  Paper,
  Screen,
  ScreenWrap,
  Section,
  Button,
  Stamp,
  ButtonWrap,
  Lines,
} from './MediaSection.styled';
import paper from '@/images/media/bg.webp';
import card1 from '@/images/media/card-1.webp';
import card2 from '@/images/media/card-2.webp';
import card3 from '@/images/media/card-3.webp';
import card4 from '@/images/media/card-4.webp';
import card5 from '@/images/media/card-5.webp';
import card6 from '@/images/media/card-6.webp';
import card7 from '@/images/media/card-7.webp';
import card8 from '@/images/media/card-8.webp';
import stamp from '@/images/media/stamp.webp';
import lines from '@/images/media/lines.webp';
import { useScroll, useTransform } from 'framer-motion';

const MediaSection: FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const card1Y = useTransform(scrollYProgress, [0.15, 0.3], [500, 0]);
  const card2Y = useTransform(scrollYProgress, [0.2, 0.35], [600, 0]);
  const card3Y = useTransform(scrollYProgress, [0.25, 0.4], [700, 0]);
  const card4Y = useTransform(scrollYProgress, [0.3, 0.45], [800, 0]);
  const card5Y = useTransform(scrollYProgress, [0.35, 0.5], [900, 0]);
  const card6Y = useTransform(scrollYProgress, [0.4, 0.55], [1000, 0]);
  const card7Y = useTransform(scrollYProgress, [0.45, 0.6], [1100, 0]);
  const card8Y = useTransform(scrollYProgress, [0.5, 0.65], [1200, 0]);

  return (
    <Section>
      <Paper src={paper} alt='Світлина' />

      <ScreenWrap ref={containerRef}>
        <Screen>
          <ButtonWrap style={{ y: card8Y }}>
            <Button>
              <Card8 src={card8} alt='Світлина' />
              <Stamp src={stamp} alt='Світлина' />
              <Lines src={lines} alt='Світлина' />
            </Button>
          </ButtonWrap>
          <Card1 src={card1} alt='Світлина' style={{ y: card1Y }} />
          <Card2 src={card2} alt='Світлина' style={{ y: card2Y }} />
          <Card4 src={card4} alt='Світлина' style={{ y: card4Y }} />
          <Card3 src={card3} alt='Світлина' style={{ y: card3Y }} />
          <Card5 src={card5} alt='Світлина' style={{ y: card5Y }} />
          <Card6 src={card6} alt='Світлина' style={{ y: card6Y }} />
          <Card7 src={card7} alt='Світлина' style={{ y: card7Y }} />
        </Screen>
      </ScreenWrap>
    </Section>
  );
};

export default MediaSection;
