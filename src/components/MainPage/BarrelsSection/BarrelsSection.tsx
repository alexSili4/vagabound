import { FC, useEffect, useState } from 'react';
import { Section, Title } from './BarrelsSection.styled';
import { SectionId } from '@/constants';
import BarrelsSectionDeskContent from '@MainPageComponents/BarrelsSectionDeskContent';
import BarrelsSectionMobContent from '@MainPageComponents/BarrelsSectionMobContent';
import { IBarrelSetting } from '@/types/order';

const BarrelsSection: FC = () => {
  const [barrelSettings, setBarrelSettings] = useState<IBarrelSetting[]>([]);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch('/api/settings/all');
        const data = await response.json();

        setBarrelSettings(data);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const knockdhu = barrelSettings.find((b) => b.alias === 'KNOCKDHU');
  const breival = barrelSettings.find((b) => b.alias === 'BREIVAL');
  const williamson = barrelSettings.find((b) => b.alias === 'WILLIAMSON');
  const balblair = barrelSettings.find((b) => b.alias === 'BALBLAIR');

  return (
    <Section id={SectionId.barrels}>
      <Title>Бочки</Title>

      <BarrelsSectionDeskContent
        knockdhu={knockdhu}
        breival={breival}
        williamson={williamson}
        balblair={balblair}
      />
      <BarrelsSectionMobContent
        knockdhu={knockdhu}
        breival={breival}
        williamson={williamson}
        balblair={balblair}
      />
    </Section>
  );
};

export default BarrelsSection;
