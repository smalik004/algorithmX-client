'use client'
import Head from 'next/head';
import { useEffect, useRef } from 'react';

export default function CaseHeader() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays automatically on load
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Head>
        <title>KFC Digital Expansion Case Study</title>
        <meta name="description" content="How we helped Americana Group's KFC expand their digital presence" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Video Background */}
      <video 
        ref={videoRef}
        className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/images/rr.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay to improve text visibility */}
      <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-50 z-0"></div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center h-full z-10 px-4 md:px-8 text-center">
        <h1 className="text-[20px] md:text-[45px] md:leading-[70px]  font-bold text-white mb-4 max-w-5xl mx-auto">
          How We Helped Americana Group's KFC Expand Their Digital Presence by Launching 7 Mobile Apps Across Global Markets
        </h1>
        <div className="mt-8 bg-white bg-opacity-20 py-2 px-6 rounded-full backdrop-blur-sm">
          <p className="text-white font-semibold">Expand Your Business</p>
        </div>
      </div>
    </div>
  );
}