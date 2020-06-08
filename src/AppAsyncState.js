import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App1 extends Component {
  constructor() {
    super(); // we inherit fromthe reat component
    this.state = {
      counter: 41
    }
  }
  handleClick= () => {
    //this.setState({counter: this.state.counter + 1}); // 42 , 43
    // console.log(this.state.counter); //41 , 42
    //this.setState({counter: this.state.counter + 1}, () => console.log(this.state.counter));
    /** this work asynchronously, to make it synchronous do in the callback function*/

    // the better way of doing in the reactjs is instead of pass the object in setState, create function in that and pass the prevState and prevProps
    this.setState((prevState, prevProps) => {
      return {counter: prevState.counter + prevProps.increment} // when everytime when we set the state we can use the func with prevState arg (this prevState has the last previous state) rather than the object, 
    }, 
    ()=> console.log(this.state.counter));
  }
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{ this.state.counter }</p>
        </div>
        <button onClick={this.handleClick}> Update</button>
      </div>
    );
  }
}

export default App1;
