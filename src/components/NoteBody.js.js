import React from "react";
import BodyInput from "./BodyInput";

class NoteBody extends React.Component {
  render(){
    return(
      <div className="note-app__body">
        <BodyInput />
      </div>
    );
  }
}

export default NoteBody;