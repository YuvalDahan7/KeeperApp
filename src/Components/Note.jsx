import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <FontAwesomeIcon icon="fa-solid fa-trash" />
      </button>
    </div>
  );
}

export default Note;
