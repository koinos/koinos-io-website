import { useEffect, useState, useRef } from "react";
import Counter from "./Counter";

export default function CounterUp({ end }) {
  const [inViewport, setInViewport] = useState(false);
  const countElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // when the element is in the viewport, set inViewport to true
        if (entry.isIntersecting) {
          setInViewport(true);
          // don't continue observing after being visible (for performance)
          observer.unobserve(entry.target);
        }
      },
      {
        // execute at 50% visbility
        threshold: 0.5,
      }
    );

    if (countElementRef.current) {
      observer.observe(countElementRef.current);
    }

    // cleanup
    return () => {
      if (countElementRef.current) {
        observer.unobserve(countElementRef.current);
      }
    };
  }, []);

  return (
    <>
      <span ref={countElementRef} className="count-element">
        {inViewport && <Counter end={end} duration={20} />}
      </span>
    </>
  );
}