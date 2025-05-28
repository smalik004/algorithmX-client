import React from 'react';

import styles from '../android-app/style.module.css';
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
        title: "Requirement Gathering",
        description:
          "At our custom software development company, we begin by thoroughly grasping the requirements, objectives, and necessary features of your business.",
        color: "text-red-500",
        dotColor: "bg-red-500",
      },
      {
        number: "2",
        title: "Analysis and Planning",
        description:
          "In our software development services, it is crucial to examine the project requirements. Our skilled developers carefully outline the project scope and intricately plan out the development process.",
        color: "text-red-400",
        dotColor: "bg-red-400",
      },
      {
        number: "3",
        title: "UI/UX Design",
        description:
          "After this, we carefully design the UX/UI of the software, incorporating features of software architecture, user interface and database layout.",
        color: "text-orange-500",
        dotColor: "bg-orange-500",
      },
      {
        number: "4",
        title: "Development",
        description:
          "When our developers have refined the design through rounds of wireframing experiments, they move on to writing code and building software using suitable programming languages and frameworks.",
        color: "text-orange-400",
        dotColor: "bg-orange-400",
      },
      {
        number: "5",
        title: "QA and Testing",
        description:
          "Before we release the software in our desired environment, we perform rigorous testing to discover and fix any bugs or issues, guaranteeing that your product’s features function smoothly.",
        color: "text-yellow-500",
        dotColor: "bg-yellow-500",
      },
      {
        number: "6",
        title: "Deployment",
        description:
          "After completing the quality assurance procedure, our premier custom software development company gets the software ready for deployment in the production environment be it on cloud platform or server.",
        color: "text-yellow-400",
        dotColor: "bg-yellow-400",
      },
      {
        number: "7",
        title: " Maintenance and Update",
        description:
          "At AlgorithmX, we consistently monitor the software’s performance, resolving issues that crop up and releasing updates as needed.",
        color: "text-yellow-400",
        dotColor: "bg-yellow-400",
      },
];

const SoftwareDevelopmentTimeline = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-zinc-800">
          <h1 className={`${styles["dynamic-title"]}  ${monsterfont1.className} `}>
          Dynamic Approach to Software Development
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
                        <h3 className={` ${styles["dynamic-subtitle"]}  ${monsterfont.className}  `}>{step.title}</h3>
                      </div>
                      
                      {/* Mobile Timeline */}
                      <div className="md:hidden relative my-4">
                        <div className="w-full h-0.5 bg-yellow-700"></div>
                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                      </div>
                      
                      <div className={` ${styles["dynamic-description"]}  font-helveticaneue leading-[24px] mt-4 md:mt-8 `}>
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Second row - items 5-6 */}
              <div className="relative col-span-full">
                {/* Timeline for second row */}
                <div className="hidden md:block absolute -left-[4%] right-[49%] h-0.5 top-14">
                  <div className="w-full h-full bg-gradient-to-r from-yellow-500 to-yellow-400"></div>
                  <div className="absolute left-full w-[585px] h-full border-t-2 border-dashed border-zinc-700 bottom-[1px]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
                  {timelineSteps.slice(4, 7).map((step, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-3">
                        <div className="relative">
                          <span className={`${step.color} font-bold text-xl block mb-4`}>
                            {step.number}
                          </span>
                          <div className={`hidden md:block absolute -bottom-[1.125rem] left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full ${step.dotColor} z-10`}></div>
                        </div>
                        <h3 className={`${styles["dynamic-subtitle"]}  ${monsterfont.className}  `}>{step.title}</h3>
                      </div>
                      
                      {/* Mobile Timeline */}
                      <div className="md:hidden relative my-4">
                        <div className="w-full h-0.5 bg-orange-700"></div>
                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                      </div>
                      
                      <div className={`${styles["dynamic-description"]}  font-helveticaneue leading-[24px] mt-4 md:mt-8 `}>
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

export default SoftwareDevelopmentTimeline;
