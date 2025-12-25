import HeroSection from '@MaisiePageComponents/HeroSection';
import PreferencesSection from '@MaisiePageComponents/PreferencesSection';
import AboutSection from '@MaisiePageComponents/AboutSection';
import RecordSection from '@MaisiePageComponents/RecordSection';
import OrderSection from '@MaisiePageComponents/OrderSection';
import Footer from '@MaisiePageComponents/Footer';
import { FC } from 'react';
import BarrelPageControls from '@CommonComponents/BarrelPageControls';
import { PagePaths } from '@/constants';

const MaisiePage: FC = () => {
  return (
    <>
      <main style={{ overflow: 'hidden' }}>
        <HeroSection />
        <AboutSection />
        <OrderSection />
        <PreferencesSection />
        <RecordSection />
        <div style={{ backgroundColor: '#983400' }}>
          <BarrelPageControls href={PagePaths.campbell} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MaisiePage;
