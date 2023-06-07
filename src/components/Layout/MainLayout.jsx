import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import Info from './Info';
import Header from './Header';
import Bar from './Bar';
import Footer from './Footer';
import Menu from './Menu';

const MainLayout = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const wrapperRef = useRef();
  return (
    <div ref={wrapperRef} className='wrapper'>
      <Info />
      <Menu title='Меню' isMenuActive={isMenuActive} setIsActive={setIsMenuActive} />
      <Header setIsActive={setIsMenuActive} wrapperRef={wrapperRef} />
      <main className='main'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default MainLayout;
