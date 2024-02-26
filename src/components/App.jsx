import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [newNote, setNewNote] = useState([]);

  function addNote(noteContent) {
    setNewNote((prevNotes) => {
      return [...prevNotes, noteContent];
    });
  }

  function deleteNote(id) {
    setNewNote((prevNotes) => {
      return prevNotes.filter((noteContent, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <div class="main">
      <CreateArea onAdd={addNote} />
      {newNote.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onDelete={deleteNote}
        />
      ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
