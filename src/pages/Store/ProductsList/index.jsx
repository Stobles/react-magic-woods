import { Link, useNavigate } from 'react-router-dom';
import Image from '@comp/UI/Image';
import Button from '@comp/UI/Button';
import styles from './ProductsList.module.scss';

const ProductCard = ({
  id,
  previewImage,
  title,
  category,
  price,
  sale,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <li className={styles.Card}>
      <Link className={styles.ImageLink} to={id}>
        <Image
          className={styles.Image}
          src={`/src/assets/images/Products/${category}/${id}/${previewImage}`}
        />
      </Link>
      <div className={styles.Content}>
        <Link to={id}>
          <h4 className={styles.Title}>{title}</h4>
        </Link>
        <div className={styles.Prices}>
          <span className={styles.Price}>
            {sale ? price - price * (sale / 100) : price} руб
          </span>
          {sale ? <span className={styles.Old}>{price} руб</span> : ''}
        </div>
        <div className={styles.Description}>{description}</div>
        <div className={styles.Button}>
          <Button onClick={() => navigate(id)} isInverted isFull maxWidth={140}>
            Купить
          </Button>
        </div>
      </div>
    </li>
  );
}

const ProductsList = ({ products }) => (
  <ul className={styles.Products}>
    {!products.length ? <h4 className={styles.Empty}>Товары не найдены!</h4> : ''}
    {products.map(({ id, previewImage, name, category, price, sale, description }) => (
      <ProductCard
        id={id}
        key={name}
        previewImage={previewImage}
        category={category}
        title={name}
        price={price}
        sale={sale}
        description={description}
      />
    ))}
  </ul>
);
export default ProductsList;
