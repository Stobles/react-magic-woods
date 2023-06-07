import { Link } from 'react-router-dom';
import Image from '@comp/UI/Image';
import { categories } from '@assets/constants';
import styles from './Categories.module.scss';
import { store } from '@assets';

const CategoryCard = ({ isFull, to, title, img }) => (
  <Link className={isFull ? `${styles.Link} ${styles.Full}` : styles.Link} to={to}>
    <div className={styles.ImageWrapper}>
      <Image className={styles.Image} src={img} alt='category_img' />
    </div>
    <div className={styles.Content}>
      <h3 className={styles.Title}>{title}</h3>
    </div>
  </Link>
);

const Categories = () => (
  <section>
    <div className='container'>
      <div className={styles.Inner}>
        {categories.map(({ to, title, img }) => (
          <CategoryCard key={title} to={to} title={title} img={img} />
        ))}
        <CategoryCard isFull to='store' img={store} />
        <div className={styles.Main}>
          <div>Ознакомьтесь с нашими лучшими <span className={styles.Orange}>категориями</span></div>
        </div>
      </div>
    </div>
  </section>
);
export default Categories;
