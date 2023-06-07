import Image from '@comp/UI/Image';
import { Description, Heading } from '@comp/UI/Heading';
import { russia } from '@assets';
import { shortSocialLinks } from '@assets/constants';
import { FaPhoneVolume } from 'react-icons/fa';
import { BsGeoAltFill } from 'react-icons/bs';
import SocialButton from '@comp/UI/SocialButton';
import styles from './About.module.scss';

const About = () => {
  let me;
  return (
    <section>
      <div className='container'>
        <div className={styles.Inner}>
          <div className={styles.Content}>
            <Heading style={styles.Title} title='Magic Wood Maps' xl />
            <Description
              xs
              text={`Різні види карт з натурального дерева та додатківдля них щоб відповідати 
                потребам наших клієнтів. Для того, щоб наш декор був найкращим, 
                ми співпрацюємо з кращими виробниками сировини та фарб у галузі`}
            />
          </div>
          <div className={styles.ImageWrapper}>
            <Image src={russia} alt='russia' />
          </div>
        </div>
        <div className={styles.Info}>
          <ul className={`${styles.Links} ${styles.Item}`}>
            {shortSocialLinks.map(({ to, Icon }) => (
              <SocialButton to={to} Icon={Icon} isInverted />
            ))}
          </ul>
          <div className={`${styles.Telephone} ${styles.Item}`}>
            <FaPhoneVolume size={35} className={styles.Icon} />
            <a className={styles.Text} href='tel:+79685431233'>+7 968 543 12 33</a>
          </div>
          <div className={`${styles.Address} ${styles.Item}`}>
            <BsGeoAltFill size={27} className={styles.Icon} />
            <div className={styles.Text}>
              <span className={styles.City}>г. Москва,</span>
              <span className={styles.Street}>ул. Шевченко, 31а</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
