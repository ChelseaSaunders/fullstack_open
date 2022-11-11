const ContactList = (props) => {
  let contacts = props.displayedContacts;
  return contacts.map(contact => {
    return (<p key={contact.id}>{contact.name} {contact.number}</p>);
    });
};

export default ContactList;