import Image from '@comp/UI/Image';
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { Logo } from '@assets';
import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useObserver } from '@hooks/useObserver';
import styles from './Header.module.scss';
import Navbar from './Navbar';

const Header = ({ setIsActive, wrapperRef }) => {
  const [isIntersecting, setIsIntersecting] = useState(true);
  const headerObserveRef = useRef();
  const headerRef = useRef();
  useObserver(
    headerObserveRef,
    () => {
      wrapperRef.current.style.marginTop = `${headerRef.current.clientHeight}px`;
      setIsIntersecting(false);
    },
    () => {
      wrapperRef.current.style.marginTop = 0;
      setIsIntersecting(true);
    },
  );

  useEffect(() => {
    headerObserveRef.current.style.height = `${headerRef.current.clientHeight}px`;
  }, [headerRef]);
  return (
    <>
      <div ref={headerObserveRef} className={styles.Observe} />
      <header
        ref={headerRef}
        className={
          !isIntersecting ? `${styles.Header} ${styles.Observed}` : undefined
        }
      >
        <div className='container'>
          <div className={styles.Inner}>
            <div className={styles.Burger}>
              <button
                onClick={() => setIsActive(true)}
                type='button'
                className={styles.Button}
              >
                <span className={styles.Stick} />
                <span className={styles.Stick} />
                <span className={styles.Stick} />
              </button>
              <span className={styles.Text}>Меню</span>
            </div>
            <Link to='/' className={styles.Logo}>
              <div className={styles.ImageWrapper}>
                <Image className={styles.Image} src={Logo} alt='Logo' />
              </div>
              <span className={styles.Text}>Magic Wood Maps</span>
            </Link>
            <div className={styles.Navigation}>
              <div className={styles.Item}>
                <AiOutlineUser size={16} />
                <Link className={styles.Link} to='/user'>
                  АККАУНТ
                </Link>
              </div>
              <div className={styles.Item}>
                <BsCart2 size={16} />
                <Link className={styles.Link} to='/basket'>
                  Корзина
                </Link>
              </div>
            </div>
          </div>
          <div
            style={!isIntersecting ? { display: 'none' } : { display: 'block' }}
          >
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
