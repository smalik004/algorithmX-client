'use client'
import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
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
          {/* All your existing content items */}
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`} >Article Writing</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
              At our premier content creation firm, we carefully plan article concepts and generate top-notch content tailored to enhance your brand’s online presence.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Product Description</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Our content creation agency crafts compelling product descriptions that highlight the key features, captivate your customers and drive conversions.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Editing & Proofreading 
            </h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            AlgorithmX offers excellent proofreading services to ensure your content is consistently error-free.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>White Paper</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            We produce well-researched documents that establish your brand’s thought leadership and credibility.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Blog Writing</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Our well-written and engaging SEO-optimized blogs enhance your SERP ranking, drive traffic, and elevate your visibility online.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Website Content</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            We offer comprehensive website content creation services, creating compelling content that effectively communicates your brand’s message and reaches your desired audience.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>SEO Writing</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            AlgorithmX’s SEO content creation services involve thorough keyword research that enables us to craft tailored and optimized content for your business needs.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue  text-white`}>Press Release</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Being a content creation marketing agency, we create media exposure and enhance brand recognition with our on-time press releases.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Article Rewriting</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Iterate pre-written articles to enhance content quality and boost SEO effectiveness.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue  text-white`}>Copy Writing</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Our engaging advertising copies attract and convert, establishing a strong online presence across all major content creation platforms.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>FAQ's</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            We create informative, clear, and concise FAQs that educate your clients and address their common queries as part of your content creation services.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Newsletter Writing</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            AlgorithmX produces comprehensive and well-structured newsletters that list your latest updates and insights to keep your subscribers informed and engaged.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Technical Content Writing</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Being one of the best content creation companies in USA, we simplify complex information with accuracy and clarity for your audience.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Emailers</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            We design persuasive and precise email campaigns to drive conversions and promote customer relationships to reach your marketing goals.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Case Studies</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Our team of content creation specialists provides detailed case studies with your achievements and solutions to build trust with your customers and showcase your expertise.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Magazine Writing</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            AlgorithmX’s content and branding creation team covers a wide range of topics with in-depth research tailored to your style to inform and educate your clients effectively.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>E-book </h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            We generate impactful e-books to assist you in digitally accessing untapped markets.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>

          <div className="mb-8">
            <h2 className={`${styles["scroll-title"]} font-helveticaneue text-white`}>Social Media Posts</h2>
            <p className={`${styles["scroll-description"]} font-helveticaneue text-semi-white`}>
            Our social media content creation agency focuses on crafting on-brand content for each of your social media platforms with consistent updates to maintain engagement.
            </p>
            <div className={`${styles["borderb"]}  my-4`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}