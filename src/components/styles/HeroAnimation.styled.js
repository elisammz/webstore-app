import React from "react";
import styled, { keyframes } from "styled-components";
import TextAnimation from "./styles/TextAnimation.styled";

const animation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: block;
  animation: ${animation} 8s ease-in-out;
`;

function HeroAnimation() {
  return (
    <h1>
      <Wrapper>
        <TextAnimation />
      </Wrapper>
    </h1>
  );
}

export default HeroAnimation;
