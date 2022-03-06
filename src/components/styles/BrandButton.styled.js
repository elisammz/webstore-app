import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const BrandButton = styled(Link)`
  border-radius: 50px;
  border-color: #0f0f27;
  color: white;
  font-weight: 100;
  font-family: sans-serif;
  cursor: pointer;
  text-decoration: none;

  ${(props) =>
    props.primary &&
    css`
      font-size: 16px;
      padding: 20px 45px;
      background: linear-gradient(
        90deg,
        rgba(85, 111, 255, 1) 0%,
        rgba(255, 121, 142, 1) 100%
      );
    `}

  ${(props) =>
    props.secondary &&
    css`
      color: #546fff;
      font-size: 16px;
      padding: 10px 25px;
      transition: all 200ms ease-in-out;
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
