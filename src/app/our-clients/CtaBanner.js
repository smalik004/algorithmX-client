// components/CtaBanner.js
'use client'
import React from 'react';
import Image from 'next/image';

export default function CtaBanner({ position = "middle", type = "default" }) {
  // Different content based on position and type
  let content;
  
  // Position-based content (middle or before-load-more)
  if (position === "before-load-more") {
    content = {
      title: "COLLABORATION WITH 3D VISUALIZATION",
      hashtag: "#ACCELERATEDIGITAL",
      description: "Endless possibilities with TagSquare, when you combine insights from various simulation tools",
      buttonText: "Schedule a Consultation",
      bgClasses: "from-slate-900 to-slate-800",
      buttonClasses: "bg-green-500 hover:bg-green-600"
    };
  } else if (type === "industries") {
    content = {
      title: "INDUSTRY-LEADING SOLUTIONS FOR ENTERPRISE",
      hashtag: "#INDUSTRYLEADERS",
      description: "Discover how our industry-specific expertise can help transform your business",
      buttonText: "Request Enterprise Demo",
      bgClasses: "from-slate-900 to-slate-800",
      buttonClasses: "bg-blue-600 hover:bg-blue-700"
    };
  } else if (type === "regions") {
    content = {
      title: "JOIN OUR PARTNER PROGRAM TODAY",
      hashtag: "#GLOBALPARTNERS",
      description: "Get featured in our global portfolio of case studies",
      buttonText: "Become a Partner",
      bgClasses: "from-slate-900 to-slate-800",
      buttonClasses: "bg-purple-500 hover:bg-purple-600"
    };
  } else {
    // Default CTA
    content = {
      title: "ADD YOUR BRAND TO OUR ELITE LIST",
      hashtag: "#JOINTHECLUB",
      description: "Join our elite client portfolio and create your own success story",
      buttonText: "Join the Club",
      bgClasses: "from-slate-900 to-slate-800",
      buttonClasses: "bg-green-500 hover:bg-green-600"
    };
  }

  return (
    <div className={`relative w-full h-[400px] bg-gradient-to-br ${content.bgClasses} overflow-hidden flex items-center justify-center mb-12`}>
      {/* Background image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-80" style={{ backgroundImage: "url('/images/glass.jpeg')" }}></div>
      
      {/* Overlay for depth effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10"></div>
      
      {/* Glass card container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 py-8 text-center">
            {/* Partner logos 
            <div className="flex justify-center items-center gap-8 mb-8">
              <Image src="/images/kfc-logo.png" alt="KFC" width={80} height={40} />
              <Image src="/images/ikea-logo.png" alt="IKEA" width={80} height={40} />
              <Image src="/images/adidas-logo.png" alt="Adidas" width={80} height={40} />
              <Image src="/images/dominos-logo.png" alt="Dominos" width={80} height={40} />
            </div>
             */}
            {/* Green hashtag badge */}
            <div className="flex justify-center mb-8">
              <div className="bg-white text-green-500 font-semibold px-6 py-2 rounded-full shadow-md inline-block">
                {content.hashtag}
              </div>
            </div>
            
            {/* Heading */}
            <h2 className="text-2xl font-bold text-white tracking-wide mb-6">
              {content.title}
            </h2>
            
            {/* Description 
            <p className="text-white/90 text-md max-w-2xl mx-auto mb-10">
              {content.description}
            </p>
            */}
            {/* Button */}
            <div className="flex justify-center">
              <button className={`${content.buttonClasses} text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-md`}>
                {content.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}