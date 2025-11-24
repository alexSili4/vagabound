import { FC, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '@CommonComponents/Loader';
import Header from '@CommonComponents/Header';

const SharedLayout: FC = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
