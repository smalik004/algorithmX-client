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

  const MarketingApproach = () => {
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
      title: "Analysis",
      description: "Before a contract is ever signed, we dig into your business with a detailed appraisal. You get an in-depth report of what's working, what's not, and what opportunities we've found for serious, profitable growth."
    },
    {
      icon: <Scissors className="w-12 h-12 text-blue-500" />,
      title: "Digital Strategy",
      description: "We'll develop a content marketing strategy to fill content gaps and satisfy the needs of your audience. This includes content types and topics, distribution channels, cadence, tools and reporting."
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
      title: "Implementation",
      description: "Our copywriters develop perspectives, compelling presentations, quizzes, forms and landing pages that build trust with your audience and attract leads. Then, our content marketing company manages the publication and promotion to make sure the right people find and experience your website content and take action, whether sharing, engaging or taking action to buy."
    },
    {
      icon: <MousePointer className="w-12 h-12 text-blue-500" />,
      title: "Results, Rinse, Repeat",
      description: "As you build an engaged audience, they'll keep coming back for the value they're receiving. Our human-centric content engine builds fresh content, consistently, creating loyalty and generating repeat purchases from your existing customers, and attracting new customers, too."
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
              OUR CONTENT
            </h2>
            <h2 className={`text-[40px] leading-[48px] ${monsterfont4.className} text-white -mt-2`}>
              MARKETING APPROACH
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
              <h3 className={`text-[24px] leading-[1.5] mb-[20px] text-white  ${monsterfont4.className} `}>{step.title}</h3>
              <p className={`text-[16px] leading-[28px]  font-[400] font-helveticaneue  text-semi-white`}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketingApproach;