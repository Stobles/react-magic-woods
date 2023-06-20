import * as yup from 'yup';
import * as emailjs from 'emailjs-com';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@comp/UI/Button';
import { fetchClearBasket } from '@thunks/fetchBasket';
import { ContactForm, PriceForm } from './Forms';
import { Orders } from './Orders';
import OrderService from '../../services/OrderService';

import styles from './Basket.module.scss';

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const formSchema = yup.object().shape({
  name: yup.string().required('Введите значение'),
  telephone: yup
    .string()
    .matches(phoneRegExp, 'Введен неверный номер телефона')
    .required('Введите значение'),
  email: yup.string().email('Неправильный E-mail').required('Введите значение'),
});

const initialValues = {
  name: '',
  telephone: '',
  email: '',
};

const Basket = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, basket } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = basket.reduce(
    (acc, value) => acc + value.price * value.amount,
    0,
  );
  const totalProducts = basket.reduce((acc, value) => acc + value.amount, 0);
  const totalSale = basket.reduce(
    (acc, value) => acc + value.price * value.sale * value.amount,
    0,
  );

  const handleFormSubmit = (values, onSubmitProps) => {
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ORDER_ID,
        values,
        import.meta.env.VITE_USER_ID,
      )
      .then(() => {
        setIsLoading(false);
        onSubmitProps.resetForm();
        const order = {
          id: Date.now(),
          name: values.name,
          email: values.email,
          isDone: 'Доставляется',
          products: [...basket],
        };
        OrderService.addOrder(order, user.id);
        toast.success('Заказ совершен');
        dispatch(fetchClearBasket(user.id));
      })
      .catch((e) => {
        toast.error(e.text);
        setIsLoading(false);
      });
  };

  const handleClear = () => {
    dispatch(fetchClearBasket(user.id));
  };

  return (
    <section className={styles.Basket}>
      <div className='container'>
        <div className={styles.Inner}>
          <div className={styles.Orders}>
            <div className={styles.Header}>
              <h3 className={styles.Title}>Название товара</h3>
              <h3 className={styles.Title}>Цена</h3>
              <h3 className={styles.Title}>Количество</h3>
              <h3 className={styles.Title}>Всего</h3>
            </div>
            <div className={styles.Content}>
              <Orders products={basket} />
            </div>
            <div className={styles.Buttons}>
              <Button onClick={() => navigate('/')}>На главную</Button>
              <Button onClick={handleClear}>Очистить</Button>
            </div>
          </div>
          <div className={styles.Forms}>
            <div className={styles.Header}>
              <h3 className={styles.Title}>К оплате</h3>
            </div>
            <PriceForm
              totalPrice={totalPrice}
              totalProducts={totalProducts}
              totalSale={totalSale}
            />
            <div className={styles.Contact}>
              <ContactForm
                handleFormSubmit={handleFormSubmit}
                formSchema={formSchema}
                initialValues={initialValues}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Basket;
