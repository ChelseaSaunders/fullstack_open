import { useState, useEffect } from 'react';

import Note from './components/Note'
import Notification from './components/Notification';
import noteService from './services/notes';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);
  const [errorMessage, setErrorMessage] = useState('error');

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes));
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('');
      });
  };

  const handleNewNoteChange = (event) => setNewNote(event.target.value);
  const notesToShow = showAll ? notes : notes.filter(note => note.important);

  const toggleImportance = id => {
    const note = notes.find(note => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id === id ? returnedNote : note));
      })
      .catch(error => {
        setErrorMessage(
          `Note ${note.content} was already removed from server.`
        );
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000);
        setNotes(notes.filter(note => note.id !== id));
      });
  };

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'Important Only' : 'All' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportance(note.id)}
          />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNoteChange} />
        <button type="submit">Save</button>
      </form>
    </div>
  )
};

export default App;