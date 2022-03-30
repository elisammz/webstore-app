import React from "react";
import styled from "styled-components";
//Assets
import ImgSrc from "../assets/description-dna.jpg";
//Components
import BrandButton from "./styles/BrandButton.styled";
import Description from "./styles/ScrollAnimation";

const StyledDescriptions = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .brand-button {
    display: flex;
  }

  h1 {
    font-size: 60px;
    font-weight: 600;
  }

  .brand-button:hover {
    transform: translateY(-5px);
    transition-duration: 0.5s;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 45px !important;
    }

    .brand-button {
      padding: 50px 0px 0px 0px !important;
    }

    .description-img {
      display: none;
    }
  }

  @media (max-width: 820px) {
    h1 {
      font-size: 30px !important;
    }

    .row {
      justify-content: left;
    }

    .brand-button {
      padding: 50px 20px 0px 20px !important;
    }
  }
`;

export default function FullDescriptions() {
  return (
    <StyledDescriptions>
      <div className="row">
        <div className="col-md-auto">
          <h1>
            <Description text="Computational " />
            <Description text="Genomics" />
          </h1>
          <br />
          <BrandButton secondary to="/products">
            Our Solutions
          </BrandButton>
          <BrandButton tertiary to="/products">
            MatchDonor.org
          </BrandButton>
        </div>

        <div className="col-md-auto description-img">
          <img src={ImgSrc} width="400" />
        </div>
      </div>
    </StyledDescriptions>
  );
}
