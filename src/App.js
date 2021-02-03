import logo from './logo.svg';
import './App.css';
import React,{Component, useState} from 'react';
function App() {
  

      const[my_name, changeMyName]=useState("Sakshi");
  const[my_age, changeMyage]=useState(22);

  const buttonClick=()=>
  {
    changeMyName("Sakshi Sonawane");
  }
  return(
  <div>
    <h2>
      My name is {my_name}
    </h2>
    <h2>And My Age is:{my_age}</h2>
    <button onClick={buttonClick}>Change Name</button>
    </div>
  );
}

export default App;
