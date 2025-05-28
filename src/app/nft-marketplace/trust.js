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

export default function Trust() {
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
            <span className={`text-[64px] leading-[68px]   text-white ${monsterfont1.className}`}>Overcome Challenges</span>
            <div className="space-x-2">
              <span className={`md:text-[64px] md:leading-[68px]  text-[44px] leading-[48px] ${monsterfont.className} text-white`}>Master</span>
            </div>
            <div>
              <span className={`md:text-[64px] md:leading-[68px]  text-[44px] leading-[48px]  ${monsterfont.className} text-white`}>Scalability</span>
            </div>
          </div>

          {/* Vertical Line and Text */}
          <div className="flex items-center">
            <div className="h-20 border-l-4 border-[#2775ff] rounded-[10px]  mr-6"></div>
            <p className={`${styles["content"]} text-semi-white`}>
              <span className={monsterfont3.className}>NFT MARKETPLACE</span>
              <br />
              <span className={monsterfont2.className}>ARCHITECTURE</span>
            </p>
          </div>
        </div>

        {/* Right Section (Scrollable) */}
        <div className={`${styles["flx_right"]}`}>
        <div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`} >Flawless UX/UI</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Craft immersive and intuitive user experiences for your NFT platform, ensuring easy navigation, smooth interactions, and stunning visual design.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>99.9% Reliability</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Ensure uninterrupted performance of your NFT marketplace with highly reliable and scalable infrastructure designed for peak traffic.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>Smart Contracts</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Develop secure and gas-optimized smart contracts to handle NFT minting, trading, royalties, and ownership transfers seamlessly.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>Cyber Security</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Protect your NFT assets and user data with advanced security protocols, encryption standards, and regular smart contract audits.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>Crypto-Native Payment Options</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Integrate multiple crypto wallets and token-based payment systems for smooth, decentralized transactions within your NFT platform.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

<div className="mb-8">
  <h2 className={`${styles["scroll-title"]} text-white`}>AML/KYC Compliant</h2>
  <p className={`${styles["scroll-description"]} text-semi-white`}>
    Incorporate seamless AML/KYC modules to maintain compliance while offering a trustworthy and regulated environment for NFT users.
  </p>
  <div className={`${styles["borderb"]}  my-4`}></div>
</div>

        </div>
      </div>
    </div>
  );
}