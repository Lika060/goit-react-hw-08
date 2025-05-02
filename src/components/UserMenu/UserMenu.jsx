import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/contacts/selectors';
import { logout } from '../../redux/contacts/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div className={styles.menu}>
      <p className={styles.name}>Welcome, {name}!</p>
      <button className={styles.button} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
