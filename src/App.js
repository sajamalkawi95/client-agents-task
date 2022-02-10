
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Login from './Component/Login'
import Buyer from './Component/Buyer'
import SellerComponent from './Component/SellerComponent'
import Home from './Component/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Seller" element={<SellerComponent />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/" element={<Login />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default App;
