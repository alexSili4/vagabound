import { FC } from 'react';
import {
  Section,
  Container,
  SectionTitle,
  Text,
  Title,
  TitleWrap,
  Frame,
} from './AboutSection.styled';
import frame from '@/images/barrel-page/maisie/frame.webp';

const AboutSection: FC = () => {
  return (
    <Section>
      <SectionTitle>Про нас</SectionTitle>
      <Container>
        <Frame src={frame} alt='Рамка' />
        <TitleWrap>
          <Title>Title</Title>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos.{' '}
          </Text>
        </TitleWrap>
      </Container>
    </Section>
  );
};

export default AboutSection;
