import React from 'react';
import styles from "../flutter/style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"400",
  fallback: ["sans-serif"],
})
const monsterfont = Montserrat ({
  subsets : ["latin"],
  weight :"800",
  fallback: ["sans-serif"],
})


const timelineSteps = [
  {
    number: "1",
    title: "Organizations Facing Disjointed Systems",
    description:
      "Businesses with multiple siloed applications can benefit from integration solutions to streamline workflows, reduce inefficiencies, and create a unified technology ecosystem.",
    color: "text-red-500",
    dotColor: "bg-red-500",
  },
  {
    number: "2",
    title: "Growing Enterprises with Complex IT Infrastructure",
    description:
      "Companies expanding their operations or adopting new technologies require scalable middleware to ensure seamless connectivity, reliability, and consistent performance across their IT systems.",
    color: "text-red-400",
    dotColor: "bg-red-400",
  },
  {
    number: "3",
    title: "Data-Driven Businesses Seeking Real-Time Insights",
    description:
      "For organizations relying on real-time data, integration and middleware solutions enable efficient data flow, supporting timely decision-making and enhanced business intelligence.",
    color: "text-orange-500",
    dotColor: "bg-orange-500",
  },
  {
    number: "4",
    title: "Enterprises Looking to Modernize Legacy Systems",
    description:
      "Companies with outdated technology stacks can leverage integration tools to bridge legacy systems with modern applications, ensuring continued compatibility and operational agility.",
    color: "text-orange-400",
    dotColor: "bg-orange-400",
  },
  {
    number: "5",
    title: "Organizations Planning Cloud Migration",
    description:
      "Businesses transitioning to the cloud need robust middleware and integration to ensure smooth, secure, and efficient connectivity between on-premise systems and cloud-based platforms.",
    color: "text-yellow-500",
    dotColor: "bg-yellow-500",
  },
];

const IntegrationDevelopmentTimeline = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-zinc-800">
          <h1 className={`${styles["dynamic-title1"]} ${monsterfont1.className} md:text-center `}>
          Who Should Invest in Integration & Middleware Solutions?
          </h1>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-6 md:gap-4">
              {/* First row - items 1-4 */}
              <div className="relative col-span-full mb-16">
                {/* Timeline for first row */}
                <div className="hidden md:block absolute left-[0.5%] -right-[4%] h-0.5 top-14">
                  <div className="absolute right-full w-10 h-full border-t-2 border-dashed border-zinc-700 bottom-[2px]"></div>
                  <div className="w-full h-full bg-gradient-to-r from-red-500 via-orange-500 to-orange-400"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                  {timelineSteps.slice(0, 4).map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <span className={`${step.color} font-bold text-xl block mb-4`}>
                            {step.number}
                          </span>
                          <div className={`hidden md:block absolute -bottom-[1.125rem] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${step.dotColor} z-10`}></div>
                        </div>
                        <h3 className={`text-[15px] leading-[18px] ${monsterfont.className}  `}>{step.title}</h3>
                      </div>
                      
                      {/* Mobile Timeline */}
                      <div className="md:hidden relative my-4">
                        <div className="w-full h-0.5 bg-gradient-to-r from-red-500 via-orange-500 to-orange-400"></div>
                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                      </div>
                      
                      <div className={` ${styles["dynamic-description1"]}  ${monsterfont1.className} mt-4 md:mt-8 `}>
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row - items 5-6 */}
              <div className="relative col-span-full">
                {/* Timeline for second row */}
                <div className="hidden md:block absolute -left-[4%] right-[73%] h-0.5 top-14">
                  <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                  <div className="absolute left-full w-[500px] h-full border-t-2 border-dashed border-zinc-700 bottom-[1px]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                  {timelineSteps.slice(4, 6).map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <span className={`${step.color} font-bold text-xl block mb-4`}>
                            {step.number}
                          </span>
                          <div className={`hidden md:block absolute -bottom-[1.125rem] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${step.dotColor} z-10`}></div>
                        </div>
                        <h3 className={` ${styles["dynamic-subtitle1"]}  ${monsterfont.className}  `}>{step.title}</h3>
                      </div>
                      
                      {/* Mobile Timeline */}
                      <div className="md:hidden relative my-4">
                        <div className="w-full h-0.5 bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                      </div>
                      
                      <div className={` ${styles["dynamic-description1"]}   ${monsterfont1.className} mt-4 md:mt-8 `}>
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationDevelopmentTimeline;