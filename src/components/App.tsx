import MainPage from '@/pages/MainPage';
import { FC } from 'react';
import Header from '@CommonComponents/Header';
// import PreviewVideo from '@CommonComponents/PreviewVideo';

const App: FC = () => {
  return (
    <>
      {/* <PreviewVideo /> */}
      <Header />
      <MainPage />
    </>
  );
};

export default App;
