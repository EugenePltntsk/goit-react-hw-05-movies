import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='react-homework-template'>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// 094c8fd5de10f821a95f28767be2e726

// https://api.themoviedb.org/3/movie/76341?api_key=<<api_key>>
