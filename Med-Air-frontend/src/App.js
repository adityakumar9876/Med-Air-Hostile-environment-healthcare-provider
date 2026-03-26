import React from "react";
import { Routes, Route } from "react-router-dom";

// Global CSS
import "./index.css";
import "./App.css";

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import PaymentConfirmation from "./pages/PaymentConfirmation/PaymentConfirmation";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<PaymentConfirmation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;