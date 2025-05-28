import React from 'react';
import styles from "./style.module.css";
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
    title: "Strategic Planning",
    description:
      "In the beginning, our React Native app development company, AlgorithmX, thoroughly examines the business’s objectives, technical needs, and design factors. We fine-tune features, assess tasks, and roll out a strategy to carry out the project efficiently. Count on us to handle every detail with accuracy, guaranteeing the success of your project from start to finish.",
    color: "text-red-500",
    dotColor: "bg-red-500",
  },
  {
    number: "2",
    title: "Architecture Design",
    description:
      "The next step of app development with React Native includes selecting the best technology stack and libraries according to your project requirements. Our dedicated React Native app development company designs the app architecture in detail by identifying the required integrations. Trust us to create precise and personalized solutions that enhance performance and align correctly with your business goals.",
    color: "text-red-400",
    dotColor: "bg-red-400",
  },
  {
    number: "3",
    title: "Dev Environment",
    description:
      "In this phase, our certified React Native app developers create the most effective development environment, which involves setting up the React Native app, organizing the technology stack needed, and preparing the environment for development, testing, and staging. You can rely on us for an efficient and effective development process that sets a strong base for a successful project.",
    color: "text-orange-500",
    dotColor: "bg-orange-500",
  },
  {
    number: "4",
    title: "Iterations",
    description:
      "At this stage, AlgorithmX follows an agile methodology and employs best practices to enable quick, high-quality React Native app development. Our experienced React Native developers clearly and attainably identify objectives, implement business knowledge, use templates, and create checklists. We create automated tests and perform extensive code reviews to ensure top-notch quality at every step of the process.",
    color: "text-orange-400",
    dotColor: "bg-orange-400",
  },
  {
    number: "5",
    title: "Product Config & Release",
    description:
      "As a premier React native app development company, we focus on setting up production infrastructure and integration settings while conducting strict security testing. To provide a seamless user experience, we improve the quality, and availability of the app. After a full quality assurance process, our mobile app developers ensure a successful launch of your React Native application on your desired platform.",
    color: "text-yellow-500",
    dotColor: "bg-yellow-500",
  },
  {
    number: "6",
    title: "Support and Maintenance",
    description:
      "After the launch, we stay committed to offering comprehensive maintenance services where our skilled React Native app developers continue to provide support addressing issues, fixing bugs, and adding the latest features. We constantly monitor app performance and work on improving functionalities to guarantee success. You can rely on us to keep the React app up-to-date and relevant with time.",
    color: "text-yellow-400",
    dotColor: "bg-yellow-400",
  },
];

const NativeDevelopmentTimeline = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-zinc-800">
          <h1 className={`${styles["dynamic-title1"]} ${monsterfont1.className} md:text-center `}>
            Dynamic Approach to React App Development
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
                        <h3 className={`${styles["dynamic-subtitle1"]} ${monsterfont.className}  `}>{step.title}</h3>
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
                        <h3 className={`${styles["dynamic-subtitle1"]} ${monsterfont.className}  `}>{step.title}</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NativeDevelopmentTimeline;