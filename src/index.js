import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './pages/tela-login/login';
import LoginPage from './pages/tela-login/loginApp';
import HomePage from './pages/HomePage';
import AppRoutes from './appRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < AppRoutes/>
    {/* <LoginPage /> */}
    {/* <App /> */}
  </React.StrictMode>
);


