import { Description, Heading, SubHeading } from '@comp/UI/Heading';
import Image from '@comp/UI/Image';
import { useRef, useEffect, useState } from 'react';
import styles from './About.module.scss';

const About = () => {
  const [isVideoActive, setIsVideoActive] = useState(false);
  const previewRef = useRef();
  const videoRef = useRef();
  useEffect(() => {
    const onClick = (e) => (previewRef.current.contains(e.target)
      ? setIsVideoActive(true)
      : setIsVideoActive(false));
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return (
    <section>
      <div className='container'>
        <div className={styles.Inner}>
          <div className={styles.Content}>
            <SubHeading title='о нас' />
            <Heading style={styles.Title} title='Magic Wood Maps' />
            <Description
              text={`Главным стремлением нашей команды есть удовлетворенность 
              клиента от сотрудничества с нашей командой`}
            />
          </div>
          <div ref={previewRef} className={styles.PreviewWrapper}>
            <Image
              className={styles.Preview}
              src='https://i.ytimg.com/vi/BkU8T49BCSQ/maxresdefault.jpg'
              alt='preview'
            />
          </div>
          <div ref={videoRef} className={isVideoActive ? `${styles.VideoWrapper} ${styles.Show}` : styles.VideoWrapper}>
            <iframe
              className={styles.Video}
              src='https://www.youtube.com/embed/BkU8T49BCSQ'
              title='Genshin Impact - Full OST (Updated - Part 1) w/ Timestamps'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
