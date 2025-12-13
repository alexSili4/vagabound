import { FC, lazy } from 'react';
import { PagePaths } from '@/constants';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@CommonComponents/SharedLayout';
import PreviewVideo from '@CommonComponents/PreviewVideo';

const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
const MainPage = lazy(() => import('@/pages/MainPage'));
const MaisiePage = lazy(() => import('@/pages/MaisiePage'));
const RoryPage = lazy(() => import('@/pages/RoryPage'));
const LochanPage = lazy(() => import('@/pages/LochanPage'));

const App: FC = () => {
  return (
    <>
      <PreviewVideo />
      <Routes>
        <Route path={PagePaths.root} element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path={PagePaths.root} element={<MainPage />} />
          <Route path={PagePaths.rory} element={<RoryPage />} />
          <Route path={PagePaths.maisie} element={<MaisiePage />} />
          <Route path={PagePaths.lochan} element={<LochanPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
