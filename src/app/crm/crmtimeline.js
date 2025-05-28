import React from 'react';
import styles from '../android-app/style.module.css';
import style from './style.module.css';
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
        title: "Planning",
        description:
          "Our first step includes evaluating your company’s goals to suggest suitable solutions for tackling your CRM issues. We then come up with requirements specifications for the system, set up project team members, map out the development path, and finally evaluate possible risks based on your needs.",
        color: "text-red-500",
        dotColor: "bg-red-500",
      },
      {
        number: "2",
        title: "UI/UX Design",
        description:
          "Once the requirements for the project have been obtained, our dedicated CRM development company designs the CRM system and generates a prototype for it. During this stage, we typically work on sketching our wireframes and designing the UI and UX of the CMS system. Normally, when working on this phase, wire frames are developed as well as user interfaces and user experiences.",
        color: "text-red-400",
        dotColor: "bg-red-400",
      },
      {
        number: "3",
        title: "Development",
        description:
          "The next phase is the development phase where we construct and code the CRM system. Development of the CRM software is exclusively done by our talented team of developers in adherence to agile methodology to guarantee that projects are finished promptly and on time.",
        color: "text-orange-500",
        dotColor: "bg-orange-500",
      },
      {
        number: "4",
        title: "Integration",
        description:
          "After completing the development phase, our developers smoothly incorporate the CRM system into your business processes to maintain constant data synchronization and flow, integrating third-party solutions to add value to your business operations.",
        color: "text-orange-400",
        dotColor: "bg-orange-400",
      },
      {
        number: "5",
        title: "Quality Control",
        description:
          "This stage involves a combination of manual and automated testing to locate and fix any bugs or glitches. In this step, we perform extensive tests on each of the software features, with our QA team comparing the final output against benchmarks to identify any inefficiencies.",
        color: "text-yellow-500",
        dotColor: "bg-yellow-500",
      },
      {
        number: "6",
        title: "Deployment",
        description:
          "This step entails deploying the system to a live environment and ensuring its reliability and smooth operation without any issues. After thoroughly testing our custom CRM system and receiving your approval, our CRM developers deployed it to the production environment.",
        color: "text-yellow-400",
        dotColor: "bg-yellow-400",
      },
      {
        number: "7",
        title: "Support and Maintenance",
        description:
          "After deployment, our CRM development services involve refining the CRM solution to meet all your business requirements. Our team provides updates, ensures security and enhances performance consistently so that you benefit the most out of your CRM. After implementation, we still perfect it to match all the requirements of your firm.",
        color: "text-yellow-400",
        dotColor: "bg-yellow-400",
      },
];

const CRMDevelopmentTimeline = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-black rounded-3xl p-8 md:p-12 border border-zinc-800">
          <h1 className={` text-[42px] leading-[1.3]  font-helveticaneue font-[700]  `}>
          Streamlining CRM Development
          </h1>
          <p className={`${style["dynamic-description1"]} font-helveticaneue font-[400] text-semi-white mb-20 `}>
          Our agile approach simplifies the CRM development process, ensuring a seamless integration that meets your specific needs. Experience efficiency, adaptability, and faster results, all while maintaining high quality and robust functionality.
          </p>


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
                        <h3 className={` ${styles["dynamic-subtitle"]} font-helveticaneue font-[700]  `}>{step.title}</h3>
                      </div>
                      
                      {/* Mobile Timeline */}
                      <div className="md:hidden relative my-4">
                        <div className="w-full h-0.5 bg-yellow-700"></div>
                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                      </div>
                      
                      <div className={` ${styles["dynamic-description"]} leading-[24px] font-helveticaneue font-[400] mt-4 md:mt-8 `}>
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
                        <h3 className={`${styles["dynamic-subtitle"]}  font-helveticaneue font-[700]  `}>{step.title}</h3>
                      </div>
                      
                      {/* Mobile Timeline */}
                      <div className="md:hidden relative my-4">
                        <div className="w-full h-0.5 bg-orange-700"></div>
                        <div className={`absolute top-1/2 left-0 transform -translate-y-1/2 w-3 h-3 rounded-full ${step.dotColor}`}></div>
                      </div>
                      
                      <div className={`${styles["dynamic-description"]} font-helveticaneue font-[400] leading-[24px] mt-4 md:mt-8 `}>
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

export default CRMDevelopmentTimeline;
