const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'Unmark Important' : ' Mark Important';

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
}

export default Note;