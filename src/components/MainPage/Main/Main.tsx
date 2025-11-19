import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import AboutSection from '@MainPageComponents/AboutSection';
import BarrelsSection from '@MainPageComponents/BarrelsSection';

const Main: FC = () => {
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <HeroSection />
        <BarrelsSection />
      </div>
      <AboutSection />
    </>
  );
};

export default Main;
