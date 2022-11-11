import { useState } from 'react';

const Phonebook = () => {
  const [contacts, setContacts] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchValue, setSearchValue] = useState('');

  const addContact = (event) => {
    event.preventDefault();
    let existingNames = contacts.map(contact => contact.name.toLowerCase());
    let existingNumbers = contacts.map(contact => contact.number);
    if (existingNames.includes(newName.toLowerCase())) {
      alert(`${newName} has already been added to contacts.`);
      return;
    }

    if ( existingNumbers.includes(newNumber)) {
      alert(`${newNumber} has already been added to contacts`);
      return;
    }

    const newContact = {
      name: newName,
      number: newNumber,
      id: contacts.length + 1
    };
    setContacts(contacts.concat(newContact));
    setNewName('');
  }

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);

  const handleSearch = (event) => {
    setSearchValue(event.target.value.toLowerCase());
  }

  const displayedContacts = searchValue === '' ? contacts : contacts
    .filter((contact) => {
      return contact.name.toLowerCase().startsWith(searchValue);
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        Search: <input onChange={handleSearch} />
      </form>
      <form onSubmit={addContact}>
        <div>
          Name: <input
            value={newName}
            onChange={handleNewNameChange}
          />
        </div>
        <div>
          Phone Number: <input
            value={newNumber}
            onChange={handleNewNumberChange}
          />
        </div>
        <div>
          <button type="submit">Add Contact</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {displayedContacts.map(contact => {
        return (<p key={contact.id}>{contact.name} {contact.number}</p>);
      })}
    </div>
  );
};

export default Phonebook;