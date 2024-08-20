"use client";
import React, { useEffect, useState } from "react";

const CountDown = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T23:59:59"); // Replace with your target date
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-8">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <div key={index} className="flex flex-col items-center">
            <p className="text-sm text-black font-semibold">{label}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-4 items-center">
        {["days", "hours", "minutes", "seconds"].map((unit, index) => (
          <React.Fragment key={index}>
            <span className="countdown font-mono text-4xl text-black font-semibold">
              {timeLeft[unit].toString().padStart(2, "0")}
            </span>
            {index < 3 && (
              <span className="font-mono text-4xl text-red-600">:</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountDown;
