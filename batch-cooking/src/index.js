import React from 'react';
import ReactDOM from 'react-dom/client';

import './styling/index.scss';
import './styling/Navbar.scss';
import './styling/CookingGroup.scss';

import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
