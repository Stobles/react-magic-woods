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
              text={`Головним прагненням нашої команди є задоволеність клієнта від співпраці із нашою командою 
                Головним прагненням нашої команди є задоволеність клієнта від співпраці із нашою командою`}
            />
          </div>
          <div ref={previewRef} className={styles.PreviewWrapper}>
            <Image
              className={styles.Preview}
              src='https://i.ytimg.com/vi/rg6fQMLB8Tk/maxresdefault.jpg'
              alt='preview'
            />
          </div>
          <div ref={videoRef} className={isVideoActive ? `${styles.Video} ${styles.Show}` : styles.Video}>
            <iframe
              width='1086'
              height='611'
              src='https://www.youtube.com/embed/rg6fQMLB8Tk'
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
