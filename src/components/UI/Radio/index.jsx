import { useRef, useState } from 'react';

import styles from './Radio.module.scss';

const Radio = ({ label, checked, value, setValue, group }) => {
  const ref = useRef(null);
  const [isChecked, setIsChecked] = useState(checked || false);
  return (
    <label
      className={
        isChecked
          ? `${styles.RadioWrapper} ${styles.Checked}`
          : styles.RadioWrapper
      }
    >
      <input
        ref={ref}
        className={styles.Radio}
        name={group}
        type='radio'
        onChange={() => setValue(value)}
      />
      <div className={styles.Background} />
      <span className={styles.Label}>{label}</span>
    </label>
  );
};
export default Radio;
