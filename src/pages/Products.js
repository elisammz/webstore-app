import React, { useContext } from "react";
//Context
import { ProductContext } from "../context/products";
// Components
import BrandButton from "../components/styles/BrandButton.styled";

const Products = () => {
  const { products } = useContext(ProductContext);

  if (!products.length) {
    return (
      <>
        <h2>No Products Available 🛠</h2>
      </>
    );
  }

  return (
    <>
      <section className="d-lg-flex justify-content-around p-5">
        {products.map(({ image: image, title, id }) => (
          <div key={id} className="text-center">
            <div>
              <img src={image} alt={title} width="300" />
            </div>
            <BrandButton secondary to={`products/${id}`}>
              Details
            </BrandButton>
          </div>
        ))}
      </section>
    </>
  );
};

export default Products;
