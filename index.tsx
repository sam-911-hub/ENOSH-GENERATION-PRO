
import React from 'react';
import ReactDOM from 'react-dom/client';
// Use the project's main white-theme stylesheet instead of the old Tailwind-based file
import './css/styles.css';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
