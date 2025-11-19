import { FC } from 'react';
import { Section, Container, Text, Title } from './AboutSection.styled';

const AboutSection: FC = () => {
  return (
    <Section>
      <Container>
        <Title>ПРО ПРОЄКТ</Title>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
        </Text>
      </Container>
    </Section>
  );
};

export default AboutSection;
