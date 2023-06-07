import styles from './Heading.module.scss';

export const PageHeading = ({ title, style }) => (
  <h2
    className={style ? `${styles.PageTitle} ${style}` : styles.PageTitle}
  >
    {title}
  </h2>
);

export const Heading = ({ title, isMargin, xl, style }) => (
  <h2
    style={isMargin && { marginBottom: '50px' }}
    className={xl ? `${styles.Title} ${styles.XL} ${style && style}` : `${styles.Title} ${style && style}`}
  >
    {title}
  </h2>
);

export const SubHeading = ({ title, style }) => (
  <h3 className={style ? `${styles.Subtitle} ${style}` : styles.Subtitle}>
    {title}
  </h3>
);

export const Description = ({ text, xs, style }) => (
  <p className={xs ? `${styles.Description} ${styles.XS} ${style && style}` : `${styles.Description} ${style && style}`}>
    {text}
  </p>
);
