import { useEffect, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(35000);

  useEffect(() => {
    const initialCount = 35000;
    const timeInterval = 20 * 1000;
    const startTime = performance.now();

    const animateCount = () => {
      const currentTime = performance.now();
      const elapsed = currentTime - startTime;
      const progress = elapsed / timeInterval;

      if (progress < 1) {
        setCounter(Math.max(initialCount - initialCount * progress, 0));
        requestAnimationFrame(animateCount);
      } else {
        setCounter(0);
      }
    };

    requestAnimationFrame(animateCount);
  }, []);
  return (
    <p className="w-full text-center text-[0.625rem] tracking-[0.5em] sm:text-xs">
      <span className="inline-block w-24 text-right">
        {Math.round(counter).toLocaleString()}
      </span>
      + ALREADY JOINED
    </p>
  );
};

export default Counter;
