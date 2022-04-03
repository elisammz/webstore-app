import React from "react";
import { Link } from "react-router-dom";
//Assets
import ImgSrc from "../assets/description-dna.jpg";
//Components
import BrandButton from "./styles/BrandButton.styled";
import Description from "./styles/ScrollAnimation";
import StyledContainer from "./styles/ContainerStyled";

function FullDescriptions() {
  return (
    <StyledContainer>
      <div className="flex-col description-section">
        <h1>
          <Description text="Computational " />
          <Description text="Genomics" />
        </h1>
        <br />
        <Link to="/products">
          <BrandButton secondary>Our Solutions</BrandButton>
        </Link>
        <Link to="/products">
          <BrandButton tertiary>MatchDonor.org</BrandButton>
        </Link>
      </div>

      <div className="flex-col description-img gradient-border">
        <img src={ImgSrc} width="500" />
      </div>
    </StyledContainer>
  );
}

export default FullDescriptions;
