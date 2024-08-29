// Componentes React
import React from "react";
import { useInView } from "react-intersection-observer";

// Componentes CSS
import "./AnimatedScroll.css";

const AnimatedScroll = ({ children, animationClass }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`${animationClass} ${inView ? "animate" : ""}`}
    >
      {children}
    </div>
  );
};

export default AnimatedScroll;
