import React from 'react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const LogoTypes = () => {
  const logoTypes = [
    { title: 'Monogram Logos', id: 'monogram' },
    { title: 'Wordmarks', id: 'wordmarks' },
    { title: 'Pictorial Marks', id: 'pictorial' },
    { title: 'Abstract Logo', id: 'abstract' },
    { title: 'Mascots Logo', id: 'mascots' },
    { title: 'The Combination Mark', id: 'combination' },
    { title: 'The Emblem', id: 'emblem' },
  ];

  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-8 lg:px-16 py-12 ">
      {/* Header Section */}
      <div className="text-center mb-16">
        <p className={`text-blue-500 font-size-18 ${monsterfont.className} mb-4`}>WE ARE AWESOME</p>
        <h1 className={`font-size-56 algo-line-height-60 ${monsterfont1.className} letter-spacing-60 font-light tracking-wider mb-4`}>
          TYPE OF LOGOS
        </h1>
        {/* Blue line under TYPE OF LOGOS */}
        <div className="flex justify-center mb-8">
          <div className="h-1 w-16 bg-blue-500"></div>
        </div>
        <p className={`text-semi-white font-size-16 ${monsterfont.className} max-w-6xl mx-auto md:text-base`}>
          AlgorithmX offers exceptional logo design services creating diverse designs, including wordmarks, lettermarks, brandmarks, combination marks, and emblem logos tailored to perfectly represent your unique brand identity.
        </p>
      </div>

      {/* Logo Types List */}
      <div className="max-w-6xl mx-auto">
        {logoTypes.map((type) => (
          <div key={type.id} className="relative py-6 transition-colors duration-300 group">
            <h2 className={`font-size-21 algo-line-height-24 ${monsterfont2.className}`}>{type.title}</h2>
            
            {/* White line full width */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-white"></div>

            {/* Pink line matching text length */}
            <div className="absolute bottom-0 left-0 h-px bg-pink-500" style={{ width: `${type.title.length * 13}px` }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTypes;
