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
} from './HeroSection.styled';
import imgDefault from '@/images/hero/switcher-default.webp';
import imgHover from '@/images/hero/switcher-hover.webp';

const HeroSection: FC = () => {
  return (
    <Section>
      <Container>
        <Title>the spirit worth chasing / filling</Title>
        <SwitcherBtnWrap>
          <SwitcherBtn type='button'>
            <SwitcherBtnImgDefault src={imgDefault} alt='' />
            <SwitcherBtnImgHover src={imgHover} alt='' />
          </SwitcherBtn>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </Text>
          <Logo />
        </SwitcherBtnWrap>
      </Container>
    </Section>
  );
};

export default HeroSection;
