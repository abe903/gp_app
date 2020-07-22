import React from 'react';
import '../App.css';

function Navbar(props) {
  console.log(props);
  return (
    <div className="App">
      <h2>This is Navbar {props.name}</h2>
    </div>
  );
}

export default Navbar;
