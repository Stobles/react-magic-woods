import styles from './Title.module.scss';

const Title = ({ title }) => (
  <section className={styles.Section}>
    <div className='container'>
      <div className={styles.Inner}>
        <h1 className={styles.Title}>{title}</h1>
      </div>
    </div>
  </section>
);
export default Title;
