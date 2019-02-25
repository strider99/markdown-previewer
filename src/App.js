import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import marked from 'marked';

class App extends Component {
  state = {
    rawMarkdown : '',
    convertedHtml: ''
  }

  editorChangeHandler = (e) => {
    // console.log(e.target.value);
    let typedInput = e.target.value;
    let convertedHtml = marked(typedInput);
    console.log(convertedHtml);
    this.setState({convertedHtml});
  }
  render() {
    return (
      <div className="App row">
        <Editor editorChangeHandler={this.editorChangeHandler} />
        <Preview convertedHtml={this.state.convertedHtml} />
      </div>
    );
  }
}

export default App;
