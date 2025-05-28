'use client';
import { useState } from 'react';
import styles from '../crm/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});

const BusinessDevelopment = () => {
  const [activeBox, setActiveBox] = useState('sales');

  const boxes = [
    {
      id: 'sales',
      title: 'Powerful Insights from Hidden Business Data',
      content:
        'We facilitate economic development from CRM solutions by offering tools that help businesses efficiently manage their sales data allowing them to monitor the sales information easily. By utilizing our software, businesses gain instant access to data on sales, track sales performance, forecast sales, and spot trends..',
    },
    {
      id: 'accounts',
      title: 'Wide Range of Analysis Formats',
      content:
        'As part of our CRM development services, we offer CRM software solutions for managing accounts and contacts. These solutions provide comprehensive customer visibility that lets businesses improve their team efficiency via insights from social media networks or other platforms, allowing users to track discussions, important contacts, past activities etc.',
    },
    {
      id: 'opportunity',
      title: 'Interactive User Dashboards',
      content:
        'Take advantage of our top CRM development company’s high-quality opportunity management solutions with a range of features such as lead capture, qualification, pipeline management forecasting as well as reporting to manage your sales opportunities and leads efficiently, resulting in expediting closing of deals.',
    },
    {
      id: 'lead',
      title: 'Quick Turnaround Time',
      content:
        'By utilizing our lead monitoring system, companies get oversight of the latest customer information, efficiently conduct marketing campaigns, and track leads from the initial contact to successful conversion. Our exceptional lead management system enables businesses to thrive in lead monitoring, resulting in increased sales and revenue.',
    },
  ];

  const handleBoxClick = (id) => {
    setActiveBox(activeBox === id ? null : id);
  };

  return (
    <div className="bg-black text-white">
      <div className="container max-w-[1200px] mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side */}
          <div className="lg:w-1/2 flex flex-col justify-center md:sticky md:top-0">
            <h1 className={`${styles['left-title']} ${monsterfont1.className} text-left`}>
              Benefits
              <br />
              <div className={`${monsterfont.className}`}>
                We Offer as
                <br />
                BI Services
              </div>
            </h1>
            <div className="flex items-center gap-8 mt-6">
          <div className="w-[4px] h-[70px] bg-[#2775ff] rounded-[10px]  "></div> {/* Vertical line */}
          <div className={`${styles['development-subtitle']} ${monsterfont1.className} text-semi-white text-left`}>
            ACTIONABLE INSIGHTS AND STRATEGIC GUIDANCE
          <br />
        <div className={`${monsterfont.className} text-semi-white`}>
            UNLOCK THE POWER
        </div>
        </div>
</div>

          </div>

          {/* Right Side wrapped in a div with padding */}
          <div className="lg:w-1/2 relative pl-[15px] pr-[15px]">
            <div className="flex flex-col overflow-x-visible">
              {boxes.map((box) => (
                <div key={box.id} className="relative">
                  <button
                    onClick={() => handleBoxClick(box.id)}
                    className={`w-full p-4 ${styles['border1']} flex justify-between items-center bg-black transition-all`}
                  >
                    <span
                      className={`${styles['right-title1']} ${monsterfont.className} text-center w-full`}
                    >
                      {box.title}
                    </span>
                    <span className="text-blue-500">⬡</span>
                  </button>

                  {activeBox === box.id && (
                    <div
                      className={`${styles['right-description']} font-opensans  text-[#9f9f9f]  text-center ${styles['border-']} min-w-[57px] -ml-[12px] -mr-[12px]`}
                    >
                      {box.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDevelopment;
