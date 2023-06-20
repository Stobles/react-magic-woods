// eslint-disable-next-line import/no-extraneous-dependencies
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { BsGeoAlt } from 'react-icons/bs';

import { Heading } from '@comp/UI/Heading';
import styles from './Contacts.module.scss';

const ContactItem = ({title, time, address}) => (
  <li className={styles.Item}>
    <BsGeoAlt className={styles.Icon} size={30} />
    <h4 className={styles.Title}>Retail Store</h4>
    <p className={styles.Time}>Mon-Sat 9am to 5pm</p>
    <div className={styles.Address}>
      <span>Ул. Кутузова д. 5</span>
      <span>Г. Москва</span>
    </div>
  </li>
);

const Contacts = () => (
  <section>
    <div className='container'>
      <div className={styles.Inner}>
        <Heading title='Наш офис' style={styles.Title} />
        <div className={styles.Subtitle}>
          Посетитие наш офис и встретьтесь с нашей командой
        </div>
        <div className={styles.MapWrapper}>
          <YMaps>
            <Map
              width='100%'
              height='400px'
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            >
              <Placemark geometry={[55.75, 37.57]} />
            </Map>
          </YMaps>
        </div>
        <ul className={styles.Contacts}>
          <ContactItem title='Retail Store' time='Mon-Sat 9am to 5pm' address='Ул. Кутузова д. 5' />
          <ContactItem title='Retail Store' time='Mon-Sat 9am to 5pm' address='Ул. Кутузова д. 5' />
          <ContactItem title='Retail Store' time='Mon-Sat 9am to 5pm' address='Ул. Кутузова д. 5' />
        </ul>
      </div>
    </div>
  </section>
);
export default Contacts;
