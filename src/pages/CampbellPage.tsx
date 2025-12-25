import HeroSection from '@CampbellPageComponents/HeroSection';
import AboutSection from '@CampbellPageComponents/AboutSection';
import OrderSection from '@CampbellPageComponents/OrderSection';
import PreferencesSection from '@CampbellPageComponents/PreferencesSection';
import Footer from '@CampbellPageComponents/Footer';
import { FC } from 'react';
import BarrelPageControls from '@CommonComponents/BarrelPageControls';
import RecordSection from '@CampbellPageComponents/RecordSection';
import { PagePaths } from '@/constants';

const CampbellPage: FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <AboutSection />
        <OrderSection />
        <PreferencesSection />
        <RecordSection />
        {/* <div style={{ backgroundColor: '#252525' }}>
          <BarrelPageControls href={PagePaths.lochan} />
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default CampbellPage;
