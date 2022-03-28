import React from "react";
import ReactTextRotator from "react-text-rotator";

const titles = [
  {
    text: "that saves lives",
  },
  {
    text: "in bioinformatics",
  },
];

function TextAnimation() {
  return (
    <h1>
      <ReactTextRotator content={titles} startDelay={2000} />
    </h1>
  );
}

export default TextAnimation;
