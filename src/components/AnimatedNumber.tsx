import { useEffect, useState, useRef, useCallback } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  className?: string;
}

const AnimatedNumber = ({ value, duration = 1500, className = "" }: AnimatedNumberProps) => {
  const [displayValue, setDisplayValue] = useState(value);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<number | null>(null);

  const runAnimation = useCallback(() => {
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

    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Unique bounce-in easing effect
      const easeOutBack = 1 + 2.70158 * Math.pow(progress - 1, 3) + 1.70158 * Math.pow(progress - 1, 2);
      const clampedEase = Math.max(0, Math.min(1, easeOutBack));
      const current = targetNum * clampedEase;

      // Ensure we never show negative values
      const safeValue = Math.max(0, current);

      if (isDecimal) {
        setDisplayValue(`${prefix}${safeValue.toFixed(decimalPlaces)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${Math.floor(safeValue)}${suffix}`);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  }, [value, duration]);

  useEffect(() => {
    const element = ref.current;

    // On mobile, show final value directly (no animation) to avoid issues
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      setDisplayValue(value);
      setHasAnimated(true);
      return;
    }

    if (!element || hasAnimated) return;

    if (!("IntersectionObserver" in window)) {
      runAnimation();
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            runAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [hasAnimated, runAnimation, value]);

  return <span ref={ref} className={className}>{displayValue}</span>;
};

export default AnimatedNumber;
