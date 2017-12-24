import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ReactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Testing</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <output id="render-me"></output>
      </div>
    );
  }
}

/*
ReactDom.render(
  <i>Rendered</i>,
  document.getElementById('render-me')
);
*/

export default App;
