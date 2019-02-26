import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import marked from 'marked';

class App extends Component {
  state = {
    rawMarkdown : '',
    resultHtml: ''
  }

  editorChangeHandler = (e) => {
    // console.log(e.target.value);
    let typedInput = e.target.value;
    // const tokens = marked.lexer(typedInput);
    // const convertedHtml = marked.parser(tokens);
    // typedInput =
    // let convertedHtml = marked(typedInput, {gfm: true, sanitize: true});
    let convertedHtml = marked(typedInput);
    console.log(convertedHtml);
    // let res = this.createMarkup(convertedHtml);
    // console.log(res);
    this.setState({
      convertedHtml
    })
  }

  // createMarkup = (convertedHtml) => {
  //   return {__html: convertedHtml}
  // }

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
