'use client'
import React, { useEffect, useRef } from "react";
import styles from "../contentcreation/style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "800",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});

export default function MachineTech() {
  const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
    
        const rightSection = container.querySelector(`.${styles.flx_right}`);
        if (!rightSection) return;
    
        const handleScroll = (e) => {
          // Precise scroll limit checks
          const scrollTop = rightSection.scrollTop;
          const scrollHeight = rightSection.scrollHeight;
          const clientHeight = rightSection.clientHeight;
          const scrollBottom = scrollHeight - clientHeight;
    
          // More precise bottom and top checks
          const isAtBottom = Math.abs(scrollTop - scrollBottom) < 1;
          const isAtTop = scrollTop <= 0;
    
          // Detailed scroll prevention logic
          if ((isAtBottom && e.deltaY > 0) || (isAtTop && e.deltaY < 0)) {
            return; // Allow page scroll
          }
    
          // Prevent default page scroll and scroll right section
          e.preventDefault();
          e.stopPropagation();
    
          // Smooth scroll calculation
          const scrollAmount = e.deltaY;
          let newScrollTop = scrollTop + scrollAmount;
    
          // Clamp scroll position
          newScrollTop = Math.max(0, Math.min(newScrollTop, scrollBottom));
          rightSection.scrollTop = newScrollTop;
        };
    
        // Use passive: false to allow preventDefault
        container.addEventListener('wheel', handleScroll, { passive: false });
    
        return () => {
          container.removeEventListener('wheel', handleScroll);
        };
      }, []);

  return (
    <div ref={containerRef} className="bg-black min-h-screen flex justify-center items-center">
      <div className={`${styles["container1"]} w-full max-w-[1200px] mx-auto ${styles["algo-content-creation-services"]}`}>
        {/* Left Section (Sticky) */}
        <div className={`${styles["flx_left"]} flex flex-col lg:flex-row`}>
          <div className="flex flex-col md:flex-col lg:flex-col ">
            <span className={`text-[64px] leading-[68px]   text-white ${monsterfont1.className}`}>Explore Our</span>
            <div className="space-x-2">
              <span className={`text-[50px] leading-[54px] ${monsterfont.className} text-white`}>ML & AI</span>
            </div>
            <div>
              <span className={`text-[40px] leading-[44px] ${monsterfont.className} text-white`}>App</span>
            </div>
            <span className={`text-[40px] leading-[44px] ${monsterfont.className} mb-[30px] text-white`}>Development</span>
          </div>

          {/* Vertical Line and Text */}
          <div className="flex items-center">
            <div className="h-20 border-l-4 border-[#2775ff] rounded-[10px]  mr-6"></div>
            <p className={`${styles["content"]} text-semi-white`}>
              <span className={monsterfont3.className}>Technologies that Fuel</span>
              <br />
              <span className={monsterfont2.className}>OUR ML</span>
            </p>
          </div>
        </div>

        {/* Right Section (Scrollable) */}
        <div className={`${styles["flx_right"]}`}>
          {/* All your existing content items */}
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`} >Artifical Intelligence (AI)</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
              At our premier content creation firm, we carefully plan article concepts and generate top-notch content tailored to enhance your brand’s online presence.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Computer Vision</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Our content creation agency crafts compelling product descriptions that highlight the key features, captivate your customers and drive conversions.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Natural Language Processing 
            </h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            AlgorithmX offers excellent proofreading services to ensure your content is consistently error-free.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Data Mining</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            We produce well-researched documents that establish your brand’s thought leadership and credibility.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Data Learning</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Our well-written and engaging SEO-optimized blogs enhance your SERP ranking, drive traffic, and elevate your visibility online.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Robotic Process Automation</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            We offer comprehensive website content creation services, creating compelling content that effectively communicates your brand’s message and reaches your desired audience.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Cloud</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            AlgorithmX’s SEO content creation services involve thorough keyword research that enables us to craft tailored and optimized content for your business needs.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue  text-white`}>Big Data & Analytics</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Being a content creation marketing agency, we create media exposure and enhance brand recognition with our on-time press releases.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

        </div>
      </div>
    </div>
  
  );
}
