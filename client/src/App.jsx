import React from "react";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import Auth from "./components/Auth/Auth";
import AuthPage from "./pages/AuthPage";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Reviews from "./components/Reviews/Reviews";
import Dialog from "./components/Modals/Dialog/Dialog";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </>
  );
};

export default App;
