import logo from './logo.svg';
import './App.css';
import Counter from './counter';
function App() {
  return (
    <div className="App">
      <Counter cname="India" score="10" cinc="5" ></Counter>
      <Counter cname="Australia"score="200" cinc="12"></Counter>
    </div>
  );
}

export default App;
