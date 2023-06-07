import * as yup from 'yup';
import { Formik } from 'formik';

import { toast } from 'react-toastify';

import * as emailjs from 'emailjs-com';

import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { shortSocialLinks, navLinksMain, footerContacts, footerHelp } from '@assets/constants';
import { Link } from 'react-router-dom';
import SocialButton from '@comp/UI/SocialButton';
import styles from './Footer.module.scss';

const formSchema = yup.object({
  email: yup.string().email('Неправильный E-mail').required('Введите email'),
});

const initialValues = {
  email: '',
};

const Footer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = (values, onSubmitProps) => {
    if (!values.email) {
      toast.warning('Введите значение');
      return;
    }
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        values,
        import.meta.env.VITE_USER_ID,
      )
      .then(() => {
        toast.success('Форма отправлена');
        onSubmitProps.resetForm();
        setIsLoading(false);
      })
      .catch((e) => {
        toast.error(e.text);
        setIsLoading(false);
      });
  };
  return (
    <footer className={styles.Footer}>
      <div className='container'>
        <div className={styles.Inner}>
          <div className={styles.Main}>
            <h2 className={styles.Title}>Magic Wood Map</h2>
            <Formik
              validationSchema={formSchema}
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <>
                  <form className={styles.Form} onSubmit={handleSubmit}>
                    <input
                      id='email'
                      type='email'
                      placeholder='Ваш email'
                      name='email'
                      autoComplete='off'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className={styles.Input}
                    />
                    <button type='submit' className={styles.Button}>
                      {isLoading ? <ClipLoader color='#FFFFFF' /> : 'Отправить'}
                    </button>
                  </form>
                  <div className={styles.Err}>
                    {errors.email && touched.email && errors.email}
                  </div>
                </>
              )}
            </Formik>
            <ul className={styles.Links}>
              {shortSocialLinks.map(({ Icon, to }) => (
                <SocialButton key={to} to={to} Icon={Icon} />
              ))}
            </ul>
            <div className={styles.Copyright}>©2022, Magic Wood Map</div>
          </div>
          <div className={styles.Nav}>
            <div className={styles.Links}>
              <h3 className={styles.Title}>Меню</h3>
              <ul className={styles.List}>
                {navLinksMain.map(({ name, to }) => (
                  <li className={styles.Item} key={to}>
                    <Link className={styles.Link} to={to}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.Contacts}>
              <h3 className={styles.Title}>Контакты</h3>
              <ul className={styles.List}>
                {footerContacts.map(({ subtitle, contacts }) => (
                  <li key={subtitle} className={styles.Item}>
                    <h6 className={styles.Subtitle}>{subtitle}</h6>
                    <div className={styles.Links}>
                      <a className={styles.Link} href={`tel:${contacts.phone}`}>{contacts.phone}</a>
                      <a className={styles.Link} href={`mailto:${contacts.email}`}>{contacts.email}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.Help}>
              <h3 className={styles.Title}>Страницы</h3>
              <ul className={styles.List}>
                {footerHelp.map(({ name, to }) => (
                  <li className={styles.Item} key={to}>
                    <Link className={styles.Link} to={to}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
