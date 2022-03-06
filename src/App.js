import React from "react";
import { Routes, Route } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin";
//Bootstrap classes
import "bootstrap/dist/css/bootstrap.min.css";
//Font styles
import "./App.css";
// Components
import Navbar from "./components/styles/Navbar.styled";
// Amplify Configurations
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import GlobalStyles from "./components/styles/Global";

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Navbar />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
