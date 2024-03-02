import React from 'react';
import  ReactDOM  from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginForm from './LoginForm';
import "bootstrap/dist/css/bootstrap.css";

import NavBar from './navbar';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './home';
import Cart from './cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm/>,
  },
      {
        path:"/navbar",
        element:<NavBar/>
      },
      {
        path:"/home",
        element:<Home/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },

     
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
