import styles from './SocialButton.module.scss';

const SocialButton = ({ to, Icon, isInverted }) => (
  <li className={isInverted ? `${styles.Item} ${styles.Inverted}` : styles.Item} key={to}>
    <a className={styles.Link} href={to}>
      <Icon size={22} className={styles.Icon} />
    </a>
  </li>
);
export default SocialButton;
