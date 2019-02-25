import React, { Component } from 'react';


export default class Editor extends Component {
  render() {
    let {editorChangeHandler} = this.props;

    return (
      <div className="col-6" >
        <h2>Editor</h2>
        <textarea name="editor" id="editor" cols="30" rows="10" onChange={editorChangeHandler} ></textarea>
      </div>
    )
  }
}
