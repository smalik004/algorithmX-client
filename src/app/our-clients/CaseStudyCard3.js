import React from 'react';
import Link from 'next/link';
import useVideoInView from './Videoview';

export default function CaseStudyCard3({ study }) {
  // Update to use containerRef from the enhanced hook
  const { videoRef, containerRef, isInView } = useVideoInView();
 
  return (
    <Link href={study.url || `/case-studies/${study.id}`} className="block mb-8">
      <div className="flex flex-col md:flex-row rounded-lg overflow-hidden bg-gray-900">
        {/* Video on the left - Add containerRef and conditional class */}
        <div 
          ref={containerRef}
          className={`w-full md:w-1/2 h-64 md:h-auto relative ${!isInView ? 'video-not-in-view' : ''}`}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            autoPlay
            preload="metadata"
          >
            <source src={study.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
       
        {/* Content on the right */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-xl font-bold mb-4">{study.title}</h2>
            <div className="text-sm text-gray-400 mb-4">
              <span className="mr-3">{study.industry}</span>
              <span className="mr-3">•</span>
              <span>{study.region}</span>
            </div>
          </div>
         
          {/* Metrics */}
          <div className="flex flex-wrap gap-6 mt-4">
            {study.metrics.map((metric, index) => (
              <div key={index} className="border-l border-gray-500 pl-4">
                <div className="text-xl font-bold">{metric.value}</div>
                <div className="text-xs text-gray-300">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}