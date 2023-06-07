import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';
import { homeSlides } from '@assets/constants';
import { Description, Heading } from '@comp/UI/Heading';
import Image from '@comp/UI/Image';
import { slide } from '@assets';
import styles from './Slider.module.scss';

import './Swiper.scss';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

const Slide = ({ title, description, image, id }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.Slide}>
      <div className={styles.Inner}>
        <div className={styles.Content}>
          <Heading title={title} style={styles.Title} xl />
          <Description style={styles.Description} text={description} xs />
          <button type='button' className={styles.Button}>Читать еще</button>
        </div>
        <div className={styles.ImageWrapper}>
          <Image className={styles.Image} src={slide} alt='slide_img' />
        </div>
      </div>
    </div>
  );
};

const Slider = () => (
  <section className={styles.Section}>
    <div className='container'>
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className={styles.Swiper}
        allowTouchMove
        spaceBetween={80}
        autoplay={{
          delay: 5000,
        }}
      >
        {homeSlides.map(({ title, description, image, id }) => (
          <SwiperSlide key={id}>
            <Slide
              title={title}
              description={description}
              image={image}
              id={id}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);
export default Slider;
