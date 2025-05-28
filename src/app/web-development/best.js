'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../graphics/styles.module.css';
import { Plus, Minus } from 'lucide-react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
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
  weight: "700",
  fallback: ["sans-serif"],
});

const ContentItem = ({ title, description, isRightAligned }) => {
  return (
    <div className={` ${isRightAligned ? 'text-right' : 'text-left'} mb-10`}>
      <div className={`w-full   ${isRightAligned ? 'text-right' : 'text-left'}`}>
        <h3 className={`text-[24px] leading-[24px] ${monsterfont3.className} text-white my-[40px] mx-[30px] `}>{title}</h3>
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
        <span className={`text-[21px] leading-[22px] ${monsterfont2.className} text-white `}>{title}</span>
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

const WebAccordion = () => {
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
      title: "Design and User Experience",
      content: [
        {
          title: "Responsive Designs",
          description: "Our web app development company ensures that your web layout seamlessly adapts to different resolutions, screen sizes, and orientations.",
          isRightAligned: true
        },
        {
          title: "User-Centric Approach",
          description: "Our custom mobile app development company reviews the technical specifications of your app idea to ensure it aligns with the potential of Android and iOS devices. In the process, we take into account any limitations within the API, as well as specific hardware requirements.Both UX/UI designers and web developers share the collective responsibility of creating an intuitive user experience that AlgorithmX is focused on. We lay an emphasis on usability as well as data-driven decision-making.",
          isRightAligned: false
        },
        {
          title: "Prioritize Accessibility",
          description: "At our premier web development company, we comply with Web Content Accessibility Guidelines (WCAG), use semantic HTML, and take other measures to make sure your website or app is designed to be accessible to people with different abilities.",
          isRightAligned: true
        },
      ]
    },
    {
      title: "Performance and Optimization",
      content: [
        {
          title: "Optimize Performance",
          description: "At AlgorithmX, we boost loading speeds by decreasing the number of HTTP requests and incorporating lazy loading and asynchronous loading methods.",
          isRightAligned: true
        },
        {
          title: "Implement Progressive Enhancement",
          description: "Our dedicated web development company leverages a progressive enhancement approach where we start with an inclusive framework and then add advanced, sophisticated elements to enhance it, guaranteeing that the content continues to be available for a wide range of audiences.",
          isRightAligned: false
        },
        {
          title: "Update Dependencies",
          description: "We use the latest tools and tech libraries to ensure that your web application or website stays updated.",
          isRightAligned: true
        },
        {
          title: "Test Non-Functional Requirements",
          description: "AlgorithmX utilizes strategies such as Test-Driven Development (TDD) and Behavior-Driven Development (BDD) to ensure quality throughout the development process by performing tests on security, availability, and performance.",
          isRightAligned: false
        },
      ]
    },
    {
        title: "Security and Best Practices",
        content: [
          {
            title: "Cross-Browser Compatibility",
            description: "We subject the web app to cross-browser testing to ensure its consistent appearance and behavior across various browsers.",
            isRightAligned: true
          },
          {
            title: "Web Standards",
            description: "At AlgorithmX, we adhere to the W3C guidelines i.e. standards and practices established by The World Wide Web Consortium, aimed towards maintaining accessibility and uniformity throughout the internet. Although they are not legally binding, the majority of the web developers follow and accept them.",
            isRightAligned: false
          },
          {
            title: "Write Clean Code",
            description: "We are focused on keeping your code clean and organized, incorporating abundant comments that clearly document your development efforts. This approach helps in making future changes and updates.",
            isRightAligned: true
          },
          {
            title: "Security Measures",
            description: "Our exceptional web development services guarantee high safety by implementing HTTPS and cross-checking among other security measures.",
            isRightAligned: false
          },
          {
            title: "Validate Data Inputs",
            description: "AlgorithmX works on securing inputs on both client and server sides to protect against data breaches, enhancing client satisfaction and improving data integrity.",
            isRightAligned: true
          },
          
  
        ]
      },
      {
        title: "Development and Maintenance",
        content: [
          {
            title: "Use Version Control",
            description: "Our experienced website developers use tools like Git, a version control system to monitor modifications, promote teamwork, and safeguard each iteration of your project.",
            isRightAligned: true
          },
          {
            title: "Test and Debug",
            description: "We make sure to thoroughly test and troubleshoot the website or web application to address any issues and keep it functioning.",
            isRightAligned: false
          },
          {
            title: "Adapt and Learn",
            description: "At AlgorithmX, we stay updated on the latest trends in web development by interacting with the web development community, staying informed about industry news and advancements, and engaging in events and online forums.",
            isRightAligned: true
          },
          {
            title: "SEO-Friendly Practices",
            description: "We optimize your website to rank higher in search engines like Google through the effective use of meta tags and overall structure.",
            isRightAligned: false
          },
          {
            title: "Employ Frameworks",
            description: "As part of our expert web development services, we choose the libraries and frameworks based on the needs of the project, its functionality, category and interests of the web developers involved in the project.",
            isRightAligned: true
          },
          
  
        ]
      },
      
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
            OUR BEST
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-[100px] text-white`}>
             PRACTICES FOR
            </h2>
            <h2 className={` ${styles["description"]} ${monsterfont1.className} text-white`}>
            WEB DEVELOPMENT
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

export default WebAccordion;