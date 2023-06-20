import Select from 'react-select';
import { Heading } from '@comp/UI/Heading';
import Pagination from '@comp/UI/Pagination';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useMediaQuery } from 'react-responsive';
import { sizes } from '@assets/breakpoints';
import { useEffect, useReducer, useState } from 'react';
import { useFetching } from '@hooks/useFetching';
import { useParams } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductsFilter from './ProductsFilter';
import styles from './Store.module.scss';
import ProductService from '../../services/ProductService';
import { productsRef } from '../../configs/firebase.config';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const selectStyles = {
  control: (style) => ({
    ...style,
    width: '150px',
    minHeight: '30px',
    height: '30px',
    cursor: 'pointer',
    outline: 'none',
  }),
  indicatorSeparator: (style) => ({
    ...style,
    display: 'none',
  }),
  dropdownIndicator: (style) => ({
    ...style,
    padding: '5px',
  }),
};

const filtersInitialState = { category: [], sales: [], material: [] };

function filtersReducer(state, action) {
  switch (action.type) {
    case 'category':
      // eslint-disable-next-line no-case-declarations
      const indexCat = state.category.indexOf(action.filter);
      if (!(indexCat === -1)) {
        const filteredCategory = state.category.filter(
          (elem) => elem !== action.filter,
        );
        return {
          ...state,
          category: filteredCategory,
        };
      }
      return { ...state, category: [...state.category, action.filter] };
    case 'sales':
      // eslint-disable-next-line no-case-declarations
      const indexSale = state.sales.indexOf(action.filter);
      if (!(indexSale === -1)) {
        const filteredSales = state.sales.filter(
          (elem) => elem !== action.filter,
        );
        return {
          ...state,
          sales: filteredSales,
        };
      }
      return { ...state, sales: [...state.sales, action.filter] };
    case 'material':
      // eslint-disable-next-line no-case-declarations
      const indexMat = state.material.indexOf(action.filter);
      if (!(indexMat === -1)) {
        const filteredMaterial = state.material.filter(
          (elem) => elem !== action.filter,
        );
        return {
          ...state,
          material: filteredMaterial,
        };
      }
      return { ...state, material: [...state.material, action.filter] };
    default:
      break;
  }
}

const Store = () => {
  const lim = 2;
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filters, dispatch] = useReducer(filtersReducer, filtersInitialState);
  const [isActiveFilter, setIsActiveFilter] = useState(false);
  const [fetchProducts, isLoading, error] = useFetching(
    async (limit, filter) => {
      const response = await ProductService.getAll(limit, filter);
      setProducts([...response.products]);
      setCount(response.count);
    },
  );
  const isMobile = useMediaQuery({ query: `(max-width: ${sizes.tablet})` });

  const [fetchProductsPagination, isPaginationLoading, paginationError] = useFetching(async (lim, item, type = '') => {
    let response;
    if (type === 'next') {
      response = await ProductService.getNext(lim, item, filters);
      if (response.length) {
        console.log('да');
        setProducts([...response]);
        setPage((prev) => prev + 1);
      }
    } else {
      response = await ProductService.getPrev(lim, item, filters);
      if (response.length) {
        setProducts([...response]);
        setPage((prev) => prev - 1);
      }
    }
  });

  const handleApplyFilters = () => {
    fetchProducts(lim, filters);
  };

  useEffect(() => {
    dispatch({ type: 'category', filter: category });
    fetchProducts(lim, { category: [category], sales: [], material: [] });
  }, []);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  return (
    <section className={styles.Section}>
      <div className='container'>
        <div className={styles.Header}>
          <div className={styles.Text}>
            <Heading title='Каталог товаров' />
            <div className={styles.Count}>Всего позиций: {count}</div>
          </div>
          <div className={styles.Select}>
            <span>Сортировать по</span>
            <Select options={options} styles={selectStyles} />
          </div>
        </div>
        {isMobile && (
          <button
            onClick={() => setIsActiveFilter(true)}
            type='button'
            className={styles.Button}
          >
            Открыть фильтр
          </button>
        )}
        <div className={styles.Inner}>
          <div
            className={
              isActiveFilter
                ? `${styles.Filter} ${styles.Active}`
                : styles.Filter
            }
          >
            {isMobile && (
              <div
                onClick={() => setIsActiveFilter(false)}
                className={styles.Close}
              />
            )}
            <ProductsFilter
              defaultCheckedCategory={category}
              dispatchFilter={dispatch}
              handleApplyFilters={handleApplyFilters}
            />
          </div>
          <div className={styles.List}>
            <ProductsList products={products} />
          </div>
          <div className={styles.Pagination}>
            <Pagination
              fetchProducts={fetchProductsPagination}
              isLoading={isPaginationLoading}
              products={products}
              page={page}
              totalPages={Math.ceil(count / lim)}
              limit={lim}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Store;
