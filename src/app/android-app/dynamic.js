import React from 'react';
import { Montserrat } from 'next/font/google';
import styles from "./style.module.css";

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
      "In this first stage, we conduct thorough discussions to understand the client's vision and requirements. We then identify the competitors, target audience, and latest market trends to develop apps for Android and iOS. Detailed documents are prepared listing the features and specifications according to which we set the entire project scope, including the timeline and budget.",
    color: "text-red-500",
    dotColor: "bg-red-500",
  },
  {
    number: "2",
    title: "Strategic Planning",
    description:
      "At this stage, we evaluate the financial and technical workability of the project, which includes identifying potential challenges and devising required strategies to ensure easy Android application development. We then set up a detailed project plan with clear deliverables. To track progress, we leverage project management tool.",
    color: "text-red-400",
    dotColor: "bg-red-400",
  },
  {
    number: "3",
    title: "Design Phase",
    description:
      "During this phase, we refine the specifications for the Android app, plan out the user experience, design mockups, establish the user interface design, and finally develop app prototypes that are ready to be passed on to our Android mobile app development team.",
    color: "text-orange-500",
    dotColor: "bg-orange-500",
  },
  {
    number: "4",
    title: "Development Stage",
    description:
      "At this point, we carefully establish the Android app structure, choose the appropriate back-end technology stack, frameworks, and libraries, implement the UI design, and integrate APIs smoothly in order to set up a robust system of continuous integration and continuous delivery (CI/CD).",
    color: "text-orange-400",
    dotColor: "bg-orange-400",
  },
  {
    number: "5",
    title: "Testing and QA",
    description:
      "As an app development agency, AlgorithmX performs rigorous manual and automated testing using tools like Espresso and JUnit to identify bugs in the early stage of development, conduct user acceptance testing (CUAT) to gather real-user data, and test performance under load and stress testing.",
    color: "text-yellow-500",
    dotColor: "bg-yellow-500",
  },
  {
    number: "6",
    title: "Release and Support",
    description:
      "Having carried out extensive tests across a range of settings, we submit the app to the Google Play Store, overseeing the entire process from start to finish. Simultaneously, we enhance this Android app by adding more features based on user feedback and analytics, imparting a smooth experience for your users.",
    color: "text-yellow-400",
    dotColor: "bg-yellow-400",
  },
];

const DevelopmentTimeline = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-zinc-800">
          <h1 className={`${styles["dynamic-title"]}  ${monsterfont1.className} md:text-center `}>
            Dynamic Approach to Android App Development
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
                      
                      <div className={` ${styles["dynamic-description"]}  ${monsterfont1.className} mt-4 md:mt-8 `}>
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
                        <h3 className={`${styles["dynamic-subtitle"]}  ${monsterfont.className}  `}>{step.title}</h3>
                      </div>
                      
                      {/* Mobile Timeline */}
                      <div className="md:hidden relative my-4">
                        <div className="w-full h-0.5 bg-orange-700"></div>
                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                      </div>
                      
                      <div className={`${styles["dynamic-description"]}  ${monsterfont1.className} mt-4 md:mt-8 `}>
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

export default DevelopmentTimeline;