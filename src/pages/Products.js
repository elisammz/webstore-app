import React, { useContext } from "react";
//Context
import { ProductContext } from "../context/products";
// Components
import ProductsButtons from "../components/styles/ProductsButtonStyled";
//MUI

const Products = () => {
  const { products } = useContext(ProductContext);

  if (!products.length) {
    return (
      <>
        <h2>No Products Available 🛠</h2>
      </>
    );
  }

  return <ProductsButtons />;
};

export default Products;
