import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Login from './components/Login';         // Your styled login component
import OrdersPage from './components/OrdersPage';
import LoginWrapper from './components/LoginWrapper';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginWrapper />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  </BrowserRouter>
);
