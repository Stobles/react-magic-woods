import * as yup from 'yup';
import { Formik } from 'formik';

import { toast } from 'react-toastify';

import * as emailjs from 'emailjs-com';

import { Heading, SubHeading } from '@comp/UI/Heading';
import Image from '@comp/UI/Image';
import { telephoneBg } from '@assets';
import { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import styles from './Telephone.module.scss';
import { Description } from '../../../components/UI/Heading';

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const formSchema = yup.object({
  number: yup.string().matches(phoneRegExp, 'Введен неверный номер телефона'),
});

const initialValues = {
  number: '',
};

const Telephone = () => {
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = (values, onSubmitProps) => {
    if (!values.number) {
      toast.warning('Введите значение');
      return;
    }
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_TELEPHONE_ID,
        values,
        import.meta.env.VITE_USER_ID,
      )
      .then(() => {
        toast.success('Форма отправлена');
      })
      .catch((e) => {
        toast.error(e.text);
      })
      .finally(() => {
        onSubmitProps.resetForm();
        setIsLoading(false);
      });
  };
  return (
    <section>
      <div className='container'>
        <div className={styles.Inner}>
          <div className={styles.Content}>
            <SubHeading title='стильное решение' />
            <Heading isMargin title='Входим в топ компаний по продажам карт' />
            <Description
              text={
                `Деревянная карта світу здатна гармонійно вписатися в дизайн вашої
                кімнати і стати тим самим елементом, що бракує, у створенні
                унікального стилю. Залиште свій номер телефону і ми передзвонимо
                Вам найближчим часом`
              }
              style={styles.Description}
              xs
            />
            <div className={styles.Inner} />
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
                      id='number'
                      type='text'
                      placeholder='Оставьте свой номер'
                      name='number'
                      autoComplete='off'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.number}
                      className={styles.Input}
                    />
                    <button type='submit' className={styles.Button}>
                      {isLoading ? <ClipLoader color='#FFFFFF' /> : 'Отправить'}
                    </button>
                  </form>
                  <div className={styles.Err}>
                    {errors.number && touched.number && errors.number}
                  </div>
                </>
              )}
            </Formik>
          </div>
          <div className={styles.Image}>
            <Image src={telephoneBg} alt='telephone_bg' />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Telephone;
