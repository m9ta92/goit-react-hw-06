import css from './App.module.css';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
	selectContacts,
	addContact,
	deleteContact,
} from '../../redux/contactsSlice';
// import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

function App() {
	const contacts = useSelector(selectContacts);
	const dispatch = useDispatch();
	const [filter, setFilter] = useState('');
	// const filter = useSelector(selectNameFilter);

	// ↓ Add contact ↓
	const onAddContact = formData => {
		const finalContact = {
			...formData,
			id: nanoid(),
		};
		dispatch(addContact(finalContact));
	};

	// ↓ Delete contact ↓
	const onDeleteContact = profileId => {
		dispatch(deleteContact(profileId));
		// const updatedContact = contacts.filter(contact => contact.id !== profileId);
		// setContacts(updatedContact);
	};

	// ↓ Function to update the filter ↓
	const handleChange = event => {
		setFilter(event.target.value);
	};

	// ↓ Filtering contact ↓
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
