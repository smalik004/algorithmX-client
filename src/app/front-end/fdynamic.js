import React from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});

const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '700',
  fallback: ["sans-serif"],
});


const FrontDesignProcess = () => {
  const steps = [
    {
      number: 1,
      title: "Discovery",
      description: "The first step in front end development involves gathering comprehensive information about the vision, goals, and objectives of the client’s business, creating mockups for client review, and making necessary changes according to their feedback. "
    },
    {
      number: 2,
      title: "Planning",
      description: "In the next stage, we pick the best tools, frameworks, and libraries to be used throughout the development journey, and perform initial server testing to ensure that it supports the web application."
    },
    {
      number: 3,
      title: "Prototyping",
      description: "This step involves building an appealing, user-friendly interface that resonates with the client’s brand, and communicates its message. Then, we prepare the blueprint for the web app’s structure, create interactive prototypes, and send them for client’s official approval."
    },
    {
      number: 4,
      title: "Development",
      description: "The next phase of our front end web development process is constructing a stable development environment, integrating APIs, third-party services, and backend systems, and transforming the approved functionalities and designs into actual codes."
    },
    {
        number: 5,
        title: "Testing",
        description: "In this stage, we conduct thorough manual and automated testing to ensure that the web app works seamlessly across all devices, operating systems, and browsers and adheres to W3C standards, resulting in a reliable and efficient app."
      },
      {
        number: 6,
        title: "Delivery",
        description: "The last stage includes conducting User Acceptance Testing (UAT) to ensure the app meets the client’s needs, preparing a secure server environment to host the approved app and deploying the application, thus launching it for end-users."
      },
  ];

  return (
    <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
      <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h1 className={` ${styles["dynamic-title"]} ${monsterfont1.className} text-white mb-2`}>Implementation</h1>
        <h2 className={` ${styles["dynamic-title"]} ${monsterfont.className} text-white`}>Process</h2>
      </div>


        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-500"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative pl-16 pb-16">
              {/* Timeline dot */}
              <div className="absolute left-0 w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                <span className={`${monsterfont1.className} text-black `}>{step.number}</span>
              </div>
              
              {/* Content */}
              <div>
                <h3 className={` ${styles["dynamic-subtitle"]} ${monsterfont2.className} text-white mb-4`}>{step.title}</h3>
                <p className={` ${styles["dynamic-description"]} font-helveticaneue text-semi-white mb-2`}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrontDesignProcess;