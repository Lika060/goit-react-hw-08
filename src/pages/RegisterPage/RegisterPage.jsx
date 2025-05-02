import styles from './RegisterPage.module.css';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegisterPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Реєстрація чарівника</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegisterPage;
