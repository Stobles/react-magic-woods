import { Formik } from 'formik';
import Button from '@comp/UI/Button';

import { Input } from '@comp/UI/Input';
import { useState } from 'react';
import styles from './Forms.module.scss';
import Loader from '@comp/UI/Loader';

export const ContactForm = ({ handleFormSubmit, initialValues, formSchema, isLoading }) => {
  let me
  return (
    <div className={styles.FormWrapper}>
      {isLoading ? (
        <div className={styles.Loader}>
          <Loader />
        </div>
      ) : ''}
      <div className={styles.Header}>
        <h3>Ваши данные</h3>
      </div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={formSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className={styles.Form} onSubmit={handleSubmit}>
            <Input
              title='Имя'
              type='text'
              placeholder='Имя'
              name='name'
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
              errors={Boolean(touched.name) && errors.name}
            />
            <Input
              title='Email'
              type='email'
              placeholder='Email'
              name='email'
              autoComplete='off'
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
              className={styles.Input}
              errors={Boolean(touched.email) && errors.email}
            />
            <Input
              title='Телефон'
              type='number'
              placeholder='Телефон'
              name='telephone'
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.telephone}
              className={styles.Input}
              errors={Boolean(touched.telephone) && errors.telephone}
            />
            <div className={styles.Button}>
              <Button isFull isSubmit>Заказать</Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export const PriceForm = ({ totalPrice, totalProducts, totalSale }) => (
  <form className={styles.FormWrapper}>
    <div className={styles.Header}>
      <h3>Сумма оплаты</h3>
      <div className={styles.Total}>{totalPrice} руб.</div>
    </div>
    <div className={styles.Calculate}>
      <div className={styles.Result}>
        <span>Товары, {totalProducts} шт.</span>
        <span>{totalPrice} руб.</span>
      </div>
      <div className={styles.Result}>
        <span>Скидка</span>
        <span>- {totalSale} руб.</span>
      </div>
    </div>
  </form>
);
