import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const BrandButton = styled(Link)`
  border-color: #0f0f27;
  color: white;
  font-weight: 100;
  font-family: sans-serif;
  cursor: pointer;
  text-decoration: none;
  margin: 10px 10px;

  ${(props) =>
    props.primary &&
    css`
      border-radius: 50px;
      font-size: 1em;
      padding: 30px 45px;
      background: linear-gradient(
        90deg,
        rgba(85, 111, 255, 1) 0%,
        rgba(255, 121, 142, 1) 100%
      );
    `}

  ${(props) =>
    props.secondary &&
    css`
      font-size: 1em;
      padding: 20px 30px;
      background: linear-gradient(
        90deg,
        rgba(85, 111, 255, 1) 0%,
        rgba(255, 121, 142, 1) 100%
      );
    `}

     ${(props) =>
    props.tertiary &&
    css`
      color: black;
      font-size: 1em;
      padding: 20px 30px;
      background: white;
    `}

  

  &:hover {
    color: white;
    background: linear-gradient(
      90deg,
      rgba(255, 121, 142, 1) 0%,
      rgba(85, 111, 255, 1) 100%
    );
  }
`;

export default BrandButton;
