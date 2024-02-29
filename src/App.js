import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Products from './components/products';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <div >
      {/* <Todolist></Todolist> */}
       <Header></Header>
        <Products></Products>
        {/* <Counter></Counter> */}
       
        
      </div>
    </Provider>

  );
}

export default App;
