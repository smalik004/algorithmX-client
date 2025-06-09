"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// Component for the video popup
const VideoPopup = ({
  isOpen,
  onClose,
  videoSrc,
  caseStudyLink,
  title,
  stats,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay with semi-transparent background */}
      <div
        className="absolute inset-0 bg-black bg-opacity-80"
        onClick={onClose}
      ></div>

      {/* Video popup content */}
      <div className="relative z-10 w-full max-w-4xl bg-black rounded-lg overflow-hidden">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-white text-2xl z-20 hover:text-gray-300"
          onClick={onClose}
        >
          ×
        </button>

        {/* Video as background */}
        <div className="relative pt-[56.25%]">
          {" "}
          {/* 16:9 aspect ratio */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={videoSrc}
            autoPlay
            muted
            loop
          ></video>
          {/* Content overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-8">
            <h2 className="text-white text-3xl font-bold mb-4">{title}</h2>

            {/* Stats display similar to the image */}
            <div className="flex flex-wrap gap-8 text-white mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-3xl font-bold">{stat.value}</span>
                  <span className="text-sm">{stat.label}</span>
                </div>
              ))}
            </div>

            <a
              href="/blogs-internal"
              target="_blank"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0.5 active:shadow-md active:shadow-blue-500/20 active:duration-75 w-fit"
            >
              <span className="relative z-10">Case Study</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>

              <span
                className="absolute inset-0 z-0 rounded-lg bg-gradient-to-tr from-white/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              ></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const FloatingBubbles = ({ bubbleConfig = [] }) => {
  const [bubbles, setBubbles] = useState([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const [hoveredBubble, setHoveredBubble] = useState(null);
  const [activePopup, setActivePopup] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth === 0) return;

    const baseSpeed = 0.5;
    const getResponsiveSize = (baseSize) => {
      if (windowWidth <= 480) return baseSize * 0.4; // Small mobile (iPhone SE)
      if (windowWidth <= 640) return baseSize * 0.5; // Mobile
      if (windowWidth <= 768) return baseSize * 0.6; // Large mobile/Small tablet
      if (windowWidth <= 1024) return baseSize * 0.7; // Tablet
      if (windowWidth <= 1280) return baseSize * 0.85; // Small desktop
      return baseSize; // Large desktop
    };

    // Replace the getResponsiveX function with this optimized version:
    const getResponsiveX = (baseX) => {
      if (windowWidth <= 480) return baseX * 0.3; // Small mobile
      if (windowWidth <= 640) return baseX * 0.4; // Mobile
      if (windowWidth <= 768) return baseX * 0.5; // Large mobile/Small tablet
      if (windowWidth <= 1024) return baseX * 0.6; // Tablet
      if (windowWidth <= 1280) return baseX * 0.8; // Small desktop
      return baseX; // Large desktop
    };

    // Replace the getResponsiveY function with this optimized version:
    const getResponsiveY = (baseY) => {
      if (windowWidth <= 480) {
        // Small mobile - more vertical compression
        if (baseY <= 20) return baseY * 0.8;
        if (baseY <= 40) return baseY * 0.9;
        if (baseY <= 60) return baseY * 1.0;
        return baseY * 1.1;
      }
      if (windowWidth <= 640) {
        // Mobile - balanced spacing
        if (baseY <= 20) return baseY * 0.9;
        if (baseY <= 40) return baseY * 1.0;
        if (baseY <= 60) return baseY * 1.1;
        return baseY * 1.2;
      }
      if (windowWidth <= 768) {
        // Large mobile/Small tablet
        if (baseY <= 20) return baseY * 0.95;
        if (baseY <= 40) return baseY * 1.0;
        if (baseY <= 60) return baseY * 1.05;
        return baseY * 1.1;
      }
      if (windowWidth <= 1024) {
        // Tablet - slight adjustments
        if (baseY <= 20) return baseY * 1.0;
        if (baseY <= 40) return baseY * 1.05;
        if (baseY <= 60) return baseY * 1.1;
        return baseY * 1.15;
      }
      return baseY; // For larger screens, use original y positions
    };

    const initialBubbles = bubbleConfig.map((bubble, index) => {
      const logo = bubble.logo;
      const size = getResponsiveSize(bubble.size);
      const x = getResponsiveX(bubble.x);
      const y = getResponsiveY(bubble.y);

      return {
        id: index,
        x,
        y,
        size,
        verticalSpeed: 0.2 + Math.random() * 0.6,
        verticalAmplitude: 6 + Math.random() * 4,
        horizontalSpeed: baseSpeed,
        delay: Math.random() * 4,
        logo,
        opacity: bubble.opacity || 1,
        zIndex: bubble.zIndex || Math.floor(index % 5),
        caseStudyLink: bubble.caseStudyLink || "#",
        videoSrc: bubble.videoSrc || "/videos/default-case-study.mp4",
        title: bubble.title || "Case Study",
        stats: bubble.stats || [],
      };
    });

    setBubbles(initialBubbles);

    let animationFrameId;
    let lastTimestamp = 0;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = Math.min((timestamp - lastTimestamp) / 1000, 0.05);
      lastTimestamp = timestamp;

      setBubbles((prev) =>
        prev.map((bubble) => {
          const time = timestamp / 1000 + bubble.delay;
          const verticalOffset =
            Math.sin(time * bubble.verticalSpeed) * bubble.verticalAmplitude;
          let newX = bubble.x - bubble.horizontalSpeed * deltaTime * 60;

          if (newX < -bubble.size) {
            newX = windowWidth + Math.random() * 100;
          }

          return { ...bubble, x: newX, verticalOffset };
        })
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [bubbleConfig, windowWidth]);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            transform: `translateY(${bubble.verticalOffset || 0}px)`,
            opacity: bubble.opacity,
            transition: "transform 0.3s ease-out, opacity 0.3s ease",
            zIndex: bubble.zIndex,
          }}
          onMouseEnter={() => setHoveredBubble(bubble.id)}
          onMouseLeave={() => setHoveredBubble(null)}
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              fill
              src={bubble.logo.img || null}
              alt={bubble.logo.name || "Company Logo"}
              className="w-full h-full object-contain p-2 rounded-full"
              style={{
                aspectRatio: "1/1",
                objectFit: "contain",
                padding: "2%",
              }}
            />
          </div>
        </div>
      ))}

      {/* Video Popup */}
      {/* {activePopup && (
        <VideoPopup
          isOpen={!!activePopup}
          onClose={() => setActivePopup(null)}
          videoSrc={activePopup.videoSrc}
          caseStudyLink={activePopup.caseStudyLink}
          title={activePopup.title}
          stats={activePopup.stats}
        />
      )} */}
    </div>
  );
};

const FloatingBubblesPage = () => {
  // Static bubble configuration - you can manually adjust these positions
  const staticBubbleConfig = [
    // Row 1 - Top layer (y: 10-20)
    {
      x: 10,
      y: 15,
      size: 160,
      logo: {
        name: "Toubros",
        img: "/images/logos/Toubros.png",
      },
      opacity: 0.95,
      zIndex: 1,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/apple-case-study.mp4",
      title: "Toubros Success Story",
      stats: [
        { value: "25%", label: "Conversion Rate" },
        { value: "4.8", label: "Average Rating" },
        { value: "10K+", label: "Total Orders" },
      ],
    },
    {
      x: 180,
      y: 10,
      size: 170,
      logo: {
        name: "Anadam Resort",
        img: "/images/logos/anadam resort.png",
      },
      opacity: 0.9,
      zIndex: 2,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/google-case-study.mp4",
      title: "Anadam Resort Partnership",
      stats: [
        { value: "40%", label: "Conversion Rate" },
        { value: "4.9", label: "Average Rating" },
        { value: "15K+", label: "Total Orders" },
      ],
    },
    {
      x: 450,
      y: 18,
      size: 100,
      logo: {
        name: "Bicycle Studio",
        img: "/images/logos/sport.jpeg",
      },
      opacity: 0.95,
      zIndex: 3,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/microsoft-case-study.mp4",
      title: "Bicycle Studio Integration",
      stats: [
        { value: "35%", label: "Conversion Rate" },
        { value: "4.7", label: "Average Rating" },
        { value: "8K+", label: "Total Orders" },
      ],
    },
    {
      x: 750,
      y: 12,
      size: 165,
      logo: {
        name: "Defyn",
        img: "/images/logos/Defyn.png",
      },
      opacity: 0.9,
      zIndex: 4,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/amazon-case-study.mp4",
      title: "Defyn Marketplace",
      stats: [
        { value: "30%", label: "Conversion Rate" },
        { value: "4.6", label: "Average Rating" },
        { value: "20K+", label: "Total Orders" },
      ],
    },
    {
      x: 1000,
      y: 20,
      size: 170,
      logo: {
        name: "Funtitled",
        img: "/images/logos/fUntitled-3.png",
      },
      opacity: 0.95,
      zIndex: 5,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/netflix-case-study.mp4",
      title: "Funtitled Campaign",
      stats: [
        { value: "45%", label: "Conversion Rate" },
        { value: "4.9", label: "Average Rating" },
        { value: "12K+", label: "Total Orders" },
      ],
    },
    {
      x: 1250,
      y: 15,
      size: 160,
      logo: {
        name: "GD",
        img: "/images/logos/GD.png",
      },
      opacity: 0.9,
      zIndex: 1,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/tesla-case-study.mp4",
      title: "GD Innovation",
      stats: [
        { value: "50%", label: "Conversion Rate" },
        { value: "4.8", label: "Average Rating" },
        { value: "5K+", label: "Total Orders" },
      ],
    },

    // Row 2 - Middle-top layer (y: 30-40)
    {
      x: 60,
      y: 35,
      size: 165,
      logo: {
        name: "IMA",
        img: "/images/logos/Internal Medical Assistance.png",
      },
      opacity: 0.9,
      zIndex: 4,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/spotify-case-study.mp4",
      title: "IMA Services",
      stats: [
        { value: "33%", label: "Conversion Rate" },
        { value: "4.6", label: "Average Rating" },
        { value: "11K+", label: "Total Orders" },
      ],
    },
    {
      x: 250,
      y: 32,
      size: 175,
      logo: {
        name: "Meditation",
        img: "/images/logos/meditation.png",
      },
      opacity: 0.95,
      zIndex: 5,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/slack-case-study.mp4",
      title: "Meditation App",
      stats: [
        { value: "28%", label: "Conversion Rate" },
        { value: "4.4", label: "Average Rating" },
        { value: "6K+", label: "Total Orders" },
      ],
    },
    {
      x: 710,
      y: 38,
      size: 170,
      logo: {
        name: "Moow",
        img: "/images/logos/Moow.png",
      },
      opacity: 0.95,
      zIndex: 1,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/shopify-case-study.mp4",
      title: "Moow Store",
      stats: [
        { value: "36%", label: "Conversion Rate" },
        { value: "4.8", label: "Average Rating" },
        { value: "14K+", label: "Total Orders" },
      ],
    },
    {
      x: 1200,
      y: 40,
      size: 165,
      logo: {
        name: "Mutual Divorce",
        img: "/images/logos/Mutual divorce.png",
      },
      opacity: 0.9,
      zIndex: 2,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/airbnb-case-study.mp4",
      title: "Mutual Divorce Services",
      stats: [
        { value: "41%", label: "Conversion Rate" },
        { value: "4.9", label: "Average Rating" },
        { value: "8K+", label: "Total Orders" },
      ],
    },
    {
      x: 1450,
      y: 20,
      size: 175,
      logo: {
        name: "ReneSaas",
        img: "/images/logos/renesaas.png",
      },
      opacity: 0.9,
      zIndex: 3,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/twitter-case-study.mp4",
      title: "ReneSaas Platform",
      stats: [
        { value: "29%", label: "Conversion Rate" },
        { value: "4.3", label: "Average Rating" },
        { value: "13K+", label: "Total Orders" },
      ],
    },
    {
      x: 1550,
      y: 35,
      size: 160,
      logo: {
        name: "Rhytansh",
        img: "/images/logos/rhytansh.png",
      },
      opacity: 0.95,
      zIndex: 4,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/linkedin-case-study.mp4",
      title: "Rhytansh Solutions",
      stats: [
        { value: "44%", label: "Conversion Rate" },
        { value: "4.7", label: "Average Rating" },
        { value: "9K+", label: "Total Orders" },
      ],
    },

    // Row 3 - Middle layer (y: 50-60)
    {
      x: 20,
      y: 55,
      size: 170,
      logo: {
        name: "Rise and Care",
        img: "/images/logos/Rise and care.png",
      },
      opacity: 0.95,
      zIndex: 2,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/stripe-case-study.mp4",
      title: "Rise and Care Services",
      stats: [
        { value: "46%", label: "Conversion Rate" },
        { value: "4.9", label: "Average Rating" },
        { value: "18K+", label: "Total Orders" },
      ],
    },
    {
      x: 260,
      y: 53,
      size: 165,
      logo: {
        name: "SLCM India",
        img: "/images/logos/SLCM india.png",
      },
      opacity: 0.9,
      zIndex: 3,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/discord-case-study.mp4",
      title: "SLCM India",
      stats: [
        { value: "31%", label: "Conversion Rate" },
        { value: "4.4", label: "Average Rating" },
        { value: "7K+", label: "Total Orders" },
      ],
    },
    {
      x: 450,
      y: 40,
      size: 175,
      logo: {
        name: "TTM",
        img: "/images/logos/TTM.png",
      },
      opacity: 0.9,
      zIndex: 4,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/notion-case-study.mp4",
      title: "TTM Solutions",
      stats: [
        { value: "39%", label: "Conversion Rate" },
        { value: "4.8", label: "Average Rating" },
        { value: "5K+", label: "Total Orders" },
      ],
    },
    {
      x: 490,
      y: 68,
      size: 170,
      logo: {
        name: "United Layer",
        img: "/images/logos/united layer.png",
      },
      opacity: 0.95,
      zIndex: 5,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/figma-case-study.mp4",
      title: "United Layer",
      stats: [
        { value: "43%", label: "Conversion Rate" },
        { value: "4.9", label: "Average Rating" },
        { value: "11K+", label: "Total Orders" },
      ],
    },
    {
      x: 1620,
      y: 60,
      size: 165,
      logo: {
        name: "Vertex Wizard",
        img: "/images/logos/vertex wizard.png",
      },
      opacity: 0.9,
      zIndex: 1,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/canva-case-study.mp4",
      title: "Vertex Wizard",
      stats: [
        { value: "34%", label: "Conversion Rate" },
        { value: "4.5", label: "Average Rating" },
        { value: "12K+", label: "Total Orders" },
      ],
    },
    {
      x: 1450,
      y: 55,
      size: 170,
      logo: {
        name: "Yattri Tours",
        img: "/images/logos/yattri-tours.png",
      },
      opacity: 0.95,
      zIndex: 2,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/dropbox-case-study.mp4",
      title: "Yattri Tours",
      stats: [
        { value: "27%", label: "Conversion Rate" },
        { value: "4.3", label: "Average Rating" },
        { value: "8K+", label: "Total Orders" },
      ],
    },

    // Row 4 - Bottom layer (y: 70-90)
    {
      x: 70,
      y: 75,
      size: 175,
      logo: {
        name: "Hithyush",
        img: "/images/logos/Hithyush.png",
      },
      opacity: 0.95,
      zIndex: 1,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/hubspot-case-study.mp4",
      title: "Hithyush Solutions",
      stats: [
        { value: "35%", label: "Conversion Rate" },
        { value: "4.6", label: "Average Rating" },
        { value: "9K+", label: "Total Orders" },
      ],
    },
    {
      x: 300,
      y: 77,
      size: 170,
      logo: {
        name: "Indigo",
        img: "/images/logos/learners galaxy.png",
      },
      opacity: 0.9,
      zIndex: 2,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/asana-case-study.mp4",
      title: "Indigo Services",
      stats: [
        { value: "30%", label: "Conversion Rate" },
        { value: "4.4", label: "Average Rating" },
        { value: "7K+", label: "Total Orders" },
      ],
    },
    {
      x: 610,
      y: 85,
      size: 175,
      logo: {
        name: "Toubros",
        img: "/images/logos/Toubros.png",
      },
      opacity: 0.95,
      zIndex: 3,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/mailchimp-case-study.mp4",
      title: "Toubros Solutions",
      stats: [
        { value: "41%", label: "Conversion Rate" },
        { value: "4.7", label: "Average Rating" },
        { value: "14K+", label: "Total Orders" },
      ],
    },
    {
      x: 840,
      y: 78,
      size: 165,
      logo: {
        name: "Bicycle Studio",
        img: "/images/logos/Bicycle studio.png",
      },
      opacity: 0.9,
      zIndex: 4,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/zendesk-case-study.mp4",
      title: "Bicycle Studio Services",
      stats: [
        { value: "33%", label: "Conversion Rate" },
        { value: "4.5", label: "Average Rating" },
        { value: "10K+", label: "Total Orders" },
      ],
    },
    {
      x: 1170,
      y: 68,
      size: 170,
      logo: {
        name: "Defyn",
        img: "/images/logos/Defyn.png",
      },
      opacity: 0.95,
      zIndex: 5,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/atlassian-case-study.mp4",
      title: "Defyn Solutions",
      stats: [
        { value: "37%", label: "Conversion Rate" },
        { value: "4.6", label: "Average Rating" },
        { value: "8K+", label: "Total Orders" },
      ],
    },
    {
      x: 850,
      y: 57,
      size: 170,
      logo: {
        name: "Funtitled",
        img: "/images/logos/indigo.png",
      },
      opacity: 0.9,
      zIndex: 1,
      caseStudyLink: "/blogs-internal",
      videoSrc: "/videos/intercom-case-study.mp4",
      title: "Funtitled Services",
      stats: [
        { value: "29%", label: "Conversion Rate" },
        { value: "4.3", label: "Average Rating" },
        { value: "6K+", label: "Total Orders" },
      ],
    },
  ];

  return (
    <div className="w-full h-screen bg-gray-950">
      <FloatingBubbles bubbleConfig={staticBubbleConfig} />
    </div>
  );
};

export default FloatingBubblesPage;
