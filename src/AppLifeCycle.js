import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class AppLifeCycle extends Component {
  constructor() {
    super(); // we inherit fromthe reat component
    this.state = {
      showChild: true,
      text: ''
    }
  }

  componentDidMount() {
    console.log('Component did mount');
  }
  componentDidUpdate() {
    console.log('Component did update');
  }
  componentWillMount() {
    console.log('Component will mount');
  }
  componentDidMount() {
    console.log('Component did mount');
  }
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  shouldComponentUpdate(nextProps, nextState) { // based on the newProps or newState, it help to decide wethere or not should go throught hte life cycle 
    console.log('shouldComponentUpdate ', nextState);
    return nextState.text !== this.state.text;
    //if this method return true then will say react will go through the lifecycle methods. IF false means it wont go throigh the lifecycle method. 
    // when we dont want to return false means, we check the nextProps/ nectState with the current State if nothign has changed thne will say react dont go through the life cycle methods

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button onClick={() => 
            this.setState(state => 
            ({showChild: !state.showChild})
            )}> Toggle LifeCycle</button>
        </div>
        <button onClick={() => 
          this.setState(state => 
            ({ text: state.text + '_hello'})
          )}> 
          Update Text
          </button>
          {this.state.showChild ? <h1 >{this.state.text}</h1> : null}
      </div>
    );
  }
}

export default AppLifeCycle;
