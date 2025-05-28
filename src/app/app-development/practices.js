'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
import { Plus, Minus } from 'lucide-react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ["latin"],
  weight: "800",
  fallback: ["sans-serif"],
});

const ContentItem = ({ title, description, isRightAligned }) => {
  return (
    <div className={` ${isRightAligned ? 'text-right' : 'text-left'} mb-10`}>
      <div className={`w-full   ${isRightAligned ? 'text-right' : 'text-left'}`}>
        <h3 className={`text-[24px] leading-[24px] ${monsterfont.className} text-white my-[40px] mx-[30px] `}>{title}</h3>
        <p className="text-[15px] leading-[22px]  my-[40px] mx-[30px] text-semi-white font-helveticaneue">{description}</p>
      </div>
    </div>
  );
};

const AccordionItem = ({ title, content, isActive, onClick, isInView }) => {
  return (
    <div className="relative">
      <button
        onClick={onClick}
        className={`w-full flex justify-between items-center py-4 text-left text-white hover:text-blue-500 transition-colors duration-300 border-t border-b border-white transform transition-transform duration-500
        }`}
      >
        <span className={`text-[21px] leading-[22px] ${monsterfont2.className} `}>{title}</span>
        {isActive ? (
          <Minus className="transition-transform duration-300" size={24} />
        ) : (
          <Plus className="transition-transform duration-300" size={24} />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden ">
          {content.map((item, idx) => (
            <ContentItem 
              key={idx}
              title={item.title}
              description={item.description}
              isRightAligned={item.isRightAligned}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const accordionData = [
    {
      title: "Planning",
      content: [
        {
          title: "Understanding User Needs",
          description: "Our mobile app development consulting starts by conducting research on users to understand the needs, preferences, and obstacles of your target audience. We then Conduct surveys, interviews, and market studies to design the functions and features of mobile apps.",
          isRightAligned: true
        },
        {
          title: "Technical Feasibility Assessment",
          description: "Our custom mobile app development company reviews the technical specifications of your app idea to ensure it aligns with the potential of Android and iOS devices. In the process, we take into account any limitations within the API, as well as specific hardware requirements.",
          isRightAligned: false
        },
        {
          title: "Wireframing and Prototyping",
          description: "At AlgorithmX, we create sketches that outline the user interface of your app and develop prototypes to show how your finished app looks and functions.",
          isRightAligned: true
        },
        {
          title: "Create a Solid Tech Stack",
          description: "We use Java or Kotlin to develop effective Android apps in Android Studio. While creating an app for iOS in Xcode, we opt for Swift. For Android app development, Google’s preferred language is Kotlin just like Swift is for iOS app development. Meanwhile, Java’s widespread adoption and vast libraries make it a strong option for complex projects.",
          isRightAligned: false
        }
      ]
    },
    {
      title: "Design & Develop",
      content: [
        {
          title: "Architecture Components",
          description: "Our custom mobile app development company uses building patterns like Model-View-ViewModel (MVVM) or Model View Presenter (MVP) and Separation of Concerns (SoC) to improve app structure. Moreover, we employ the Model-View-Controller (MVC) architecture that enables the division of your app’s parts such as data, logic or UI.",
          isRightAligned: true
        },
        {
          title: "Modularize Code",
          description: "At AlgorithmX, we follow modular programming principles as part of our custom mobile app development services where we organize the codebase into modular components that improve the mobile app’s flexibility and sustainability.",
          isRightAligned: false
        },
        {
          title: "Memory Management",
          description: "We utilize the Automated Reference Counting (ARC) technique effectively to manage your app’s memory consumption and prevent any memory leaks. Our talented mobile app developers consistently analyze your application’s performance to avoid excessive memory consumption that can lead to crashes.",
          isRightAligned: true
        },
        {
          title: "Make It Responsive",
          description: "Our agency offers offshore cross-platform app developing service where we make your app design responsive so that it easily adapts to different screen sizes, orientations, and resolutions. We specialize in enduring your iOS and Android apps are visually appealing and receptive no matter where they are displayed.",
          isRightAligned: false
        },
        {
          title: "Prioritize the User Experience",
          description: "We conduct thorough research on app users using focus groups, analyzing competitors, employing different methods, developing personas and surveys to build user-friendly apps that are easy to navigate and highly instinctive.",
          isRightAligned: true
        },

      ]
    },
    {
      title: "Testing & Deployment",
      content: [
        {
          title: "Implement Automation and Manual Testing",
          description: "AlgorithmX’s testing approach is comprehensive and involves conducting manual and automated tests. For tasks like regression and compatibility tests, we use automation. However, for exploratory and usability testing, we opt for the hands-on testing method.",
          isRightAligned: true
        },
        {
          title: "Conduct QA Testing Early",
          description: "We carry out testing and release the application in gradual steps as our quality assurance team heavily contributes from the beginning of the development process which allows us to avoid massive merge conflicts and to reduce debugging issues that may crop up after long periods of development.",
          isRightAligned: false
        },
        {
          title: "Addressing Issues from Beta Testing",
          description: "Our mobile app development services use beta testing to collect feedback from users, identify bugs, and address the identified issues quickly while considering user feedback when refining the app.",
          isRightAligned: true
        },
        {
          title: "Test for different conditions.",
          description: "For a comprehensive assessment, we evaluate the app under various network environments, such as Wi-Fi, 4G, 5G, and situations with low/no connectivity. Moreover, we review its performance on different versions of both iOS and Android operating systems.",
          isRightAligned: false
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto p-4">
        <div className="text-center mb-16 relative overflow-hidden">
          {/* Background "SCALABLE" text */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span
              ref={ref}
              className={` ${styles["main-scalable"]} transform transition-transform duration-700 ${monsterfont.className} ${
                isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`
              }`}
              
            >
            ALGORITHMX'S
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-[100px] text-white`}>
            BEST PRACTICES FOR
            </h2>
            <h2 className={` ${styles["description"]} ${monsterfont3.className} text-white`}>
            MOBILE APP DEVELOPMENT
            </h2>
          </div>
        </div>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;