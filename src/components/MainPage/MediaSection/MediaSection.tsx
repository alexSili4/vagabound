import { FC } from 'react';
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
import paper from '@/images/media/bg.png';
import card1 from '@/images/media/card-1.png';
import card2 from '@/images/media/card-2.png';
import card3 from '@/images/media/card-3.png';
import card4 from '@/images/media/card-4.png';
import card5 from '@/images/media/card-5.png';
import card6 from '@/images/media/card-6.png';
import card7 from '@/images/media/card-7.png';
import card8 from '@/images/media/card-8.png';
import stamp from '@/images/media/stamp.png';
import lines from '@/images/media/lines.png';

const MediaSection: FC = () => {
  return (
    <Section>
      <Paper src={paper} alt='' />

      <ScreenWrap>
        <Screen>
          <ButtonWrap>
            <Button>
              <Card8 src={card8} alt='' />
              <Stamp src={stamp} alt='' />
              <Lines src={lines} alt='' />
            </Button>
          </ButtonWrap>
          <Card1 src={card1} alt='' />
          <Card2 src={card2} alt='' />
          <Card4 src={card4} alt='' />
          <Card3 src={card3} alt='' />
          <Card5 src={card5} alt='' />
          <Card3 src={card3} alt='' />
          <Card6 src={card6} alt='' />
          <Card7 src={card7} alt='' />
        </Screen>
      </ScreenWrap>
    </Section>
  );
};

export default MediaSection;
