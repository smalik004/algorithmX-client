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
    title: "Requirement Analysis",
    description:
      "At the beginning, we discuss, understand, and assess the requirements, vision, and goals of your business. We then identify the target audience and competitors to create a detailed document defining the unique value propositions of your Flutter app, its features and functionalities.",
    color: "text-red-500",
    dotColor: "bg-red-500",
  },
  {
    number: "2",
    title: "Strategic Planning",
    description:
      "At this stage, we evaluate the financial and technical workability of the project, which includes identifying potential challenges and devising required strategies to ensure easy Flutter app development. We then create a timeline of deliverables, and allocate resources that include development team, tools and technologies required for the project.",
    color: "text-red-400",
    dotColor: "bg-red-400",
  },
  {
    number: "3",
    title: "Design Phase",
    description:
      "As a leading Flutter app development company, we design detailed UI/UX solutions, creating user flows and customer journey maps. Our professional team designs interfaces to improve user experiences and make navigation effortless. Count on us to enhance your Flutter app’s aesthetics through attention to detail and a focus on the user’s needs.",
    color: "text-orange-500",
    dotColor: "bg-orange-500",
  },
  {
    number: "4",
    title: "Development Stage",
    description:
      "AlgorithmX is one of the top Flutter app development companies, building powerful apps by combining Agile and Flutter. We utilize tools such as Flutter SDK and Android Studio to develop databases and APIs and implement security measures and UI designs. We provide updates every two weeks for your feedback without compromising on quality.",
    color: "text-orange-400",
    dotColor: "bg-orange-400",
  },
  {
    number: "5",
    title: "Testing",
    description:
      "At this stage, we perform rigorous manual and automated testing in every update using tools like flutter_test to ensure proper integration of individual components, functionality, and overall performance of the Flutter app. We conduct quality checks to fix any possible issues. Trust us for an exceptional user experience and resolving any challenge to deliver excellence in all areas of app creation.",
    color: "text-yellow-500",
    dotColor: "bg-yellow-500",
  },
  {
    number: "6",
    title: "Release and Support",
    description:
      "In this phase, we launch your Flutter iOS app on the App Store and Flutter Android app on the Google Play Store. Our support is not just limited to launching; we are always there to help you with your ongoing maintenance needs and beyond by ensuring that your app is up-to-date and tailored for changing user expectations and market needs to thrive in the long run.",
    color: "text-yellow-400",
    dotColor: "bg-yellow-400",
  },
];

const FlutterDevelopmentTimeline = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-zinc-800">
          <h1 className={`${styles["dynamic-title1"]} ${monsterfont1.className} md:text-center `}>
            Dynamic Approach to Flutter App Development
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

export default FlutterDevelopmentTimeline;