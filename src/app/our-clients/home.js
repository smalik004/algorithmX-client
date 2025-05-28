// pages/index.js
'use client'
import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';

export default function Portfolio() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const videoRef = useRef(null);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error("Video playback failed:", error);
        });
      }
    }, 100);
  };

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      <Head>
        <title>TechAhead - Digital Experiences</title>
        <meta name="description" content="We craft tomorrow's digital experiences, products, and ventures" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background elements with responsive positioning */}
      <div className="absolute top-1/4 left-8 md:left-48 w-8 md:w-16 h-8 md:h-16 bg-blue-500 rounded-lg transform rotate-12"></div>
      <div className="absolute bottom-1/3 left-4 md:left-1/5 w-12 md:w-24 h-12 md:h-24 bg-purple-500 rounded-md transform -rotate-12 opacity-80"></div>
      <div className="absolute top-1/3 right-8 md:right-1/4 w-8 md:w-16 h-8 md:h-16 bg-white rounded-lg"></div>
      <div className="absolute bottom-1/4 right-6 md:right-48 w-12 md:w-24 h-12 md:h-24 bg-purple-500 rounded-md transform rotate-12 opacity-80"></div>
      <div className="absolute bottom-1/2 right-12 md:right-1/3 w-8 md:w-16 h-8 md:h-16 bg-white rounded-md"></div>
      <div className="absolute top-2/3 left-10 md:left-1/3 w-8 md:w-16 h-8 md:h-16 bg-white rounded-md"></div>

      <main className="max-w-6xl mx-auto px-4 pt-[100px] relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6">
            We craft tomorrow's{" "}
            <span className="relative inline-block align-middle">
              <button 
                onClick={openVideoModal} 
                className="focus:outline-none"
                aria-label="Play video"
              >
                <div className="w-16 h-12 md:w-24 md:h-16 relative bg-gray-900 rounded-full overflow-hidden border-2 border-gray-800 cursor-pointer hover:opacity-90 transition">
                  <video 
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    autoPlay
                    playsInline
                  >
                    <source src="/images/rr.mp4" type="video/mp4" />
                  </video>
                </div>
              </button>
            </span>{" "}
            digital
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            experiences products, and ventures
          </h1>
          <p className="text-lg md:text-xl mt-4 md:mt-6 text-gray-800">
            The Success Stories of TechAhead, that brought light to many Startups and Global Brands.
          </p>
        </div>

        <div className="flex justify-center mb-10 md:mb-16">
          <button className="bg-gray-900 text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-gray-800 transition text-sm md:text-base">
            Get in Touch
          </button>
        </div>

        {/* Bouncing elements positioned lower */}
        <div className="relative w-full h-32 md:h-64">
          <div className="absolute left-0 top-8 md:top-16 transform animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden transform rotate-6 w-full">
                <img 
                  src="images/prot-2.webp" 
                  alt="Food App Interface" 
                  className="w-16 h-16 md:w-24 md:h-24" 
                />
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 top-12 md:top-20 transform -translate-x-1/2 animate-bounce" style={{ animationDuration: '4s', animationDelay: '0.5s' }}>
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md w-full">
                <img 
                  src="/images/prot-3.webp" 
                  alt="Person with water bottle" 
                  className="w-16 h-16 md:w-24 md:h-24" 
                />
              </div>
            </div>
          </div>

          <div className="absolute right-0 top-6 md:top-12 transform animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '1s' }}>
            <div className="relative">
              <div className="bg-white rounded-2xl overflow-hidden shadow-md transform -rotate-6 w-full">
                <img 
                  src="/images/prot-4.webp" 
                  alt="Person using tablet" 
                  className="w-16 h-16 md:w-24 md:h-24" 
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Responsive Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 md:p-4">
          <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
            <button 
              onClick={closeVideoModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 bg-white rounded-full p-1 md:p-2 z-10 hover:bg-gray-200 transition"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="relative pt-[56.25%]">
              <video
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-full"
                controls
                preload="metadata"
              >
                <source src="/images/rr.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}