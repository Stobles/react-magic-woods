import Button from '@comp/UI/Button';
import Checkbox from '@comp/UI/Checkbox';
import styles from './ProductsFilter.module.scss';

const categoryValues = [
  { name: 'Однослойные карты', value: 'one_layer' },
  { name: 'Многослойные карты', value: 'multi_layer' },
  { name: 'Карты из массива дерева', value: 'full_wood' },
  { name: 'Аксессуары', value: 'accessories' },
];

const saleValues = [
  { name: 'Скидка 10%', value: 10 },
  { name: 'Скидка 20%', value: 20 },
];

const materialValues = [
  { name: 'Фанера', value: 'wood' },
];
const FilterCheckbox = ({ title, values, defaultChecked, dispatchFilter, filterName }) => (
  <div>
    <div className={styles.Header}>
      <h3 className={styles.Title}>{title}</h3>
    </div>
    {values.map(({ name, value }) => (
      <Checkbox key={value} label={name} value={value} checked={defaultChecked === value} dispatchFilter={dispatchFilter} filterName={filterName} />
    ))}
  </div>
);

const ProductsFilter = ({ defaultCheckedCategory, dispatchFilter, handleApplyFilters }) => (
  <div className={styles.Filter}>
    <div className={styles.Inner}>
      <FilterCheckbox title='Категория' values={categoryValues} defaultChecked={defaultCheckedCategory} dispatchFilter={dispatchFilter} filterName='category' />
      <div className={styles.Button}>
        <Button isFull onClick={handleApplyFilters}>
          Применить
        </Button>
      </div>
    </div>
  </div>
);
export default ProductsFilter;
