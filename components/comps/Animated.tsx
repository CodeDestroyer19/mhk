import React from "react";
import { useSpring, animated } from "react-spring";
import { random } from "lodash";

interface AnimatedBoxProps {
  size: number;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ size }) => {
  const [x, y] =
    typeof window !== "undefined" &&
    useSpring(() => ({
      x: random(window.innerWidth - size),
      y: random(window.innerHeight - size),
      config: { mass: 1, tension: 120, friction: 20 },
    }));

  return (
    <animated.div
      style={{
        position: "absolute",
        top: y,
        left: x,
        width: size,
        height: size,
        backgroundColor: "#4FD1C5",
        borderRadius: "50%",
      }}
    />
  );
};

const AnimatedBoxes: React.FC = () => {
  const boxes = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {boxes.map(box => (
        <AnimatedBox key={box} size={random(50, 150)} />
      ))}
    </div>
  );
};

export default AnimatedBoxes;
