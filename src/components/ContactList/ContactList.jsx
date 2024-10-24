import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul className={css.contacts}>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={onDeleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
