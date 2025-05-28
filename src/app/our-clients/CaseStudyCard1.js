import React, { useState } from 'react';
import Link from 'next/link';
import useVideoInView from './Videoview';
import './prot.css'

export default function CaseStudyCard1({ study }) {
  const { videoRef, containerRef, isInView } = useVideoInView();
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  // Character limit for title
  const CHARACTER_LIMIT = 75;
  
  // Function to handle title display with character limit
  const displayTitle = () => {
    if (study.title.length <= CHARACTER_LIMIT) {
      return study.title;
    }
    return `${study.title.substring(0, CHARACTER_LIMIT)}...`;
  };

  // Handle clicking on the entire card
  const handleCardClick = () => {
    if (study.url) {
      window.location.href = study.url;
    }
  };

  return (
    <div className="block mb-8">
      <div 
        ref={containerRef} 
        className={`relative overflow-hidden rounded-lg h-96 bg-gradient-to-r from-gray-900 to-black ${!isInView ? 'video-not-in-view' : ''} cursor-pointer`}
        onClick={handleCardClick}
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover opacity-60"
            loop
            muted
            playsInline
            preload="metadata"
            autoPlay
          >
            <source src={study.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
       
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
          <div className="flex flex-col md:flex-row justify-between items-end">
            {/* Title on the left with demo button */}
            <div className="md:w-1/2 md:pr-4 mb-6 md:mb-0">
              <div className="flex flex-col ">
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {displayTitle()}
                </h2>
                
                <div>
                  <Link href={study.url || "/"} passHref>
                    <div 
                      className="button cursor-pointer"
                      onClick={(e) => e.stopPropagation()} // Prevent triggering the parent click handler
                    >
                      <div className="button-text text-blue-500">Case Study</div>
                      <div className="arrow-area">
                        <div className="arrow-container">
                          <div className="default-arrows">
                            <div className="default-arrow w-embed">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                            <div className="default-arrow w-embed">
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                          </div>
                          {[...Array(8)].map((_, i) => (
                            <div key={i} className={`arrow arrow-${i} w-embed`}>
                              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-blue-500">
                                <path d="M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                              </svg>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Metrics on the right */}
            <div className="flex flex-wrap gap-4 md:gap-8">
              {study.metrics && study.metrics.map((metric, index) => (
                <div key={index} className="border-l border-gray-500 pl-4">
                  <div className="text-xl md:text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-xs md:text-sm text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}