import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';

import Contact from '../Contact/Contact';

import css from './ContactList.module.css';

const ContactList = () => {
	const contacts = useSelector(selectContacts);

	return (
		<div>
			<ul className={css.contacts}>
				{contacts.map(contact => (
					<li key={contact.id}>
						<Contact
							id={contact.id}
							name={contact.name}
							number={contact.number}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactList;
