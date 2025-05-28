import React from 'react';
import { Montserrat } from "next/font/google";

const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});

const ResultsRow = () => {
  return (
    <div className="w-full min-h-[200px]">
      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden md:flex w-full min-h-[200px]">
        {/* Left Side - Black Background */}
        <div className="w-1/2 bg-black p-8 flex items-center justify-center">
          <h1 className={`text-white text-[80px] leading-[0.875] -tracking-[0.02em] ${monsterfont3.className}`}>
            Results
          </h1>
        </div>

        {/* Right Side - Gradient Background */}
        <div
          className="w-1/2 p-8 flex items-center justify-center"
          style={{
            background: "linear-gradient(to right, #000000 0%, #7a0024 40%, #f83365 100%)",
          }}
        >
          <span className={`text-[224px] leading-[1] text-[#f83365] ${monsterfont3.className}`}>
            90%
          </span>
        </div>
      </div>

      {/* Mobile Layout - Hidden on Desktop */}
      <div className="flex md:hidden flex-col w-full min-h-[200px] items-center justify-center space-y-4 p-8 bg-gradient-to-r from-black via-[#7a0024] to-[#f83365]">
        <h1 className={`text-white text-[62px] leading-[0.875] -tracking-[0.02em] ${monsterfont3.className}`}>
          Results
        </h1>
        <span className={`text-[124px] leading-[1] text-[#f83365] ${monsterfont3.className}`}>
          90%
        </span>
      </div>
    </div>
  );
};

export default ResultsRow;