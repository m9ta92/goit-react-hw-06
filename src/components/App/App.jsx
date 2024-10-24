// imports ↓
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';

import css from './App.module.css';

function App() {
  // ↓ Array of objects ↓
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  // ↓ Initialization of data from local storage when loading a component ↓
  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  // ↓ Saving statistics to local storage every time the data changes ↓
  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  // ↓ Function to update the filter ↓
  const handleChange = event => {
    setFilter(event.target.value);
  };

  // ↓ Filtering contact ↓
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // ↓ Adding contact ↓
  const onAddContact = formData => {
    const finalContact = {
      ...formData,
      id: nanoid(),
    };

    setContacts(prevState => [...prevState, finalContact]);
  };

  // ↓ Delete contact ↓
  const onDeleteContact = profileId => {
    const updatedContact = contacts.filter(contact => contact.id !== profileId);
    setContacts(updatedContact);
  };

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
