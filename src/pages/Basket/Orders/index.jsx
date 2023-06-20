import Image from '@comp/UI/Image';
import { Link } from 'react-router-dom';

import styles from './Orders.module.scss';

const OrderCard = ({ product }) => (
  <li className={styles.Card}>
    <Image
      className={styles.Image}
      src={`/src/assets/images/Products/${product.category}/${product.id}/${product.previewImage}`}
    />
    <div className={styles.Header}>
      <Link to={`/store/category/${product.id}`}>
        <h5 className={styles.Title}>{product.name}</h5>
      </Link>
      <div className={styles.Info}>Цвет: {product.color}</div>
      <div className={styles.Info}>Размер: {product.size}</div>
      <div className={styles.Price}>{product.price}</div>
    </div>
    <div className={styles.Price}>{product.price} руб</div>
    <div className={styles.QuantityWrapper}>
      <button type='button' className={styles.Char}>
        -
      </button>
      <span className={styles.Quantity}>{product.amount}</span>
      <button type='button' className={styles.Char}>
        +
      </button>
    </div>
    <div className={styles.Total}>{product.price * product.amount} руб</div>
  </li>
);

export const Orders = ({ products }) => (
  <ul className={styles.Orders}>
    {!products.length && <h4 className={styles.Empty}>Коризна пуста!</h4>}
    {products?.map((product) => (
      <OrderCard key={product.id} product={product} />
    ))}
  </ul>
);
