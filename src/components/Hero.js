import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Animated } from "react-animated-css";
//Assets
import ImgSrc from "../assets/hero-background-experimental.jpg";
//Components
import BrandButton from "./styles/BrandButton.styled";
import TextAnimation from "./styles/TextAnimation.styled";

const StyledHeader = styled.div`
  background-image: url(${ImgSrc});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;

  .row {
    padding: 0px 150px 0px 150px;

    flex-wrap: wrap;
  }

  .brand-button {
    text-decoration: none;
  }

  h1 {
    color: #fcfcfc;
    font-size: 60px;
  }

  h2 {
    font-size: 21px;
  }

  .brand-button:hover {
    transform: translateY(-5px);
    transition-duration: 0.5s;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 45px !important;
    }
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 30px !important;
    }

    .row {
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
        <StyledHeader>
          <div className="row">
            <div className="col-md-auto">
              <h1>Technology </h1>
              <TextAnimation />
              <h2>
                Next generation of algorithms for accurate genotype prediction
              </h2>
            </div>
            <div className="col-md-auto ">
              <Animated
                animationIn="fadeIn"
                animationInDelay={2000}
                isVisible={true}
              >
                <Link to="/products" className="brand-button">
                  <BrandButton primary>View products</BrandButton>
                </Link>
              </Animated>
            </div>
          </div>
        </StyledHeader>
      </Animated>
    </div>
  );
}
