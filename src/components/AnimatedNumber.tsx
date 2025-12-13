import { useEffect, useState, useRef } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber = ({ value, duration = 2000, className = "" }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Cancel any previous animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    // Extract prefix (like < or >), numeric part and suffix
    const prefixMatch = value.match(/^[<>]?/);
    const numMatch = value.match(/[\d.]+/);
    const suffixMatch = value.match(/[^\d.]+$/);

    if (!numMatch) {
      setDisplayValue(value);
      return;
    }

    const prefix = prefixMatch ? prefixMatch[0] : "";
    const targetNum = parseFloat(numMatch[0]);
    const suffix = suffixMatch ? suffixMatch[0] : "";
    const isDecimal = numMatch[0].includes(".");
    const decimalPlaces = isDecimal ? (numMatch[0].split(".")[1]?.length || 1) : 0;

    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = targetNum * easeOut;

      if (isDecimal) {
        setDisplayValue(`${prefix}${current.toFixed(decimalPlaces)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration]);

  return <span className={className}>{displayValue}</span>;
};

export default AnimatedNumber;
