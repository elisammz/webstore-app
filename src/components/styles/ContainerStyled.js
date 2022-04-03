import React from "react";
import Box from "@mui/material/Box";
import styled, { css } from "styled-components";

const StyledContainer = styled(Box)`
  display: flex;
  justify-content: space-around;
  min-height: 100vmin;
  align-items: center;

  h1 {
    font-size: 60px;
    font-weight: 600;
  }

  .brand-button:hover {
    transform: translateY(-5px);
    transition-duration: 0.5s;
  }

  .gradient-border {
    -webkit-box-shadow: 32px 28px 0px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 32px 28px 0px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1vw 28px 0px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 820px) {
    display: none;
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 45px !important;
    }

    .flex-col {
      text-align: center;
    }
  }
`;

const MyContainer = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

export default MyContainer;
