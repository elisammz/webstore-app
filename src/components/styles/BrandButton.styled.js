import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";

const BrandButton = styled(Link)`
  border-radius: 50px;
  border-color: #0f0f27;
  color: white;
  font-weight: 100;
  font-family: sans-serif;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s;

  ${(props) =>
    props.primary &&
    css`
      transform: translate(-50%, -50%);
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
      color: #546fff;
      font-size: 16px;
      padding: 10px 25px;
    `}

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    color: white;
    background: linear-gradient(
      90deg,
      rgba(255, 121, 142, 1) 0%,
      rgba(85, 111, 255, 1) 100%
    );
  }
`;

export default BrandButton;
