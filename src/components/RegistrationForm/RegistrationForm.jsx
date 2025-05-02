import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/contacts/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Імʼя обовʼязкове'),
//     email: Yup.string().email('Невірний email').required('Email обовʼязковий'),
//     password: Yup.string().min(6, 'Мінімум 6 символів').required('Пароль обовʼязковий'),
//   });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
    //   validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>
          Імʼя
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="div" className={styles.error} />
        </label>
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
        <button type="submit">Зареєструватися</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
