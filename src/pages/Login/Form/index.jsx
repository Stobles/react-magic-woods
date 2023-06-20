import { Formik } from 'formik';

import { Input } from '@comp/UI/Input';
import Button from '@comp/UI/Button';

import styles from './Form.module.scss';

const Form = ({
  handleFormSubmit,
  handleBackwardClick,
  isLogin,
  isRegister,
  initialValuesLogin,
  initialValuesRegister,
  loginSchema,
  registerSchema,
}) => (
  <Formik
    onSubmit={handleFormSubmit}
    initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
    validationSchema={isLogin ? loginSchema : registerSchema}
  >
    {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
      <form onSubmit={handleSubmit}>
        {isRegister && (
          <>
            <Input
              title='Имя'
              name='firstName'
              type='text'
              value={values.firstName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errors={Boolean(touched.firstName) && errors.firstName}
            />
            <Input
              title='Фамилия'
              name='lastName'
              type='text'
              value={values.lastName}
              handleBlur={handleBlur}
              handleChange={handleChange}
              errors={Boolean(touched.lastName) && errors.lastName}
            />
          </>
        )}
        <Input
          title='Email'
          name='email'
          type='email'
          value={values.email}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={Boolean(touched.email) && errors.email}
        />
        <Input
          title='Пароль'
          name='password'
          type='password'
          value={values.password}
          handleBlur={handleBlur}
          handleChange={handleChange}
          errors={Boolean(touched.password) && errors.password}
        />
        <div className={styles.Buttons}>
          <Button isSubmit isFull isBold isRounded>
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </div>
      </form>
    )}
  </Formik>
);
export default Form;
