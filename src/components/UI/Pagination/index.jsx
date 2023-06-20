import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import styles from './Pagination.module.scss';

const Pagination = ({
  fetchProducts,
  products,
  isLoading,
  totalPages,
  page,
  limit,
}) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;

  return (
    <div className={styles.Pagination}>
      <button
        onClick={() => fetchProducts(limit, products[0], 'prev')}
        type='button'
        disabled={isFirstPage || isLoading}
        className={
          isFirstPage || isLoading
            ? `${styles.Button} ${styles.Disabled}`
            : styles.Button
        }
      >
        <FiChevronLeft />
      </button>
      <div className={styles.Pages}>
        {page} из {totalPages}
      </div>
      <button
        onClick={() => fetchProducts(limit, products[products.length - 1], 'next')}
        type='button'
        disabled={isLastPage || isLoading}
        className={
          isLastPage || isLoading
            ? `${styles.Button} ${styles.Disabled}`
            : styles.Button
        }
      >
        <FiChevronRight />
      </button>
    </div>
  );
};
export default Pagination;
