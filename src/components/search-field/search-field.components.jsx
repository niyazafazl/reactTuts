import React from 'react';

import './search-field.styles.css';

// this is the functional component, it dont have access to constructor or state and life cycle methods. 
//when to use functional component is, Sometimes we dont want to use the life cycle mthods or the state of the app and just want to use some HTML.
// its the compoenent it just get some props and return some HTML

// if we dont want to use this compoinent in any other compoenent then dont want to use 'export' keyword
export const SearchBox = ({placeholder, handleChange}) => (  //here destructure the props object here and passed the props properties as argument
     <input className="search" type="serach" placeholder={placeholder} onChange={handleChange}
     // onChange={e =>
     //      this.setState({searchField: e.target.value}
          //   , () => {
          //   console.log(this.state);
          // });
          // console.log('out state ', this.state);// here prints for first letter //searchField:"", 2nd letter if say p //searchField:"p".this is bcoz of ansynhronous. to oversome this in react, do callback function inside this.setState
     //    }
        />
)