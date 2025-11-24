import MainPage from '@/pages/MainPage';
import { FC } from 'react';
import Header from '@CommonComponents/Header';
import Footer from '@CommonComponents/Footer';
// import PreviewVideo from './common/PreviewVideo';

const App: FC = () => {
  return (
    <>
      {/* <PreviewVideo /> */}
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
