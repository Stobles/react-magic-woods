import { SubHeading, Heading, Description } from '@comp/UI/Heading';
import Image from '@comp/UI/Image';
import styles from './Advantages.module.scss';
import { personal } from '../../../assets';

const AdvantagesCard = ({ img, title, text }) => (
  <article className={styles.Card}>
    <Image className={styles.Image} src={img} alt='advanatges_img' />
    <h3 className={styles.Title}>{title}</h3>
    <p className={styles.Text}>{text}</p>
  </article>
);

const Advantages = () => {
  let me;
  return (
    <section className={styles.Section}>
      <div className='container'>
        <div className={styles.Inner}>
          <div className={styles.Info}>
            <div className={styles.Text}>
              <SubHeading title='внимание' />
              <Heading
                style={styles.Title}
                title='Изготовление изделий из фанеры'
              />
              <Description
                text={
                  `Як тільки ви знайдете те, що шукаєте, 
                  ми гарантуємо швидке оформлення замовлення 
                  та доставку. Перевірте ваш вибір сьогодні!`
                }
              />
            </div>
            <div className={styles.Cards}>
              <AdvantagesCard
                img={personal}
                title='Персонализация'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
              />
              <AdvantagesCard
                img={personal}
                title='Персонализация'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
              />
            </div>
          </div>
          <div className={styles.Cards}>
            <AdvantagesCard
              img={personal}
              title='Персонализация'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
            />
            <AdvantagesCard
              img={personal}
              title='Персонализация'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Advantages;
