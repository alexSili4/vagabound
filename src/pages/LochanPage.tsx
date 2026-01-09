import HeroSection from '@LochanPageComponents/HeroSection';
import AboutSection from '@LochanPageComponents/AboutSection';
import OrderSection from '@LochanPageComponents/OrderSection';
import PreferencesSection from '@LochanPageComponents/PreferencesSection';
import Footer from '@LochanPageComponents/Footer';
import { FC } from 'react';
import BarrelPageControls from '@CommonComponents/BarrelPageControls';
import RecordSection from '@LochanPageComponents/RecordSection';
import { PagePaths } from '@/constants';

const LochanPage: FC = () => {
  return (
    <>
      <main>
        <div style={{ overflow: 'hidden' }}>
          <HeroSection />
          <AboutSection />
        </div>
        <OrderSection />
        <PreferencesSection />
        <RecordSection />
        <div style={{ backgroundColor: '#AD630B' }}>
          <BarrelPageControls href={PagePaths.rory} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LochanPage;
