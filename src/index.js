import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Header text="Fedback UI" bgColor="red" textColor="blue" />
    <App />
  </React.StrictMode>
);
