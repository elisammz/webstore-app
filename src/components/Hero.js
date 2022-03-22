import React from "react";
import styled from "styled-components";

import ImgSrc from "../assets/hero-background-experimental.jpg";

//Components
import BrandButton from "./styles/BrandButton.styled";
import TextAnimation from "./styles/TextAnimation.styled";

const StyledHeader = styled.section`

  background-image: url(${ImgSrc});
  background-size: cover;
  background-position: center;
  padding: 100px 40px;

  h1 {
    color: #FCFCFC;
    font-size: 3rem;

  }

  @media (max-width: 820px) {
    text-align: left;
     padding: 100px 5px;

  }
  

}

`;

export default function Hero() {
  return (
    <>
      <StyledHeader className=" flex-lg-row">
        <h1>Technology </h1>

        <TextAnimation />

        <h2>Next generation of algorithms for accurate genotype prediction</h2>

        <BrandButton primary to="/products">
          View products
        </BrandButton>
      </StyledHeader>
      <br />
    </>
  );
}
