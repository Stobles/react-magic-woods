import { NavLink } from 'react-router-dom';
import {
  navLinksMain,
  navLinksSecondary,
  shortSocialLinks,
} from '@assets/constants';
import styles from './Menu.module.scss';
import SocialButton from '../../UI/SocialButton';

const Menu = ({ title, isMenuActive, setIsActive }) => (
  <div
    className={isMenuActive ? `${styles.Menu} ${styles.Active}` : styles.Menu}
  >
    <div className={styles.Inner}>
      <button
        onClick={() => setIsActive(false)}
        type='button'
        className={styles.Close}
      >
        <span className={styles.Stick} />
        <span className={styles.Stick} />
      </button>
      <h2 className={styles.Title}>{title}</h2>
      <ul className={styles.Links}>
        {navLinksMain.map(({ name, to }) => (
          <li key={name} className={styles.Item}>
            <NavLink
              to={to}
              className={({ isActive }) => (isActive ? `${styles.Link} ${styles.Active}` : styles.Link)}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className={styles.Help}>
        <ul className={styles.Links}>
          {navLinksSecondary.map(({ name, to }) => (
            <li key={name} className={styles.Item}>
              <NavLink to={to} className={styles.Link}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className={styles.Social}>
          {shortSocialLinks.map(({ Icon, to }) => (
            <SocialButton key={to} to={to} Icon={Icon} />
          ))}
        </ul>
        <span>©2022, Magic Wood Map</span>
      </div>
    </div>
  </div>
);
export default Menu;
