'use client';

import { useState } from 'react';
import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiamond, faSquare, faGem, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faDelicious, faGg } from '@fortawesome/free-brands-svg-icons';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback : ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback : ["sans-serif"],
});

const CampaignTabs = () => {
  const [activeTab, setActiveTab] = useState('conversion');
  const [hoverTab, setHoverTab] = useState(null);
  
  const tabs = [
    {
      id: 'conversion',
      icon: faGem,
      title: 'CONVERSION TRACKING',
      subtitle: 'ADVANCED CONVERSION TRACKING',
      content: {
        text: [
          "Our team will implement conversion tracking on your website, or we'll work with your developer to make sure the codes we send are implemented properly.",
          "If we're taking over preexisting campaigns where conversion tracking has already been installed, we'll perform thorough tests to make sure revenue and conversions are being tracked accurately.",
          "In fact, we won't launch a campaign before being certain that the data we're collecting reports conversions properly."
        ],
        image: '/api/placeholder/500/300'
      }
    },
    {
      id: 'reporting',
      icon: faDelicious,
      title: 'TRANSPARENT REPORTING',
      subtitle: 'TRANSPARENT REPORTING',
      content: {
        text: [
          'You own your data. All of it.',
          'Our team configures regular reports to be delivered to your inbox on a schedule that works for you detailing all the key performance indicators important to your short term and long term advertising goals.'
        ],
        image: '/api/placeholder/500/300'
      }
    },
    {
      id: 'meetings',
      icon: faGg,
      title: 'REGULAR STRATEGY MEETINGS',
      subtitle: 'REGULAR STRATEGY MEETINGS',
      content: {
        text: [
          'Your input and feedback is crucial to the long term success of your ad campaigns.',
          "You're team and our team will communicate regularly to review performance and to discuss our strategies and ideas for improving your campaigns.",
          "Of course, the lines of communication are always open, but we like to schedule these calls to make sure not too much time goes by without our teams collaborating."
        ],
        image: '/api/placeholder/500/300'
      }
    },
    {
      id: 'analysis',
      icon: faGg,
      title: '360° DATA ANALYSIS',
      subtitle: '360° DATA ANALYSIS',
      content: {
        text: [
          "Any amateur PPC specialist or automated script can make basic inferences about what performs well and what does not. We take it one step further by solving for why. We're determined to not just find what works, but to understand why something works, and how it can be replicated.",
          "Our team is loaded with experienced digital marketing professionals with well rounded backgrounds in analytics, psychology, statistics, and consumer behavior.",
          "We also place a tremendous amount of value on attribution modeling and its' importance in measuring campaign performance. Our team understands that the buyer journey is a complicated process, and we'll be fixated on finding the optimal mix of ad frequency and messaging over time to convert your users to buyers."
        ],
        image: '/api/placeholder/500/300'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-4xl mb-2">INCLUDED WITH REMARKETING</h2>
        <h1 className="text-3xl md:text-5xl font-bold">CAMPAIGN MANAGEMENT</h1>
      </div>

      {/* Tabs Section */}
      <div className="max-w-[1200px] mx-auto">
        {/* Tabs Container with White Line */}
        <div className="relative">
          <div className="flex flex-wrap mb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                onMouseEnter={() => setHoverTab(tab.id)}
                onMouseLeave={() => setHoverTab(null)}
                className="flex flex-row items-center px-4 px-[26px]"
              >
                <span className="text-[#ea0fb4]  mr-2">
                  <FontAwesomeIcon icon={tab.icon} />
                </span>
                <span className={`text-[#ea0fb4] text-[15px] text-center leading-[70px] ${monsterfont1.className} `}>{tab.title}</span>
              </button>
            ))}
          </div>
          {/* White base line */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white">
            {/* Pink highlight line that moves */}
            <div 
              className="absolute top-0 h-full bg-[#ea0fb4] transition-all duration-300 ease-in-out"
              style={{
                left: `${(hoverTab ? tabs.findIndex(t => t.id === hoverTab) : tabs.findIndex(t => t.id === activeTab)) * 25}%`,
                width: '23%'
              }}
            ></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-12">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`grid md:grid-cols-3 gap-8 items-start transition-opacity duration-300 ${
                activeTab === tab.id ? 'opacity-100' : 'hidden opacity-0'
              }`}
            >
              <div className="col-span-2">
                <h3 className={`text-[28px] ${monsterfont1.className}  font-bold mb-4 text-white`}>
                  {tab.subtitle}
                </h3>
                <div className="">
                  {tab.content.text.map((paragraph, index) => (
                    <p key={index} className="text-[15px] text-semi-white font-opensans mt-[40px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              <div className="order-first md:order-last">
                <img
                  src={tab.content.image}
                  alt={tab.title}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* White space after content */}
        <div className="h-16"></div>
      </div>
    </div>
  );
};

export default CampaignTabs;