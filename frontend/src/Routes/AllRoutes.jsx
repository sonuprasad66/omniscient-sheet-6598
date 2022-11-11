import React from "react";
import { Route, Routes } from "react-router-dom";
import { Address } from "../Components/CartPage/Addresspage";
import { Cart } from "../Components/CartPage/Cart";
import { Summary } from "../Components/CartPage/Summarypage";
import Home from "../Components/HomePage/Home";
import { Login } from "../Components/LoginSignupPage/Login";
import { Signup } from "../Components/LoginSignupPage/Signup";
import ProductDetails from "../Components/ProductsDetailsPage/ProductsDetails";
import { Products } from "../Components/ProductsPage/Products";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address-page" element={<Address />} />
        <Route path="/summary-page" element={<Summary />} />
      </Routes>
    </div>
  );
};
