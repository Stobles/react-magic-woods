import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { Formik } from 'formik';
import * as yup from 'yup';

import Image from '@comp/UI/Image';

import { useDispatch, useSelector } from 'react-redux';
import { loginBg } from '@assets';
import styles from './Login.module.scss';
import Form from './Form';
import { fetchUserLogin, fetchUserLoginWithGoogle, fetchUserRegistration } from '../../redux/thunks/fetchUser';
import { toast } from 'react-toastify';

const registerSchema = yup.object().shape({
  firstName: yup.string().required('Введите значение'),
  lastName: yup.string().required('Введите значение'),
  email: yup.string().email('Неправильный E-mail').required('Введите значение'),
  password: yup
    .string()
    .required('Введите значение')
    .min(8, 'Пароль слишком короткий - должен содержать 8 символов.')
    .matches(/[a-zA-Z]/, 'Пароль должен состоять из латинских букв.'),
});

const loginSchema = yup.object().shape({
  email: yup.string().email('Неправильный E-mail').required('Введите значение'),
  password: yup
    .string()
    .required('Введите значение')
    .min(8, 'Пароль слишком короткий - должен содержать 8 символов.')
    .matches(/[a-zA-Z]/, 'Пароль должен состоять из латинских букв.'),
});

const initialValuesRegister = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const initialValuesLogin = {
  email: '',
  password: '',
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [pageType, setPageType] = useState('register');
  const isLogin = pageType === 'login';
  const isRegister = pageType === 'register';

  const register = async (values, onSubmitProps) => {
    const res = await dispatch(fetchUserRegistration(values));
    onSubmitProps.resetForm();
    if (res) {
      toast.success('Регистрация успешна.');
      setPageType('login');
    }
  };
  const login = async (values) => {
    dispatch(fetchUserLogin(values));
  };

  const handleBackwardClick = () => {
    navigate('/');
  };

  const handleGoogleLogin = async () => {
    dispatch(fetchUserLoginWithGoogle());
  };

  const handleFormSubmit = async (values, onSubmitProps) => {
    if (isLogin) await login(values);
    if (isRegister) await register(values, onSubmitProps);
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <div className={styles.Login}>
      <div className={styles.FormWrapper}>
        <div className={styles.Form}>
          <div className={styles.Header}>
            <h2 className={styles.Title}>Добро пожаловать</h2>
            <div className={styles.Subtitle}>Введите данные своего аккаунта или зарегистрируйтесь</div>
          </div>
          <Form
            handleFormSubmit={handleFormSubmit}
            handleBackwardClick={handleBackwardClick}
            isLogin={isLogin}
            isRegister={isRegister}
            initialValuesLogin={initialValuesLogin}
            initialValuesRegister={initialValuesRegister}
            loginSchema={loginSchema}
            registerSchema={registerSchema}
          />
          <div className={styles.Separator}>
            <span className={styles.SeparatorText}>или</span>
          </div>
          <button
            type='button'
            className={styles.Button}
            onClick={handleGoogleLogin}
          >
            <FcGoogle size={27} />
            <span>Войти с помощью Google</span>
          </button>
          <div className={styles.Question}>
            <span>{isLogin ? 'Еще нет аккаунта?' : 'Есть аккаунт?'}</span>
            <button
              className={styles.ChangeButton}
              type='button'
              aria-label='Change page type'
              onClick={() => setPageType(isLogin ? 'register' : 'login')}
            >
              {isLogin ? 'Создать' : 'Войти'}
            </button>
          </div>
        </div>
      </div>
      <div className={styles.ImageWrapper}>
        <Image src={loginBg} />
      </div>
    </div>
  );
};
export default Login;
