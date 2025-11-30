import { FC } from 'react';
import HeroSection from '@MainPageComponents/HeroSection';
// import AboutSection from '@MainPageComponents/AboutSection';
// import BarrelsSection from '@MainPageComponents/BarrelsSection';
// import TravelSection from '@MainPageComponents/TravelSection';
import StorySectionMob from '@/components/MainPage/StorySectionMob';
import StorySectionDesk from '@/components/MainPage/StorySectionDesk';
// import MediaSection from '@MainPageComponents/MediaSection';
import BottlesSection from '@MainPageComponents/BottlesSection';
// import OrderSection from '@MainPageComponents/OrderSection';
import FAQSection from '@MainPageComponents/FAQSection';
// import BagSection from '@MainPageComponents/BagSection';

const Main: FC = () => {
  return (
    <>
      <div style={{ overflow: 'hidden' }}>
        <HeroSection />
        {/* <BarrelsSection /> */}
      </div>
      {/* <AboutSection /> */}
      {/* <TravelSection /> */}
      <StorySectionMob />
      <StorySectionDesk />
      {/* <MediaSection /> */}
      <BottlesSection />
      {/* <OrderSection /> */}
      <FAQSection />
      {/* <BagSection /> */}
    </>
  );
};

export default Main;
