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
  transition: all 8s ease;

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
    color: white;
    background: linear-gradient(
      90deg,
      rgba(255, 121, 142, 1) 0%,
      rgba(85, 111, 255, 1) 100%
    );
  }
`;

export default BrandButton;
