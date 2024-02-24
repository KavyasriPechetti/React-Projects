import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Counter from './counter';
import Home from './home';
import Todolist from './todolist';
import Countries from './countries';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CountryDetails from './countryDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      
      {
        path:"home",          
        element:<Home></Home>
      },
      {
        path:"counter",          // slash / always points to localhost 3000
        element:<Counter></Counter>
      },
      {
        path:"todolist",          
        element:<Todolist></Todolist>
      },
      {
        path:"countries",
        element:<Countries></Countries>,
        children:[
          {
            path:"details/:cname",
            element:<CountryDetails></CountryDetails>
          }

        ]
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
