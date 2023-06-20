import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useRef, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { sizes } from '@assets/breakpoints';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import Menu from './Menu';

const MainLayout = () => {
  const isMobile = useMediaQuery({ query: `(max-width: ${sizes.tablet})` });
  const [isMenuActive, setIsMenuActive] = useState(false);
  const wrapperRef = useRef();
  return (
    <div ref={wrapperRef} className='wrapper'>
      <ScrollRestoration />
      <Info />
      {isMobile && (
        <Menu
          title='Меню'
          isMenuActive={isMenuActive}
          setIsActive={setIsMenuActive}
        />
      )}
      <Header setIsActive={setIsMenuActive} wrapperRef={wrapperRef} />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
