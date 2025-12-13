import { FC } from 'react';
import { Section, Title } from './BarrelsSection.styled';
import { SectionId } from '@/constants';
import BarrelsSectionDeskContent from '@MainPageComponents/BarrelsSectionDeskContent';

const BarrelsSection: FC = () => {
  return (
    <Section id={SectionId.barrels}>
      <Title>Бочки</Title>

      <BarrelsSectionDeskContent />
    </Section>
  );
};

export default BarrelsSection;
