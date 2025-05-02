import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import styles from './LoginForm.module.css';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/contacts/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email('Невірний email').required('Email обовʼязковий'),
//     password: Yup.string().min(6, 'Мінімум 6 символів').required('Пароль обовʼязковий'),
//   });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
    //   validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </label>
        <label>
          Пароль
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" className={styles.error} />
        </label>
        <button type="submit">Увійти</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
