import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    title: "",
    content: "",
  });
  const [isEmpty, setIsEmpty] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;
    setNoteContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  const [bool, setBool] = useState(false);

  function handleZoom() {
    setBool(true);
  }

  function handleClick() {
    const checkEmpty = !Object.values(noteContent).some(
      (x) => x !== null && x !== ""
    );
    if (checkEmpty) {
      console.log("error");
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
      props.onAdd(noteContent);
      setNoteContent({
        title: "",
        content: "",
      });
    }
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={noteContent.title}
          style={bool ? {} : { display: "none" }}
        />
        <textarea
          onClick={handleZoom}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={bool ? 3 : 1}
          value={noteContent.content}
        />
        <Zoom in={bool}>
          <Fab type="button" onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
        {isEmpty && <p className="error">Write something</p>}
      </form>
    </div>
  );
}

export default CreateArea;
