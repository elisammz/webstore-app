import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Assets
import ImgSrc from "../assets/description-dna.jpg";
//Components
import BrandButton from "./styles/BrandButton.styled";
import Description from "./styles/ScrollAnimation";
//MUI
import Box from "@mui/material/Box";

const StyledDescriptions = styled.div`
  min-height: 100vh;

  .gradient-border {
    -webkit-box-shadow: 32px 28px 0px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 32px 28px 0px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1vw 28px 0px 0px rgba(0, 0, 0, 0.75);
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

    .flex-col {
      text-align: center;
    }

    .description-img {
      display: none;
    }
  }

  @media (max-width: 820px) {
    display: none;

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
      <Box className="d-lg-flex justify-content-around p-5">
        <div className="flex-col">
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
          <img src={ImgSrc} width="600" />
        </div>
      </Box>
    </StyledDescriptions>
  );
}
