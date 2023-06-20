import { useState } from 'react';
import { BsCheck } from 'react-icons/bs';

import styles from './Checkbox.module.scss';

const Checkbox = ({ label, value, checked, dispatchFilter, filterName }) => {
  const defaultChecked = checked || false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div>
      <label className={styles.Wrapper}>
        <div className={isChecked ? `${styles.CheckboxWrapper} ${styles.Checked}` : styles.CheckboxWrapper}>
          <input
            className={styles.Checkbox}
            type='checkbox'
            checked={isChecked}
            onChange={() => {
              setIsChecked((prev) => !prev);
              dispatchFilter({ type: filterName, filter: value });
            }}
          />
          <BsCheck className={styles.Icon} size={18} />
        </div>
        <span className={styles.Label}>{label}</span>
      </label>
    </div>
  );
};
export default Checkbox;
