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

export default function LinkedinContent() {
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
          <div className="flex flex-col md:flex-col lg:flex-col space-y-2">
            <span className={`${styles["explore"]} ${monsterfont1.className} text-white`}>What can our
            </span>
            <div className="space-x-2">
              <span className={`${styles["explore"]} ${monsterfont.className} text-white`}>Linkedin</span>
            </div>
            <div>
              <span className={`${styles["explore"]} ${monsterfont.className} text-white`}>marketing</span>
            </div>
            <span className={`${styles["explore"]} ${monsterfont.className} text-white`}>agency</span>
          </div>

          {/* Vertical Line and Text */}
          <div className="flex items-center">
            <div className="h-20 border-l-8 border-blue-500 rounded-full mr-6"></div>
            <p className={`${styles["content"]} text-semi-white`}>
              <span className={monsterfont3.className}>DO FOR YOUR</span>
              <br />
              <span className={monsterfont2.className}>BUSINESS</span>
            </p>
          </div>
        </div>

        {/* Right Section (Scrollable) */}
        <div className={`${styles["flx_right"]}`}>
          {/* All your existing content items */}
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`} >Build Brand Awareness</h2>
            <p className={`${styles["scroll-description"]} text-semi-white font-helveticaneue`}>
            Your LinkedIn presence is essential for building brand awareness. Every post, ad, and piece of content strengthens your brand’s identity. Our agency creates LinkedIn ads that match your style, drawing in users who may not yet follow you. Consistent, branded content boosts recognition, fostering loyalty that translates into sales.
            </p>
            <div className="border-b-[1px] border-gray-700 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white font-helveticaneue`}>Target the Right Audience</h2>
            <p className={`${styles["scroll-description"]} text-semi-white font-helveticaneue`}>
            Effective marketing begins with knowing your audience. Our agency helps identify your target audience through competitor research and analysis of your current LinkedIn presence. This focus ensures your marketing budget is used efficiently, reaching those most likely to engage with your business.
            </p>
            <div className="border-b-[1px] border-gray-700 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white font-helveticaneue`}>Create LinkedIn-Specific Content 
            </h2>
            <p className={`${styles["scroll-description"]} text-semi-white font-helveticaneue`}>
            We handle the content creation for your LinkedIn profile, from keyword research to crafting engaging posts. By focusing on both long-tail and short-tail keywords, we create content that resonates with your audience, driving traffic and encouraging clicks to your website.
            </p>
            <div className="border-b-[1px] border-gray-700 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white font-helveticaneue`}>Engage with Your Audience</h2>
            <p className={`${styles["scroll-description"]} text-semi-white font-helveticaneue`}>Interacting with followers builds trust. We monitor your LinkedIn profile to respond thoughtfully to comments and messages, enhancing relationships with your audience. This interaction establishes trust and fosters a loyal community around your brand.We produce well-researched documents that establish your brand’s thought leadership and credibility.
            </p>
            <div className="border-b-[1px] border-gray-700 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white font-helveticaneue`}>Drive Website Traffic
            </h2>
            <p className={`${styles["scroll-description"]} text-semi-white font-helveticaneue`}>
            Through compelling content, strong calls-to-action, and strategic linking, we increase website traffic. Our LinkedIn strategists create campaigns that prioritize traffic and conversions, helping you achieve measurable growth in site visits and user engagement.
            </p>
            <div className="border-b-[1px] border-gray-700 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white font-helveticaneue`}>Create LinkedIn ads and landing pages</h2>
            <p className={`${styles["scroll-description"]} text-semi-white font-helveticaneue`}>
            LinkedIn is a top platform for B2B lead generation. We handle all aspects of LinkedIn ads and custom landing pages. Using targeted keywords, we reach your ideal audience, crafting ads and landing pages that convert clicks into leads and customers.
            </p>
            <div className="border-b-[1px] border-gray-700 my-4"></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} text-white font-helveticaneue `}>Provide In-Depth Campaign Reporting</h2>
            <p className={`${styles["scroll-description"]} text-semi-white font-helveticaneue `}>
            We provide comprehensive reports, offering insights into lead generation, brand awareness, engagement, and more. As a top LinkedIn marketing agency, we ensure transparency by giving you clear data on your campaign’s performance and suggesting improvements for ongoing success. Each of these services is designed to build a powerful LinkedIn presence, helping your business connect with the right audience and achieve sustained growth.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}