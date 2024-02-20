import logo from './logo.svg';
import React from 'react';
import './App.css';
import Counter from './counter';
import Todolist from './todolist';
function App() {

  var [x,setX]=React.useState(100);
  function damma() {
    setX(x+100);
  }
  return (
    <div className="App">
      <h1>Welcome to Edupoly:{x}</h1>
      <button onClick={()=>{damma()}}>Dishum</button>
      <Counter></Counter>
      <Todolist></Todolist>
    </div>
  );
}

export default App;
