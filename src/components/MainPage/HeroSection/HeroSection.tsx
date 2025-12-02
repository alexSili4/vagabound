import { FC } from 'react';
import {
  Section,
  Container,
  SwitcherBtn,
  SwitcherBtnImgDefault,
  SwitcherBtnImgHover,
  SwitcherBtnWrap,
  Text,
  Title,
  Logo,
  StyledVideo,
  Video,
} from './HeroSection.styled';
import imgDefault from '@/images/hero/switcher-default.webp';
import imgHover from '@/images/hero/switcher-hover.webp';
import hero from '@/video/hero.mp4';
import { useVideo } from '@/hooks';

const HeroSection: FC = () => {
  const { videoRef } = useVideo();

  return (
    <Section data-header-theme='light'>
      <Video>
        <StyledVideo ref={videoRef} src={hero} muted playsInline loop />
      </Video>

      <Container>
        <Title>the spirit worth chasing</Title>
        <SwitcherBtnWrap>
          <Logo />
          <SwitcherBtn type='button'>
            <SwitcherBtnImgDefault src={imgDefault} alt='' />
            <SwitcherBtnImgHover src={imgHover} alt='' />
          </SwitcherBtn>
          <Text>
            Шотландія. Чотири бочки — один експеримент. Подорож, що змінить смак
            віскі… і тих, хто його п’є.
          </Text>
        </SwitcherBtnWrap>
      </Container>
    </Section>
  );
};

export default HeroSection;
