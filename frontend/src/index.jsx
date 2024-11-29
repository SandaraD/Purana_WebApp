import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SitesContextProvider } from './context/SiteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SitesContextProvider>
    <AuthContextProvider>
    <App />
    </AuthContextProvider>
    </SitesContextProvider>
  </React.StrictMode>
);

