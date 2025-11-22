import MainPage from '@/pages/MainPage';
import { FC } from 'react';
import Header from '@CommonComponents/Header';
import Footer from '@CommonComponents/Footer';

const App: FC = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
