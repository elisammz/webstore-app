import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

//Context
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";

//Components
import BrandButton from "../components/styles/BrandButton.styled";

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
    <section>
      <div>
        <img src={url} alt={title} width="300" />
      </div>
      <div>
        <h2>{title}</h2>
        <p2>{description}</p2>
        <h3>Price - ${price}</h3>

        <button
          onClick={() => {
            addToCart({ ...product, id });
            navigate("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
