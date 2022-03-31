import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

//Context
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";

//Components
import BrandButton from "../components/styles/BrandButton.styled";
import Navbar from "../components/styles/Navbar.styled";

const StyledProductsDetails = styled.section`
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;

  h2 {
    color: black;
  }

  .col-6 {
    text-align: center;
  }
`;

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const product = products.find((product) => {
    return product.id === id;
  });
  if (!product) {
    return <h2>Loading...</h2>;
  }

  const { image: url, title, description, price } = product;

  return (
    <>
      <Navbar />
      <StyledProductsDetails>
        <div className="row">
          <div className="col-6">
            <img src={url} alt={title} width="300" />
          </div>
          <div className="col-6" id="product-info">
            <h2>{title}</h2>
            <p2>{description}</p2>
            <h3>Price - ${price}</h3>
            <BrandButton
              secondary
              onClick={() => {
                addToCart({ ...product, id });
              }}
              to="/cart"
            >
              Add to Cart
            </BrandButton>
          </div>
        </div>
      </StyledProductsDetails>
    </>
  );
};

export default ProductDetails;
