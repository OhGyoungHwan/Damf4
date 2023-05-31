import Marquee from "react-fast-marquee";
import { useState } from "react";

export default function MarqueeDelay({
  text,
  delay,
}: {
  text: string;
  delay: number;
}) {
  const [speed, setSpeed] = useState(30);
  const handleCycleComplete = () => {
    setSpeed(0);
    setTimeout(function () {
      setSpeed(30);
    }, delay);
  };
  return (
    <Marquee speed={speed} onCycleComplete={handleCycleComplete}>
      <span>{text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </Marquee>
  );
}
