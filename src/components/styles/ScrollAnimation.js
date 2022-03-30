import React from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const Description = ({ text }) => {
  //Animation control
  const animationControl = useAnimation();
  //Hook
  const { inView, entry, ref } = useInView();

  if (inView) {
    animationControl.start({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 1.5,
      },
    });
  }
  return (
    <div ref={ref}>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={animationControl}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Description;
