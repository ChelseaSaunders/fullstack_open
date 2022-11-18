const AddContact = (props) => {
  return (
    <form onSubmit={props.addContact}>
      <div>
        Name: <input
          value={props.newName}
          onChange={props.handleNewNameChange}
        />
      </div>
      <div>
        Phone Number: <input
          value={props.newNumber}
          onChange={props.handleNewNumberChange}
        />
      </div>
      <div>
        <button type="submit">Add Contact</button>
      </div>
    </form>
  );
};

export default AddContact;