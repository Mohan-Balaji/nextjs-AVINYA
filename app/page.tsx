"use client";
import { useState, useEffect } from "react";
import ShinyText from '@/components/ui/text/ShinyText'
import ButtonWrapper from '@/components/ui/button/ButtonWrapper';  // Import the ButtonWrapper component

export default function Home() {
  const targetDate = new Date("2025-03-17T10:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-white text-center px-4 sm:px-6 lg:px-8">
      {/* <Navbar /> Add Navbar component here */}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black dark:text-white font-sans tracking-tight">
        <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 text-transparent bg-clip-text text-6xl sm:text-7xl md:text-9xl tracking-widest">
          AVINYA
        </span>
      </h2>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 py-4">
        <ShinyText text="Coming Soon !" disabled={false} speed={3} className="custom-class" />
      </h1>
      <p className="text-base sm:text-lg mb-6">We're working hard to launch soon. Stay tuned!</p>

      <div className="flex flex-wrap justify-center gap-4 text-center">
        {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg w-20 sm:w-24">
            <p className="text-2xl sm:text-3xl font-semibold">
              {Object.values(timeLeft)[index]}
            </p>
            <span className="text-xs sm:text-sm">{label}</span>
          </div>
        ))}
      </div>

      {/* Add the button that redirects to /events */}
      <div className="mt-6">
        <ButtonWrapper />
      </div>
    </div>
  );
}



