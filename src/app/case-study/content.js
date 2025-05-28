'use client'
import { useState, useEffect } from 'react';

export default function DominosHeroSection() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="relative w-full h-[400px] max-w-[1300px] mx-auto">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/banner-case.webp" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 py-16 h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Heading */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Every Solution Needs a Problem to Begin With - In Case of Domino's Mobile App, It was a Complex User Journey
              </h1>
            </div>
            
            {/* Right Column - Text */}
            <div className="text-white">
              <p className="mb-6">
                It is not uncommon for a restaurant application to get reviews on food quality, 
                delivery time, etc. It is something that every food business owner is prepared for. 
                What is alarming is when reviews start highlighting issues related to the app 
                experience, difficulty in placing an order, or in-app user journey.
              </p>
              
              <p className="mb-6">
                When Domino's came to us, they were facing issues with retaining customers and 
                were seeing a rise in their mobile app's bounce rate. They were looking for ways 
                to redefine their business identity in the market and reinstate their image, through 
                redesigned user interface and user experience (UI/UX).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}