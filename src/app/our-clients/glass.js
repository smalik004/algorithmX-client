'use client'
import { useState } from 'react';

const GlassMirrorCard = () => {
  return (
    <div className="relative w-full h-[400px]  bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden flex items-center justify-center">
      {/* Background with office setting and VR user */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/images/glass.jpeg')" }}></div>

      
      {/* Overlay for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
      
      {/* Glass card container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto p-[150px]">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-4 text-center">
            {/* Green hashtag badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-white text-green-500 font-semibold px-6 py-2 rounded-full shadow-md inline-block">
                #ACCELERATEDIGITAL
              </div>
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl font-bold text-white tracking-wide mb-6">
              COLLABORATION WITH 3D VISUALIZATION
            </h2>
            
            {/* Description 
            <p className="text-white/90 text-md max-w-2xl mx-auto mb-10">
              Endless possibilities with TagSquare, when you combine insights from various 
              simulation tools
            </p>
            */}
            {/* Button */}
            <div className="flex justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassMirrorCard;