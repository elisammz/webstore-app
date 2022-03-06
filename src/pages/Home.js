import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Context
import { ProductContext } from "../context/products";

// Components
import Hero from "../components/Hero";
import BrandButton from "../components/styles/BrandButton.styled";

const Home = () => {
  const { featured } = useContext(ProductContext);

  if (!featured.length) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <Hero />
      <section className="d-lg-flex justify-content-around">
        {featured.map(({ image, title, id }) => (
          <div key={id} className="text-center pb-5">
            <div>
              <img src={image} alt={title} width="300" />
            </div>
            <h3>{title}</h3>
            <p>
              <Link to={`products/${id}`}>More</Link>
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
