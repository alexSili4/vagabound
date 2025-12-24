import HeroSection from '@RoryPageComponents/HeroSection';
import SocialLinksSection from '@RoryPageComponents/SocialLinksSection';
import AboutSection from '@RoryPageComponents/AboutSection';
import OrderSection from '@RoryPageComponents/OrderSection';
import Footer from '@RoryPageComponents/Footer';
import { FC } from 'react';
import BarrelPageControls from '@CommonComponents/BarrelPageControls';
import { PagePaths } from '@/constants';

const RoryPage: FC = () => {
  return (
    <>
      <main style={{ overflow: 'hidden' }}>
        <HeroSection />
        <AboutSection />
        {/* <OrderSection /> */}
        {/* <PreferencesSection /> */}
        {/* <RecordSection /> */}
        {/* <div style={{ backgroundColor: '#1A3E2F' }}>
          <BarrelPageControls href={PagePaths.maisie} />
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default RoryPage;
