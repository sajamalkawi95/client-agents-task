
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Login from './Component/Login'
import Buyer from './Component/Buyer'
import SellerComponent from './Component/SellerComponent'
import Home from './Component/Home'
import Header from './Component/Header';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Seller" element={<SellerComponent />} />
        <Route path="/Buyer" element={<Buyer />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
