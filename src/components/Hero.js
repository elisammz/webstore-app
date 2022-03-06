import React from "react";

//Components
import { StyledHeader } from "./styles/Header.styled";
import BrandButton from "./styles/BrandButton.styled";

export default function Hero() {
  return (
    <>
      <StyledHeader className=" flex-lg-row">
        <h1>Technology that saves lives</h1>
        <h2>Next generation of algorithms for accurate genotype prediction</h2>

        <BrandButton primary to="/products">
          View products
        </BrandButton>
      </StyledHeader>
      <br />
    </>
  );
}
