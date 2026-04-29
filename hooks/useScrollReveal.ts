"use client";

import { useEffect, useMemo, useState } from "react";

// Beat indices 0 and 1 (first section) are visible from initial render.
// Remaining beats 2..5 are revealed sequentially via these delays.
const REVEAL_DELAYS_MS = [700, 1400, 2200, 3000] as const;

export function useScrollReveal(count: number) {
  const totalBeats = count * 2;
  const [isMounted, setIsMounted] = useState(false);
  // currentStep = highest beat index that is currently visible (starts at 1 → beats 0 and 1 visible)
  const [currentStep, setCurrentStep] = useState(1);
  const [timerCount, setTimerCount] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    function startSequence() {
      timers.forEach(clearTimeout);
      timers.length = 0;
      setCurrentStep(1);
      setTimerCount(0);

      REVEAL_DELAYS_MS.forEach((delay, i) => {
        const beatIndex = i + 2; // reveals beats 2, 3, 4, 5
        const t = setTimeout(() => {
          setCurrentStep(beatIndex);
          setTimerCount((n) => n + 1);
          // eslint-disable-next-line no-console
          console.log(`[baobae reveal] beat ${beatIndex} at ${Date.now()}`);
        }, delay);
        timers.push(t);
      });
    }

    setIsMounted(true);
    startSequence();
    window.addEventListener("pageshow", startSequence);

    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("pageshow", startSequence);
    };
  }, []);

  // Beat i is visible when i <= currentStep
  const visibleBeats = useMemo(
    () => Array.from({ length: totalBeats }, (_, i) => i <= currentStep),
    [totalBeats, currentStep],
  );

  return { visibleBeats, isMounted, timerCount, currentStep };
}
