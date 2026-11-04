import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import {BrowserRouter} from "react-router-dom"
import './index.scss';
import App from './App';
import "./App.css"
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';



const app = (
  <React.StrictMode>
    <BrowserRouter basename="/" >
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
