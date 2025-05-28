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


const FranchiseProcessVisualization = () => {
const [activeStep, setActiveStep] = useState(1);

const steps = [
    {
    number: 1,
    title: "1. AUDIT EXISTING PROGRAM",
    description: "In the first stage, we meticulously review your ongoing digital marketing program, examining every piece of data and tactics in use. We then delve into understanding what has connected with your audience to guide our suggestions further. Our aim in analyzing your existing structure is to enhance your current strategies and build on past achievements for creating a customized plan that aligns with your target audience’s interests and actions effectively."
    },
    {
    number: 2,
    title: "2. DEVELOP STRATEGY TO ATTRACT FRANCHISEES",
    description: "In the next phase, our franchise digital marketing agency creates a customized strategy focused on obtaining new franchisees if exponential franchise growth is important to you. For this strategy to match your brand’s objectives, we consider different methods that include paid advertisements, email marketing, social media, and more. Our process guarantees that we use methodologies best suited to your requirements, increasing the likelihood of attracting franchisees and growing your business."
    },
    {
    number: 3,
    title: "3.  DEVELOP DIGITAL MARKETING STRATEGY TO FOR FRANCHISEES",
    description: "AlgorithmX’s core competence lies in formulating bespoke marketing strategies for franchisees that target new clients within their local areas. We use an integrated strategy to build your brand presence at all sites, promoting a sense of coherence. We concentrate on local marketing endeavors ensuring that each franchise can engage effectively with its local audience while staying true to your brand image."
    },
    {
    number: 4,
    title: "4. PRESENT AT FRANCHISEE OWNERS MEETING",
    description: "Once we have our strategies in place, our franchise marketing agency displays them at the meeting with franchisee owners, ensuring everyone is aligned on recognizing the importance of having a single marketing approach across all franchise locations. Sharing our plans together promotes clarity and unity, encouraging a common understanding amongst the stakeholders regarding the strategies and their goals."
    },
    {
    number: 5,
    title: "5.DELIVER MONTHLY AND QUARTERLY REPORTING",
    description: "The next step is providing you with monthly and quarterly reports that give in-depth insights into how your campaign is performing after the strategy kicks-off. It empowers you can keep an eye on the progress and success of our efforts, allowing you to make better decisions and tweaks as necessary. Our regular reporting offers you a clear picture of how our strategies are impacting your business, giving you the ability to optimize your marketing endeavors efficiently."
    },
    {
    number: 6,
    title: "6.  SCALE PROGRAM TO INCREASE PERFORMANCE",
    description: "In the last step, after our franchise digital marketing agency develops a deep knowledge of what resonates with your audience, we gradually build and grow your program to improve its impact and generate leads. Using our findings, we then expand your efforts to maximize performance, capturing a bigger portion of leads. Lastly, we guarantee exceptional growth and heightened success in drawing prospective leads by consistently expanding and improving your program tailored to audience preferences."
    }
];

const handleStepClick = (step) => {
    setActiveStep(step);
};

return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
    <div className="w-full max-w-6xl mx-auto p-4">
        {/* Title on top */}
        <h1 className={`${styles["our-text"]} ${monsterfont1.className}`}>Our</h1>
        <h2 className={`text-[50px] md:text-[56px] tracking-[0.06em] leading-[60px] md:${styles["pr-text"]} ${monsterfont.className} text-center `}>FRANCHISE MARKETING PROCESS</h2>
        <div className="flex justify-center items-center ">
<div className="w-10 h-1 bg-blue-600 mx-auto my-4"></div>
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
export default FranchiseProcessVisualization;
