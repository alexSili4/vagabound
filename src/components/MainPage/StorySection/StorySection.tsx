import { FC } from 'react';
import { Section, Title } from './StorySection.styled';
import { SectionId } from '@/constants';
import StorySectionContentDesk from '@MainPageComponents/StorySectionContentDesk';
import StorySectionContentMob from '@MainPageComponents/StorySectionContentMob';

const StorySection: FC = () => {
  return (
    <Section id={SectionId.history}>
      <Title>Історія</Title>

      <StorySectionContentDesk />
      <StorySectionContentMob />
    </Section>
  );
};

export default StorySection;
