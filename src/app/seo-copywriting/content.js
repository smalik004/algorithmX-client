'use client';
import { DropletIcon, Scissors, ShoppingCart, MousePointer } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { Montserrat } from 'next/font/google';
import style from "../graphics/styles.module.css"


const monsterfont1 = Montserrat ({
subsets : ["latin"],
weight :"400",
fallback : ["sans-serif"],
})
const monsterfont = Montserrat ({
subsets : ["latin"],
weight :"300",
fallback : ["sans-serif"],
})
const monsterfont4 = Montserrat ({
    subsets : ["latin"],
    weight :"700",
    fallback : ["sans-serif"],
})

const CopywritingMarketingApproach = () => {
const [isInView, setIsInView] = useState(false);
const scalableRef = useRef(null);
  useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isInView) {
            setIsInView(true);
          }
        },
        { threshold: 0.5 } // Trigger animation when 50% of the component is in view
      );
  
      if (scalableRef.current) {
        observer.observe(scalableRef.current);
      }
  
      return () => {
        if (scalableRef.current) {
          observer.unobserve(scalableRef.current);
        }
      };
    }, [isInView]);

const steps = [
{
  icon: <DropletIcon className="w-12 h-12 text-blue-500" />,
  title: "Audience and Market Research",
  description: "Understand your target audience's needs, preferences, and search behaviors. Conduct thorough market research to tailor content that resonates with readers and meets their specific queries."
},
{
  icon: <Scissors className="w-12 h-12 text-blue-500" />,
  title: "Strategic Keyword Placement",
  description: "Identify and incorporate high-value keywords naturally within the content. Focus on primary keywords, long-tail phrases, and semantic variations to optimize for search engines without compromising readability."
},
{
  icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
  title: "Engaging and Informative Content",
  description: "Create high-quality, valuable content that engages readers and addresses their questions or problems. Ensure the content is well-structured, easy to read, and includes relevant images, videos, or infographics to enhance user experience."
},
{
  icon: <MousePointer className="w-12 h-12 text-blue-500" />,
  title: "Continuous Performance Monitoring and Adjustment",
  description: "Regularly monitor content performance using SEO tools and analytics. Analyze metrics such as traffic, bounce rates, and conversion rates to identify areas for improvement. Continuously update and optimize content to align with evolving SEO best practices and algorithm changes."
}
];

return (
<div className="min-h-screen bg-black p-8">
  <div className="max-w-[1200px] mx-auto">
  <div className="text-center mb-16 relative overflow-hidden">
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span
          ref={scalableRef}
          className={`${style["main-scalable"]} transform transition-transform duration-700 ${monsterfont4.className} ${
            isInView ? `${style["scale-110"]} ${style["opacity-100"]}` : `${style["scale-75"]} ${style["opacity-0"]}`
          }`}
          
        >
          SERVICES
        </span>
      </div>
      <div className="relative z-10">
        <h2 className={` text-[40px] leading-[48px] ${monsterfont.className} mt-6 md:mt-16 text-white`}>
          OUR SEO
        </h2>
        <h2 className={`text-[40px] leading-[48px] ${monsterfont4.className} text-white -mt-2`}>
          COPYWRITING APPROACH
        </h2>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map((step, index) => (
        <div 
          key={index} 
          style={{ border: "1px solid rgba(255, 255, 255, 0.1)" }}
  className="flex flex-col items-center text-center h-min px-10 pb-9 p-4"

        >
          <div className="mb-6">
            {step.icon}
          </div>
          <h3 className={`text-[24px] leading-[1.5] mb-[20px] text-white ${monsterfont4.className} `}>{step.title}</h3>
          <p className={`text-[16px] leading-[28px]  font-[400] font-helveticaneue  text-semi-white`}>{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
);
};

export default CopywritingMarketingApproach;