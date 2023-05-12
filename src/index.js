import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './components/context/AuthContext';
import { AuthUpdataContextProvider } from './components/context/AuthUpdataContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AuthUpdataContextProvider>
       <App />
      </AuthUpdataContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
);


