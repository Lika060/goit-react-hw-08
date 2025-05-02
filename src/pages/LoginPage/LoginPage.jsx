import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Вхід до магічної книги</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
