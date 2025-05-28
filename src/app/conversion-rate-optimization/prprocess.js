'use client'
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';
import styles from "../public-relations/styles.module.css";

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
    title: "1. COMPREHENSIVE WEBSITE AUDIT FOR IMMEDIATE IMPROVEMENTS",
    description: "At inception of our audit, our conversion rate optimization consultant will review your website and analytics to find areas where we can make improvements, allowing us to come up with strategies to boost your online performance."
    },
    {
    number: 2,
    title: "2. ANALYTICS CONVERSION RATE AUDIT",
    description: "We will now examine your conversion rates based on location, traffic sources, demographics, devices and other factors, and we will identify places with the least conversions, enabling our conversion rate optimization agency to identify where improvements could be more beneficial."
    },
    {
    number: 3,
    title: "3. DESKTOP CRO AUDIT",
    description: "During this stage, our efforts are directed towards enhancing desktop conversion rates by setting up a section in analytics to utilize real data to identify potential problems. Moreover, we rely on our industry knowledge and experiments conducted through our CRO services."
    },
    {
    number: 4,
    title: "4. MOBILE CRO AUDIT",
    description: "AlgorithmX offers the best mobile conversion rate optimization services in the industry. Our unique process of reviewing data using Google Analytics and providing suggestions often leads to a boost in conversion rates exceeding 50%. Throughout this stage, we thoroughly assess your mobile website CRO."
    },
    {
    number: 5,
    title: "5.CHECKOUT PROCESS CRO AUDIT",
    description: "During this stage, every stage of your checkout process is deeply assessed. We recommend simplifying procedures, integrating new technologies, employing auto-fill forms, or altering both design and text contents to increase your conversion rates. Our recent modifications to a customer’s sales funnel resulted in a 300% surge in conversion rates, and significant increase in their revenue annually."
    },
    {
    number: 6,
    title: "6. TESTS",
    description: "At AlgorithmX, we have a set of tests that have shown results for our clients consistently. Our leading conversion rate optimization agency suggests new tests every month to improve your conversion rates."
    }
];

const handleStepClick = (step) => {
    setActiveStep(step);
};

return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
    <div className="w-full max-w-5xl mx-auto p-4">
        {/* Title on top */}
        <h1 className={`${styles["our-text"]} ${monsterfont1.className}`}>Our</h1>
        <h2 className={`${styles["pr-text"]} ${monsterfont.className} text-center`}>CRO PROCESS</h2>
        <div className="flex justify-center items-center ">
        <div className="mx-auto w-[35px] h-[2px] bg-[#2775ff] mt-5 mb-[60px]"></div>
</div>

<div className="flex justify-between mb-8 max-w-5xl mx-auto ">
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
<div className="relative mb-8  max-w-[61rem] mx-auto">
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

            <div className="mt-[100px] space-y-4 text-white  max-w-5xl mx-auto">
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
