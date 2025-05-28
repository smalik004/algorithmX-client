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

export default function Content() {
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
              <span className={`text-[64px] leading-[68px] ${monsterfont.className} text-white`}>Content</span>
            </div>
            <div>
              <span className={`text-[64px] leading-[68px] ${monsterfont.className} text-white`}>Creation</span>
            </div>
            <span className={`text-[64px] leading-[68px] ${monsterfont.className} mb-[30px] text-white`}>Variety</span>
          </div>

          {/* Vertical Line and Text */}
          <div className="flex items-center">
            <div className="h-20 border-l-4 border-[#2775ff] rounded-[10px]  mr-6"></div>
            <p className={`${styles["content"]} text-semi-white`}>
              <span className={monsterfont3.className}>DISCOVERING OUR RANGE</span>
              <br />
              <span className={monsterfont2.className}>OF CONTENT</span>
            </p>
          </div>
        </div>

        {/* Right Section (Scrollable) */}
        <div className={`${styles["flx_right"]}`}>
        <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`} >TCO components</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Initial investments, frequent support, and ERP improvement costs offer higher ROI and lower ownership costs than the cost of pre-built ERPs.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Functionality</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Utilize advanced technologies such as Blockchain, AI/ML, and IoT to improve the efficiency of your business as the solutions are customized to match diverse client needs and processes.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Additional functionality 
            </h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Flexible and can be applied according to your business’s transformation or expansion needs.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Customization</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Offer limitless functionalities with high-quality personalization.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Integration</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Effortless integration by all crucial systems, including legacy software.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Learning curve</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Offers short learning curve due to custom User Interface (UI) and user-friendly User Experience (UX) for diverse user roles.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Scalability</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Hold huge potential to accommodate growth with endless possibilities.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Security</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Lower risks because of customized code design and amplified security measures.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Legal compliance</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            Compliance with all necessary global, regional and industry-relate regulations.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white`}>Maintenance and support</h2>
            <p className={`${styles["scroll-description"]} text-semi-white`}>
            A customer's preference is what determines whether to hire an in-house team or outsource to a vendor.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

        </div>
      </div>
    </div>
  );
}