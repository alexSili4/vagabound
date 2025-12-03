import { FC } from 'react';
import { Section, Container } from './HeroSection.styled';
import GoHomeLink from '@CommonComponents/GoHomeLink';

const HeroSection: FC = () => {
  return (
    <Section>
      <Container>
        <GoHomeLink />
        {/* <TitleWrap>
          <Subtitle>subtitle</Subtitle>
          <Title>the great title for a barrel</Title>
        </TitleWrap> */}
      </Container>
    </Section>
  );
};

export default HeroSection;
