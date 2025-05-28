import React from 'react';
import { Montserrat } from "next/font/google";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});

const CROStrategies = () => {
  const columns = [
    {
      items: [
        { text: "Your dedicated account manager serves as the liaison to our extensive team of digital marketing experts.", included: true },
        { text: "MarketingCloudFX access for optimizing, measuring, and reporting ROI", included: true },
        { text: "In-depth analysis of your business goals, industry, and competitors", included: true },
        { text: "In-house project management software, 24/7 help desk, and direct client phone line", included: true }
      ]
    },
    {
      items: [
        { text: "A couple of team members endeavored to stay abreast of rapid marketing advancements.", included: false },
        { text: "Analytics suite for measuring and improving campaign performance", included: false },
        { text: "S.M.A.R.T. goals, but limited resources needed for execution", included: true },
        { text: "Reporting roadblocks leading to project delays and wasted spend", included: false }
      ]
    },
    {
      items: [
        { text: "A dedicated account manager will handle the strategy but will require your assistance in implementing the solutions.", included: true },
        { text: "Third-party tracking and analysis with subscription costs passed to you", included: false },
        { text: "Cookie-cutter checklists and solutions for optimizing your campaigns", included: false },
        { text: "Regular, and reliable support when issues arise with your account", included: true }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-[1200px] mx-auto">
        <h1 className={` text-[42px] leading-[1.1] md:text-[64px] md:leading-[68px] mb-12 text-center text-white  ${monsterfont.className} `}>
          Drive high-conversions <br/>with our Award- <br/> winning CRO Strategies
        </h1>
        <div className='p-4 '>
        <div
  className="bg-black overflow-hidden"
  style={{
    borderRadius: "30px",
    boxShadow: "-1px 1px 5px 5px rgba(38, 234, 216, 0.15)",
  }}
>
          <div className="flex flex-col md:flex-row">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="flex-1 p-6 relative">
                {columnIndex > 0 && (
                  <div className="absolute left-0 top-0 w-px h-full bg-emerald-500/20 hidden md:block" />
                )}
                {columnIndex < columns.length - 1 && (
                  <div className="absolute bottom-0 w-full h-px bg-emerald-500/20 md:hidden" />
                )}
                <div className="space-y-4">
                  {column.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <span className={`mt-1 text-xl mr-2 `}>
                        <FontAwesomeIcon icon={item.included ? faCheck : faTimes} />
                      </span>
                      <p className={`text-[16px] leading-[18px] ${monsterfont1.className} text-white`}>
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CROStrategies;