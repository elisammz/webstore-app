import React from "react";
import styled, { keyframes } from "styled-components";
import { Animated } from "react-animated-css";
//Assets
import ImgSrc from "../assets/description-dna.jpg";
//Components
import BrandButton from "./styles/BrandButton.styled";
import TextAnimation from "./styles/TextAnimation.styled";

const StyledDescriptions = styled.div`
  height: 100vh;

  .row {
    padding: 200px 150px 0px 150px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .brand-button {
    display: flex;
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

    .brand-button {
      padding: 50px 0px 0px 0px !important;
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

    .brand-button {
      padding: 50px 20px 0px 20px !important;
    }
  }
`;

export default function Descriptions(props) {
  return (
    <StyledDescriptions>
      <div className="row">
        <div className="col-md-auto">
          <h2>Computational Genomics</h2>
          <BrandButton>Our solutions</BrandButton>
        </div>
        <div className="col-md-auto">
          <p></p>
        </div>
      </div>
    </StyledDescriptions>
  );
}
