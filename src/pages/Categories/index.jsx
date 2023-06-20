import { Link } from 'react-router-dom';
import { PageHeading } from '@comp/UI/Heading';
import Image from '@comp/UI/Image';
import { useFetching } from '@hooks/useFetching';
import { useEffect, useState } from 'react';
import styles from './Categories.module.scss';
import CategoryService from '../../services/CategoryService';
import { toast } from 'react-toastify';
import Loader from '../../components/UI/Loader';

const CategoryCard = ({ title, img, to }) => (
  <li className={styles.Category}>
    <Link className={styles.Link} to={to} />
    <div className={styles.ImageWrapper}>
      <Image className={styles.Image} src={`/src/assets/images/Categories/${img}`} alt='category_img' />
    </div>
    <div className={styles.Content}>
      <h2 className={styles.Title}>{title}</h2>
    </div>
  </li>
);

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [fetchCategories, isLoading, error] = useFetching(async () => {
    const response = await CategoryService.getAll();
    setCategories(response.categories);
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  if (error) {
    toast.error(error);
  }

  return (
    <section>
      <div className='container'>
        <PageHeading title='Категории' />
        <ul className={styles.Categories}>
          {isLoading ? (
            <div className={styles.Loader}>
              <Loader />
            </div>
          ) : ''}
          {categories?.map(({ label, name, img }) => (
            <CategoryCard key={name} title={label} to={name} img={img} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Categories;
