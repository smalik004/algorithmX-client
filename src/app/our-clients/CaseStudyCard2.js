import React from 'react';
import Link from 'next/link';
import useVideoInView from './Videoview';

export default function CaseStudyCard2({ study }) {
  // Using containerRef from the enhanced hook
  const { videoRef, containerRef, isInView } = useVideoInView();

  return (
    <Link href={study.url || `/case-studies/${study.id}`} className="block">
      <div className="flex flex-col rounded-lg overflow-hidden bg-gray-900">
        
        {/* Content Area with Extended Gradient */}
        <div className="relative p-6 pb-12 overflow-hidden">
          {/* Gradient Overlay at Bottom */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent pointer-events-none z-0"></div>

          {/* Main Content */}
          <div className="relative z-10">
            <h2 className="text-lg md:text-xl font-bold mb-4 max-w-sm">
              {study.title}
            </h2>

            {/* Metrics */}
            <div className="flex flex-wrap gap-4">
              {study.metrics.slice(0, 2).map((metric, index) => (
                <div key={index} className="border-l border-gray-500 pl-3">
                  <div className="text-lg font-bold">{metric.value}</div>
                  <div className="text-xs text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div
          ref={containerRef}
          className={`w-full h-[17rem] relative -mt-6 ${!isInView ? 'video-not-in-view' : ''}`}
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

          {/* Soft Overlay on Video */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
        </div>

      </div>
    </Link>
  );
}
