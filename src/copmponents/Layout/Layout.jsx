import { Outlet } from 'react-router-dom';
import { GlobalStyle } from './createGlobalStyle';

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <div>
        <Outlet />
      </div>
    </>
  );
};
