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

export default function Offer() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e) => {
      const rightSection = container.querySelector(`.${styles.flx_right}`);
      if (!rightSection) return;
    
      // Get scroll positions and limits
      const isAtBottom = rightSection.scrollTop + rightSection.clientHeight >= rightSection.scrollHeight;
      const isAtTop = rightSection.scrollTop === 0;
    
      // Allow default page scrolling if at the top or bottom of the right section
      if ((isAtBottom && e.deltaY > 0) || (isAtTop && e.deltaY < 0)) {
        return;
      }
    
      // Prevent default behavior and scroll the right section
      e.preventDefault();
      rightSection.scrollTop += e.deltaY;
    };
    

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
              <span className={`md:text-[64px] md:leading-[68px]  text-[44px] leading-[48px] ${monsterfont.className} text-white`}>dApp</span>
            </div>
            <div>
              <span className={`md:text-[64px] md:leading-[68px]  text-[44px] leading-[48px]  ${monsterfont.className} text-white`}>Development</span>
            </div>
            <span className={`md:text-[64px] md:leading-[68px]  text-[44px] leading-[48px]  ${monsterfont.className} mb-[30px] text-white`}>Offer</span>
          </div>

          {/* Vertical Line and Text */}
          <div className="flex items-center">
            <div className="h-20 border-l-4 border-[#2775ff] rounded-[10px]  mr-6"></div>
            <p className={`${styles["content"]} text-semi-white`}>
              <span className={monsterfont3.className}>DISCOVERING OUR OFFERINGS</span>
              <br />
              <span className={monsterfont2.className}>OF dApp</span>
            </p>
          </div>
        </div>

        {/* Right Section (Scrollable) */}
        <div className={`${styles["flx_right"]}`}>
        <div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`} >Smart Contract Implementation</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Deploy secure and efficient smart contracts tailored to automate processes, enhance transparency, and reduce operational overhead on blockchain platforms.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>User Onboarding</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Streamline the onboarding process with intuitive interfaces and automated KYC/AML verification to provide a seamless experience for new users.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>User Friendliness</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Design responsive and intuitive platforms with simplified navigation and clean UI to ensure accessibility for users of all technical levels.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>Higher Speed</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Optimize blockchain transactions and backend operations to deliver lightning-fast performance and real-time interactions for end-users.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>KYC Authorization</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Implement robust KYC frameworks integrated with blockchain to ensure secure identity verification and regulatory compliance.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}> Ethereum Development Services</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Build and deploy scalable dApps, tokens, and smart contracts on Ethereum with custom development, testing, and deployment support.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

          

        </div>
      </div>
    </div>
  );
}