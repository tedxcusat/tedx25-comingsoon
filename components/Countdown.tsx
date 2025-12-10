"use client";

import { useState, useEffect } from "react";

export default function Countdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // Helper to format numbers to 2 digits (e.g., 09)
  const format = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex gap-4 md:gap-8 font-orbitron text-red-600 text-3xl md:text-5xl tracking-widest drop-shadow-[0_0_10px_rgba(255,0,0,0.8)]">
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.days)}</span>
        <span className="text-xs text-gray-400 mt-2 font-montserrat">DAYS</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.hours)}</span>
        <span className="text-xs text-gray-400 mt-2 font-montserrat">HRS</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.minutes)}</span>
        <span className="text-xs text-gray-400 mt-2 font-montserrat">MIN</span>
      </div>
      <span>:</span>
      <div className="flex flex-col items-center">
        <span>{format(timeLeft.seconds)}</span>
        <span className="text-xs text-gray-400 mt-2 font-montserrat">SEC</span>
      </div>
    </div>
  );
}