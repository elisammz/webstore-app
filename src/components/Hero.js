import React from "react";
import styled, { keyframes } from "styled-components";
import { Animated } from "react-animated-css";
//Assets
import ImgSrc from "../assets/hero-background-experimental.jpg";
//Components
import BrandButton from "./styles/BrandButton.styled";
import TextAnimation from "./styles/TextAnimation.styled";
import Navbar from "../components/styles/Navbar.styled";

const StyledHeader = styled.div`
  background-image: url(${ImgSrc});
  background-size: cover;
  background-position: center;
  height: 100vh;

  .row {
    padding: 200px 150px 0px 150px;
    display: flex;
    justify-content: space-around;
  }

  h1 {
    color: #fcfcfc;
    font-size: 60px;
  }

  h2 {
    font-size: 21px;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 45px !important;
    }
    .row {
      padding: 100px 75px 0px 75px !important;
      justify-content: left;
    }
  }

  @media (max-width: 820px) {
    h1 {
      font-size: 30px !important;
    }
    .row {
      padding: 200px 20px 0px 20px !important;
      justify-content: left;
    }
  }
`;

export default function Hero() {
  return (
    <div>
      <Animated
        animationIn="fadeIn"
        animationInDuration={2000}
        isVisible={true}
      >
        <Navbar />
        <StyledHeader>
          <div className="row lg-row">
            <div className="col-md-auto">
              <h1>Technology </h1>
              <TextAnimation />
              <h2>
                Next generation of algorithms for accurate genotype prediction
              </h2>
            </div>
            <div className=" col-md-auto">
              <Animated
                animationIn="fadeIn"
                animationInDelay={2000}
                isVisible={true}
              >
                <BrandButton primary to="/products">
                  View products
                </BrandButton>
              </Animated>
            </div>
          </div>
        </StyledHeader>
      </Animated>
    </div>
  );
}
