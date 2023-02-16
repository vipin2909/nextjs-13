import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

import "../../styles/globals.css";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };

  const cursorActivated = () => {
    const innerCursor = document.getElementById("inner-cursor");
    const outerCursor = document.getElementById("outer-cursor");

    innerCursor.classList.add("cursorHover");
    outerCursor.classList.add("hideCursor");
  };

  const cursorDeactivated = () => {
    const innerCursor = document.getElementById("inner-cursor");
    const outerCursor = document.getElementById("outer-cursor");

    innerCursor.classList.remove("cursorHover");
    outerCursor.classList.remove("hideCursor");
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".activateCursor");
    elements.forEach((element) => {
      element.addEventListener("mouseenter", cursorActivated);
      element.addEventListener("mouseleave", cursorDeactivated);
    });
    return () => {
      const elements = document.querySelectorAll(".activateCursor");
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", cursorActivated);
        element.removeEventListener("mouseleave", cursorDeactivated);
      });
    };
  });

  return (
    <Fragment>
      <motion.div
        id="outer-cursor"
        className="customizedCursor cursorDotOutline"
        variants={variants}
        animate="default"
      />
      <motion.div
        id="inner-cursor"
        className="customizedCursor cursorDot"
        variants={variants}
        animate="default"
      />
    </Fragment>
  );
};

export default Cursor;
