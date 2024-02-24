import './App.css';
import {Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <h1>Routing</h1>
      <Link to="home">Home</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="counter">Counter</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="todolist">Todolist</Link>
      &nbsp;&nbsp;&nbsp;
      <Link to="countries">Countries</Link>
    <Outlet></Outlet>
      
    </div>
  );
}

export default App;
