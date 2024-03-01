import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';
import Products from './components/products';

function App() {
  return (
    <Provider store={store}>
      <div >
       
        <Products></Products>    
      </div>
    </Provider>

  );
}

export default App;
