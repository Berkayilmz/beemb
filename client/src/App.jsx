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
import UserPage from "./pages/admin/UserPage";
import CategoryPage from "./pages/admin/Categories/CategoryPage";
import UpdateCategoryPage from "./pages/admin/Categories/UpdateCategoryPage";
import CreateCategoryPage from "./pages/admin/Categories/CreateCategoryPage";
import CreateProductPage from "./pages/admin/Products/CreateProductPage";
import ProductPage from "./pages/admin/Products/ProductPage";
import UpdateProductPage from "./pages/admin/Products/UpdateProductPage";
import CouponPage from "./pages/admin/Coupons/CouponPage";
import CreateCouponPage from "./pages/admin/Coupons/CreateCouponPage";
import UpdateCouponPage from "./pages/admin/Coupons/UpdateCouponPage";
import Success from "./pages/Succes";

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
        <Route path="/success" element={<Success />} />
        <Route path="/admin/*">
          <Route path="users" element={<UserPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route
            path="categories/update/:id"
            element={<UpdateCategoryPage />}
          />

          <Route path="categories/create" element={<CreateCategoryPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="products/create" element={<CreateProductPage />} />
          <Route path="products/update/:id" element={<UpdateProductPage />} />
          <Route path="coupons" element={<CouponPage />} />
          <Route path="coupons/create" element={<CreateCouponPage />} />
          <Route path="coupons/update/:id" element={<UpdateCouponPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
