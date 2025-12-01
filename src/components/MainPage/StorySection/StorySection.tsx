import { FC } from 'react';
import { Section, Title } from './StorySection.styled';
import StorySectionContentMob from '@MainPageComponents/StorySectionContentMob';
import StorySectionContentDesk from '@MainPageComponents/StorySectionContentDesk';

const StorySection: FC = () => {
  return (
    <Section>
      <Title>Історія</Title>

      <StorySectionContentDesk />
      <StorySectionContentMob />
    </Section>
  );
};

export default StorySection;
