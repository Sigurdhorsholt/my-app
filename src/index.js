

import React from 'react';
//import * as ReactDOM from "react-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './routes/About';
import Home from './routes/Home';

import {RouterProvider, createHashRouter} from 'react-router-dom'


import Pokedex from './routes/pokedex';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/about/:pokemonId',
        element: <About />,
      },
      {
        path: '/about/',
        element: <About />,
      },
      {
        path: '/pokedex',
        element: <Pokedex />
      }
    ]
  },
 
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App />
    </RouterProvider>
  </React.StrictMode>
);

