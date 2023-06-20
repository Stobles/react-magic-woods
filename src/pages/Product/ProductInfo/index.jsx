import Image from '@comp/UI/Image';
import Radio from '@comp/UI/Radio';
import Button from '@comp/UI/Button';
import { FreeMode, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { payments } from '@assets/constants';
import styles from './Info.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import './Swiper.scss';
import { useEffect } from 'react';

const InfoPicker = ({ title, values, setValue, group }) => (
  <div className={styles.PickerWrapper}>
    <h4 className={styles.Title}>{title}</h4>
    <div className={styles.Picker}>
      {values.map(({ label, value }) => (
        <Radio
          key={value}
          label={label}
          value={value}
          setValue={setValue}
          group={group}
        />
      ))}
    </div>
  </div>
);

const Info = ({ id, product, sizes, setSize, languages, setLanguage, handleAddToBasket }) => {
  let me;
  return (
    <div className={styles.InfoWrapper}>
      <div className={styles.Content}>
        <div className={styles.Slider}>
          <Swiper
            modules={[Navigation, FreeMode]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
          >
            {product?.images?.map((value) => (
              <SwiperSlide key={value}>
                <div className={styles.ImageWrapper}>
                  <Image src={`/src/assets/images/products/${product?.category}/${id}/${value}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={styles.Info}>
          <div className={styles.Header}>
            <h2 className={styles.Title}>{product?.name}</h2>
            <div className={styles.Model}>Модель: {product?.model}</div>
          </div>
          <div className={styles.Choices}>
            {sizes.length ? (
              <InfoPicker
                title='Размер карты'
                values={sizes}
                setValue={setSize}
                group='r1'
              />
            ) : (
              ''
            )}
            {languages.length ? (
              <InfoPicker
                title='Язык'
                values={languages}
                setValue={setLanguage}
                group='r2'
              />
            ) : (
              ''
            )}
          </div>
          <div className={styles.Prices}>
            <span className={styles.Price}>
              {product.sale
                ? product.price - product.price * (product.sale / 100)
                : product.price}{' '}
              руб
            </span>
            {product.sale ? (
              <span className={styles.OldPrice}>{product.price} руб</span>
            ) : ''}
          </div>
          <div className={styles.Pay}>
            <div className={styles.Button}>
              <Button onClick={handleAddToBasket} isRounded>Добавить в корзину</Button>
            </div>
            <ul className={styles.Cards}>
              {payments.map(({ image }) => (
                <li key={image} className={styles.Card}>
                  <Image className={styles.Image} src={image} alt='payment' />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.Description}>
        <div className={styles.Header}>
          <h3 className={styles.Title}>Описание</h3>
        </div>
        <div>
          {product?.description?.map((value) => (
            <p key={value} className={styles.Paragraph}>
              {value}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Info;
