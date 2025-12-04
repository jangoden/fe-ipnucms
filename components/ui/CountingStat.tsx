"use client";

import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer"; // For detecting when the component is in view

interface CountingStatProps {
  value: string; // The final value to display (e.g., "2.500+", "800+")
  duration?: number; // Animation duration in milliseconds
  delay?: number; // Delay before animation starts
}

const CountingStat: React.FC<CountingStatProps> = ({
  value,
  duration = 2000,
  delay = 0,
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it enters the viewport
    threshold: 0.5, // Trigger when 50% of the component is visible
  });

  // kasih initial value & allow null
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Easing function for smoother animation
  const easeOutQuad = (t: number) => t * (2 - t);

  useEffect(() => {
    if (!inView) {
      return;
    }

    // reset setiap kali effect jalan
    startTimeRef.current = null;

    // Extract numerical part from the value string (e.g., "2.500+" -> 2500)
    const targetValue = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(targetValue)) {
      setCount(0); // If not a number, just show 0 or handle differently
      return;
    }

    const animateCount = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const progress = timestamp - startTimeRef.current;
      const percentage = Math.min(progress / duration, 1);
      const easedPercentage = easeOutQuad(percentage); // Apply easing function

      setCount(Math.floor(easedPercentage * targetValue));

      if (progress < duration) {
        animationFrameRef.current = requestAnimationFrame(animateCount);
      } else {
        // Ensure final value is exactly targetValue
        setCount(targetValue);
      }
    };

    const timeoutId = window.setTimeout(() => {
      animationFrameRef.current = requestAnimationFrame(animateCount);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [inView, value, duration, delay, easeOutQuad]);

  // Format the displayed number, adding back the non-numeric parts
  const formattedCount = new Intl.NumberFormat("id-ID").format(count);
  const nonNumericSuffix = value.replace(/[\d.]+/g, ""); // Get "+", "K", etc.

  return (
    <span ref={ref}>
      {formattedCount}
      {nonNumericSuffix}
    </span>
  );
};

export default CountingStat;
