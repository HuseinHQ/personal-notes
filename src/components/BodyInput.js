import React from "react";

class BodyInput extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: "",
      content: ""
    }

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onContentChangeEventHandler = this.onContentChangeEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event){
    this.setState(() => {
      return{
        title: event.target.value
      }
    })
  }

  onContentChangeEventHandler(event){
    this.setState(() => {
      return{
        content: event.target.value
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  render(){
    return(
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h2>Buat Catatan</h2>
        <input type="text" placeholder="Judul Catatan" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
        <textarea placeholder="Isi Catatan" value={this.state.content} onChange={this.onContentChangeEventHandler} />
        <button type="submit">Buat</button>
      </form>
    );
  }
}

export default BodyInput;