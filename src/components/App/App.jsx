import css from './App.module.css';

import { useDispatch, useSelector } from 'react-redux';
import {
	addContact,
	deleteContact,
	selectContacts,
} from '../../redux/contactsSlice';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

function App() {
	const dispatch = useDispatch();
	const contacts = useSelector(selectContacts);
	const filter = useSelector(selectNameFilter);

	const onAddContact = formData => {
		const finalContact = {
			...formData,
			id: nanoid(),
		};
		dispatch(addContact(finalContact));
	};

	const onDeleteContact = contactId => {
		dispatch(deleteContact(contactId));
	};

	const handleChange = event => {
		dispatch(changeFilter(event.target.value));
	};

	const filteredContacts = contacts.filter(contact =>
		contact.name.toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<>
			<div className={css.app}>
				<h1>Phonebook</h1>
				<ContactForm onAddContact={onAddContact} />
				<SearchBox filterValue={filter} handleChange={handleChange} />
				<ContactList
					contacts={filteredContacts}
					onDeleteContact={onDeleteContact}
				/>
			</div>
		</>
	);
}

export default App;
