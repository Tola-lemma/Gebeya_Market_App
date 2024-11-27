import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import AllRoute from './routes';
import {CartProvider} from './Pages/CartsPages/CartContext'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <AllRoute />
      </Router>
    </CartProvider>
  </React.StrictMode>
);
// reportWebVitals();
