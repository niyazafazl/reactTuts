import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-field/search-field.components'
import './App.css';


// this is the class compomnent
class App extends Component {
/* eslint-disable */
  constructor() {
    super(); // we inherit fromthe reat component
    this.state = { 
        monsters: [],
        searchField: ''
    }
    // this.handleChange = this.handleChange.bind(this); //one method to set the handlechange method
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users})); // set the monsters sraau to this users arr
  }

  // handleChange(e) {
  //    this.setState({searchField: e.target.value}); // this give error as cant read property setState of undefined
  // }
  /** Note: If we use the handleChange method, 'this' keyword has no context as this is not the react lifecycle method. so there are 2 ways to make that work
    1. put the handleChange method in the constructor method and explicitly set the App class contect for this method
    2. other method is to use the ES6 arrow func in the handleChange method , the unique characteristics of this is automatically bind the 'this' context when the = ()  => is declared
    */ 
  handleChange= (e)  =>{
    this.setState({searchField: e.target.value}); 
  }
  render() {
    //'this' keyword works differently inside the App class components. 'this' keyword will only inside the lifecycle methods that is extend from the 'Component'. If we use 'this' for any other non react methods this wont work
    const {monsters, searchField} = this.state; // object destructuring
    //this is same as the beloconsw declaration
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    console.log('monsters ', monsters);
    let filteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    filteredMonsters = filteredMonsters.length >= 0 ? filteredMonsters : monsters;
    
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="search monster" handleChange={this.handleChange} />
        {/* 
        this input field  we moved to searc-field component
        <input type="serach" placeholder="search monster" onChange={e =>
          this.setState({searchField: e.target.value})
          //   , () => {
          //   console.log(this.state);
          // });
          // console.log('out state ', this.state);// here prints for first letter //searchField:"", 2nd letter if say p //searchField:"p".this is bcoz of ansynhronous. to oversome this in react, do callback function inside this.setState
        }/> */}
        <CardList monsters = {filteredMonsters}/>
      </div>
    );
  }
}
 /* CardList is the component we created and the name we used here is send as the pros to the card-list-component.js file and t\whatever given inside the 
        <CardList></CardList> is taken as props.children */
export default App;
