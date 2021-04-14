import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FilmsContextProvider } from './Context/FilmsContext';


ReactDOM.render(
  <React.StrictMode>
    <FilmsContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FilmsContextProvider>

  </React.StrictMode >,
  document.getElementById('root')
);


