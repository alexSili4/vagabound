import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
import AboutSection from '@MainPageComponents/AboutSection';
import BarrelsSection from '@MainPageComponents/BarrelsSection';
import TravelSection from '@MainPageComponents/TravelSection';
import StorySection from '@MainPageComponents/StorySection';
import MediaSection from '@MainPageComponents/MediaSection';
import BottlesSection from '@MainPageComponents/BottlesSection';

const Main: FC = () => {
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <HeroSection />
        <BarrelsSection />
      </div>
      <AboutSection />
      <TravelSection />
      <StorySection />
      <MediaSection />
      <BottlesSection />
    </>
  );
};

export default Main;
