import Footer from '@MainPageComponents/Footer';
import Main from '@MainPageComponents/Main';
import { FC } from 'react';

const MainPage: FC = () => {
  return (
    <>
      <main>
        <Main />
      </main>
      <Footer />
    </>
  );
};

export default MainPage;
