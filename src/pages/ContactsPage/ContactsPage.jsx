import styles from './ContactsPage.module.css';
import ContactForm from '../../components/ContactForm/ContactForm';
// import Filter from '../../components/Filter/Filter';
import ContactList from '../../components/ContactList/ContactList';

const ContactsPage = () => {
  return (
    <div className={styles.container}>
      <h1>📜 Магічні Контакти</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
