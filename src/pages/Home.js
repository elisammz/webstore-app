import React from "react";
// Components
import Hero from "../components/Hero";
import StoriesCarousel from "../components/StoriesCarousel";
import FullDescriptions from "../components/DescriptionSection";
import ProductsButtons from "../components/styles/ProductsButtonStyled";

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsButtons />
      <FullDescriptions />
      <StoriesCarousel />
    </>
  );
};

export default Home;
