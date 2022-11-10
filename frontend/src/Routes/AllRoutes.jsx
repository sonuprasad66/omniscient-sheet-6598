import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart } from "../Components/CartPage/Cart";
import Home  from "../Components/HomePage/Home";
import { Login } from "../Components/LoginSignupPage/Login";
import { Signup } from "../Components/LoginSignupPage/Signup";
import { ProductsDetails } from "../Components/ProductsDetailsPage/ProductsDetails";
import { Products } from "../Components/ProductsPage/Products";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
