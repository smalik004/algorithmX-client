    'use client'
    import React, { useState } from 'react';
    import { Montserrat } from 'next/font/google';
    import styles from "./styles.module.css";

    const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "100",
    fallback: ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
        subsets: ["latin"],
        weight: "300",
        fallback: ["sans-serif"],
        });
    const monsterfont2 = Montserrat({
            subsets: ["latin"],
            weight: "700",
            fallback: ["sans-serif"],
            });


    const PRProcessVisualization = () => {
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
        number: 1,
        title: "1. Backlink Cleanup",
        description: "Although backlinks have advantages, but they also come with downsides. As part of our PR consultancy services, we clean up and reclaim links from untrusted sources. This process involves using advanced tools to identify harmful links, searching for websites hosting them, communicating with the webmasters to have them removed and preparing a disavowal file for Google. Moreover, we work on fixing the broken links and correcting any linked content to enhance your online performance and bid goodbye to any harmful backlinks that hinder your success."
        },
        {
        number: 2,
        title: "2. STORY PITCHING",
        description: "To create content that showcases your company in the best light, the digital PR team at AlgorithmX works closely with content writers and digital strategists to build engaging narratives and content. Our specialization in public relations for startup companies produces content that carefully reflects your brand values and can be successfully pitched to media channels in your field."
        },
        {
        number: 3,
        title: "3. Journalist Response Requisition",
        description: "Engaging with the media is extremely crucial in PR and it is a time-consuming job. In our public relations services, we track future media opportunities and establish relationships with journalists who specialize in your industry/niche. We actively seek chances to offer expert opinions or secure placements for our clients in digital PR services, helping you establish yourself as a unique voice and leading expert in your sector."
        },
        {
        number: 4,
        title: "4. Orchestrated Outreach and Content Promotion",
        description: "Your brand’s success heavily depends on public relations outreaches. By partnering with AlgorithmX and leveraging our PR services for agencies, our team takes care of planning, and implementing valuable opportunities for your business. Additionally, we analyze your target audience, carry out research and strategically share your press releases on industry-specific platforms to boost your engagement and popularity."
        },
        {
        number: 5,
        title: "5. Competitive Backlink Gap Analysis",
        description: "Wondering why are your competitors ranking higher on Google SERPs? Chances are it’s because of their strong network of backlinks. Our public relations company works together with you to improve your performance by analyzing your key competitors’ backlink profiles, allowing us to identify and adopt the tactics for enhancing and broadening your backlink network. helping us understand which content is most appealing to your target audience bridging the gap between your competitors and your brand in the industry."
        },
        {
        number: 6,
        title: "6. Unlinked Brand Mentions",
        description: "Online marketing involves brand referencing but not all that references include links to your website. As part of our public relations services, we identify those references without links and get in touch with the website owners urging them to turn the mention into a clickable link leading back at your website. It’s always beneficial for you to get a backlink if they’re mentioning your brand."
        }
    ];

    const handleStepClick = (step) => {
        setActiveStep(step);
    };

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-2 md:p-6">
        <div className="w-full max-w-5xl mx-auto p-4">
            {/* Title on top */}
            <h1 className={`${styles["our-text"]} ${monsterfont1.className}`}>Our</h1>
            <h2 className={`${styles["pr-text"]} ${monsterfont.className} text-center`}>PR PROCESS</h2>
            <div className="flex justify-center items-center ">
            <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-[30px] mb-[30px]"></div>
</div>

<div className="flex justify-between mb-8  ">
  {steps.map((step) => (
    <button
      key={step.number}
      className={`${
        activeStep === step.number
          ? ' text-white'
          : 'bg-transparent '
      } py-2 transition-colors text-sm ${styles["step-text"]} ${monsterfont2.className}`}
      onClick={() => handleStepClick(step.number)}
    >
      STEP {step.number}
    </button>
  ))}
</div>

{/* Progress bar with dots */}
<div className="relative mb-8">
  {/* White background line */}
  <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-2 bg-white">
    {/* Green progress line */}
    <div 
      className="absolute left-0 h-2 bg-[#13a987] transition-all duration-300" 
      style={{ 
        width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` 
      }} 
    />
    
    {/* Step indicators (dots) */}
    {steps.map((step) => (
  <button
    key={step.number}
    className={`absolute w-8 h-8 rounded-full transition-all duration-300 ${
      step.number < activeStep 
        ? 'bg-[#13a987]' // Completed steps get full green fill
        : step.number === activeStep
          ? 'bg-white border-4 border-[#13a987]' // Active step gets white fill with green border
          : 'bg-white' // Upcoming steps remain white
    }`}
    style={{
      left: `${((step.number - 1) / (steps.length - 1)) * 100}%`,
      transform: 'translate(-50%, -40%)'
    }}
    onClick={() => handleStepClick(step.number)}
  />
))}
  </div>
</div>

            <div className="mt-[100px] space-y-4 text-white">
            <div className="">
                <h2 className={`${styles["pr-title"]} ${monsterfont2.className}`}>{steps[activeStep - 1].title}</h2>
                <p className={`${styles["pr-description"]} font-opensans text-semi-white`}>{steps[activeStep - 1].description}</p>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default PRProcessVisualization;
