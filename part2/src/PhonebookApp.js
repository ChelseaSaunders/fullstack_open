import { useState, useEffect } from 'react';

import Search from './components/Search';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import contactService from './services/contacts';

const PhonebookApp = () => {
  const [contacts, setContacts] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    contactService
      .getAll()
      .then((allContacts) => setContacts(allContacts));
  }, []);

  const addContact = (event) => {
    event.preventDefault();
    let match = contacts.filter(contact => contact.name === newName).pop();

    if (match) {
      if (window.confirm(`${newName} has already been added to contacts.
      Would you like to updatethe phone number?`)) {
        const updatedContact = {...match, number: newNumber};
        contactService
          .update(match.id, updatedContact)
          .then(response => {
            setContacts(contacts.map(contact => {
              return contact.id === match.id ? response : contact;
            }));
            setNewName('');
            setNewNumber('');
          })
      }
      return;
    } else {
      const newContact = {
        name: newName,
        number: newNumber
      };

      contactService
        .create(newContact)
        .then(returnedContact => {
          setContacts(contacts.concat(returnedContact));
          setNewName('');
          setNewNumber('');
        });
    }
  };

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  }

  const displayedContacts = searchValue === '' ? contacts : contacts
    .filter((contact) => {
      return contact.name.toLowerCase().startsWith(searchValue);
  });

  const handleClick = (event) => {
    event.preventDefault();
    const id = event.target.value;
    const contactName = contacts
      .filter(contact => String(contact.id) === id)
      .pop().name;

    if (window.confirm(`Delete ${contactName}?`)) {
      contactService
        .deleteContact(id)
        .then(deletedContact => {
          console.log(deletedContact);
          alert(`${contactName} was removed from contact list.`)
          setContacts(contacts.filter(contact => {
            return String(contact.id) !== id;
          }));
        })
        .catch(deletedContact => alert(`${contactName} has already been
          removed from contact list.`));
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Search handleSearch={handleSearch} />
      <AddContact
        addContact={addContact}
        newName={newName}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        handleNewNumberChange={handleNewNumberChange}
      />

      <h2>Numbers</h2>
      <ContactList
        displayedContacts={displayedContacts}
        handleClick={handleClick}
      />
    </div>
  );
};

export default PhonebookApp;