import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function TextAnimation() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");

  return (
    <Wrapper>
      {words
        .filter((word) => word.id === 2)
        .map((word) => (
          <h1>{word.message}</h1>
        ))}
    </Wrapper>
  );
}

const words = [
  {
    id: 1,
    message: "that saves lives",
  },
  {
    id: 2,
    message: "with scientific rationale",
  },
];

const animation = keyframes`
0% {opacity: 1; transform: translateY(0); }
50% {opacity: 0; transform: translateY(-50px); }
100% {opacity: 1; transform: translateY(0px) ; }
`;

const Wrapper = styled.span`
  opacity: 0;
  display: inline-block;
  animation-name: ${animation};
  animation-duration: 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  overflow: hidden;
`;
