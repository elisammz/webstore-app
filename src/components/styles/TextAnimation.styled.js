import React from "react";
import styled, { keyframes } from "styled-components";

export default function TextAnimation() {
  return (
    <Wrapper>
      <h1>that saves lives</h1>
    </Wrapper>
  );
}

const animation = keyframes`
0% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px);}
25% {opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
75% {opacity: 1; transform: translateY(0) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
100% {opacity: 0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px);}
`;

const Wrapper = styled.span`
  opacity: 0;
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 6s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
`;
