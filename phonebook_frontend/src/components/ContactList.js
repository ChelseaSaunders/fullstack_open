const ContactList = (props) => {
  let contacts = props.displayedContacts;
  let listItems =  contacts.map(contact => {
    return (
      <li key={contact.id}>
        {contact.name} {contact.number} <button
          onClick={props.handleClick}
          value={contact.id}>
          Delete Contact
        </button>
      </li>
    );
  });

  return (<ul>{listItems}</ul>);
};

export default ContactList;