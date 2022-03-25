import React from "react";
import styled, { keyframes } from "styled-components";

import ImgSrc from "../assets/hero-background-experimental.jpg";

//Components
import BrandButton from "./styles/BrandButton.styled";
import TextAnimation from "./styles/TextAnimation.styled";

const animation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: block;
  animation: ${animation} 2s alternate;
`;

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

        <Wrapper>
          <TextAnimation />
        </Wrapper>

        <h2>Next generation of algorithms for accurate genotype prediction</h2>

        <BrandButton primary to="/products">
          View products
        </BrandButton>
      </StyledHeader>
      <br />
    </>
  );
}
