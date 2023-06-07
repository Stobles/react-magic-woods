import { NavLink } from 'react-router-dom';
import { navLinksMain, navLinksSecondary } from '@assets/constants';

import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.Navigation}>
    <ul className={styles.Links}>
      {navLinksMain.map(({ name, to }) => (
        <li className={styles.Item} key={name}>
          <NavLink className={({ isActive }) => (isActive ? `${styles.Link} ${styles.Active}` : styles.Link)} to={to}>{name}</NavLink>
        </li>
      ))}
    </ul>
    <ul className={styles.Help}>
      {navLinksSecondary.map(({ name, to }) => (
        <li className={styles.Item} key={name}>
          <NavLink className={({ isActive }) => (isActive ? `${styles.Link} ${styles.Active}` : styles.Link)} to={to}>{name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);
export default Navbar;
