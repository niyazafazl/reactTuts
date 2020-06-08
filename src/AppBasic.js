import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App1 extends Component {
  constructor() {
    super(); // we inherit fromthe reat component
    this.state = { //this.state is in the Componeent we are extending that proeprty to App
      greeting: 'Hello Niyaza'
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{ this.state.greeting }</h2>
        </div>
        <button onClick={()=>this.setState({greeting: 'Hello Faz'})}> Click here</button>
      </div>
    );
  }
}

export default App1;
