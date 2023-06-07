import { socialLinks } from '@assets/constants';
import useCopyToClipboard from '@hooks/useCopyToClipboard';
import styles from './Info.module.scss';

const Info = () => {
  const [isCopied, handleCopy] = useCopyToClipboard(1000);
  return (
    <div className={styles.Info}>
      <div className='container'>
        <div className={styles.Inner}>
          <ul className={styles.Links}>
            {socialLinks.map(({ Icon, to }) => (
              <li key={to}>
                <a className={styles.Link} href={to}>
                  <Icon size={20} />
                </a>
              </li>
            ))}
          </ul>
          <div className={styles.Telephone}>
            <button
              type='button'
              disabled={isCopied}
              onClick={() => handleCopy('+7 978 859 80 23')}
              className={
                isCopied
                  ? `${styles.MainText} ${styles.Disabled}`
                  : styles.MainText
              }
            >
              +7 978 859 80 23
            </button>
            <span className={styles.SubText}>Нажмите, чтобы скопировать</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Info;
