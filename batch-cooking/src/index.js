import React from 'react';
import ReactDOM from 'react-dom/client';

import './styling/App.scss';
import './styling/CookingGroup.scss';
import './styling/Footer.scss';
import './styling/GroupInfo.scss';
import './styling/Index.scss';
import './styling/MyProfile.scss';
import './styling/MyRecipe.scss';
import './styling/Navbar.scss';
import './styling/NewRecipe.scss';
import './styling/Landing.scss';
import './styling/Oops.scss';




import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
