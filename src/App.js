import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Products from './components/products';
import Cart from './components/cart';

function App() {
  return (
    <Provider store={store}>
      <div >
      {/* <Todolist></Todolist> */}
       
        <Products></Products>
        {/* <Counter></Counter> */}
        
       
        
      </div>
    </Provider>

  );
}

export default App;
