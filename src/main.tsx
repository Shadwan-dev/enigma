import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // ← Debe ser exactamente así, sin comillas extrañas

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('No se encontró el elemento con id "root"');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);