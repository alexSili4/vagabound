import HeroSection from '@MaisiePageComponents/HeroSection';
import SocialLinksSection from '@MaisiePageComponents/SocialLinksSection';
import AboutSection from '@MaisiePageComponents/AboutSection';
import OrderSection from '@MaisiePageComponents/OrderSection';
import Footer from '@MaisiePageComponents/Footer';
import { FC } from 'react';
import BarrelPageControls from '@CommonComponents/BarrelPageControls';
import { PagePaths } from '@/constants';

const MaisiePage: FC = () => {
  return (
    <>
      <main>
        <HeroSection />
        <SocialLinksSection />
        <AboutSection />
        <OrderSection />
        <div style={{ backgroundColor: '#983400' }}>
          <BarrelPageControls href={PagePaths.campbell} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default MaisiePage;
