import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Login from './Component/Login'
import Buyer from './Component/Buyer'
import Seller from './Component/Seller'
import Home from './Component/Home'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Seller" element={<Seller />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
