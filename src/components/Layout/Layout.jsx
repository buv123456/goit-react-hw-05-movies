import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, NavLinkS } from './Layout.style';

export const Layout = () => {
  return (
    <div>
      <Header>
        <NavLinkS to="/" end>
          Home
        </NavLinkS>
        <NavLinkS to="/movies">Movies</NavLinkS>
      </Header>
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
