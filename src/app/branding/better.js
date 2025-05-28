'use client';
import React, { useState, useEffect } from 'react';
import styles from "./style.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});


// Define the Icons object with image paths
const Icons = {
  Business: () => (
    <div className="w-12 h-12 ">
      <img src="/images/business.png" alt="Business" className="max-w-full max-h-full object-contain " />
    </div>
  ),
  Marketing: () => (
    <div className="w-12 h-12 ">
      <img src="/images/Marketing.png" alt="Marketing" className="max-w-full max-h-full object-contain" />
    </div>
  ),
  Communication: () => (
    <div className="w-12 h-12 ">
      <img src="/images/Close.png" alt="Communication" className="max-w-full max-h-full object-contain" />
    </div>
  ),
  Deadlines: () => (
    <div className="w-12 h-12 ">
      <img src="/images/Meeting.png" alt="Deadlines" className="max-w-full max-h-full object-contain" />
    </div>
  ),
  Results: () => (
    <div className="w-12 h-12 ">
      <img src="/images/Future.png" alt="Results" className="max-w-full max-h-full object-contain" />
    </div>
  ),
  Expectations: () => (
    <div className="w-12 h-12 ">
      <img src="/images/Exceeding.png" alt="Expectations" className="max-w-full max-h-full object-contain" />
    </div>
  ),
};


// Define FeatureCard component
const FeatureCard = ({ Icon, title, description, isHighlighted }) => (
  <div className={`bg-black p-8 rounded-[10px] py-16 px-5   text-center shadow-md transform transition-transform duration-300 hover:-translate-y-2 ${isHighlighted ? styles['box-border'] : 'bg-dark'}`}>
    <div className="mb-4 flex justify-center items-center">
      <Icon />
    </div>
    <h3 className= {`algo-line-height-24 letter-spacing-100 font-size-14 text-white ${monsterfont2.className} mt-4`}>{title}</h3>
    <p className={`font-size-14 text-semi-white font-opensans mt-4`}>{description}</p>
  </div>
);

export default function MarketingFeatures() {
  const [isBarcodeVisible, setIsBarcodeVisible] = useState(false);
  const [leftColumnVisible, setLeftColumnVisible] = useState(false);
  const [rightColumnVisible, setRightColumnVisible] = useState(false);

  useEffect(() => {
    const barcodeObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsBarcodeVisible(true);
          barcodeObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    const barcodeSection = document.querySelector('.barcode-section');
    if (barcodeSection) {
      barcodeObserver.observe(barcodeSection);
    }

    const leftObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLeftColumnVisible(true);
          leftObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    const leftColumn = document.querySelector('.left-column');
    if (leftColumn) {
      leftObserver.observe(leftColumn);
    }

    const rightObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRightColumnVisible(true);
          rightObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    const rightColumn = document.querySelector('.right-column');
    if (rightColumn) {
      rightObserver.observe(rightColumn);
    }

    return () => {
      if (barcodeSection) {
        barcodeObserver.unobserve(barcodeSection);
      }
      if (leftColumn) {
        leftObserver.unobserve(leftColumn);
      }
      if (rightColumn) {
        rightObserver.unobserve(rightColumn);
      }
    };
  }, []);

  return (
    <div className="bg-black min-h-screen w-full py-16 relative overflow-hidden">
      {/* Barcode Background Effect */}
      <div className={`absolute top-0 left-0 w-full h-32 flex justify-center items-center barcode-section }`}>
        <div className={`flex space-x-4 transform transition-all duration-1000 ${isBarcodeVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
          {[...Array(26)].map((_, i) => (
            <div key={i} className="w-4 h-28 bg-[#151515]" />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-14 relative z-8">
          <h2 className={`font-size-40 ${monsterfont.className} text-white `}>
            WHAT MAKES
            <br />
            <span className={`${monsterfont1.className}`}>
            US BETTER?
            </span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
          {/* Left Column - Animate from left */}
          <div className={`left-column flex flex-col gap-8 opacity-0 ${leftColumnVisible ? styles['animate-slide-in-left'] : ''} h-full`}>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Business}
                title="BUSINESS-CENTERED APPROACH"
                description="Our brand development services agency works hard to realize your strategic goals. Our high-quality designs act as powerful instruments that propel your business endeavors to new heights."
                isHighlighted={true}
              />
            </div>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Deadlines}
                title="MEETING THE DEADLINES"
                description="Project delays are rife with procurement risk because, like our clients, we hate them. This is why we strive to minimize their instances by meeting every deadline during our strategic brand development."
                isHighlighted={false}
              />
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col gap-8 h-full">
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Marketing}
                title="STRONG MARKETING TOOLS"
                description="Marketing and design go hand in hand in our digital branding services, seamlessly working together to boost each other's impact, eventually adding more value to your business with increased efficacy."
                isHighlighted={false}
              />
            </div>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Results}
                title="FUTURE-PROOF RESULTS"
                description="With our outstanding branding and identity services, we aim to always be relevant with our original and innovative designs that stand the test of time."
                isHighlighted={true}
              />
            </div>
          </div>

          {/* Right Column - Animate from right */}
          <div className={`right-column flex flex-col gap-8 opacity-0 ${rightColumnVisible ? styles['animate-slide-in-right'] : ''} h-full`}>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Communication}
                title="CLOSE COMMUNICATION"
                description="As experts in providing branding agency services, AlgorithmX’s findings reinforce the importance of consistent client interaction. They credit 60% of a project’s achievements to the act of staying in constant touch throughout the brand development process."
                isHighlighted={true}
              />
            </div>
            <div className="flex-1">
              <FeatureCard
                Icon={Icons.Expectations}
                title="EXCEEDING EXPECTATIONS"
                description="What is the motivation behind our striving for your success? Nothing inspires our brand developers more than seeing your brand thrive. AlgorithmX assures you that we surpass your expectations with our unmatched brilliance and top-notch branding services in achieving excellent outcomes that go beyond your objectives."
                isHighlighted={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
