'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});
const monsterfont3 = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});

const WebDevServices = () => {
  const [inView, setInView] = useState(false); // To track visibility
  const [isMobile, setIsMobile] = useState(false); // Track mobile state
  const ref = useRef(null); // Reference for the component

  useEffect(() => {
    // Set initial mobile state
    setIsMobile(window.innerWidth < 1024);
    
    // Add resize listener
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Disconnect observer after triggering once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (ref.current) observer.disconnect(); // Clean up observer
    };
  }, []);

  const services = [
    {
      icon: <img src="/images/UX-UI-Design.png" alt="UX/UI Design" className="w-[50px] h-[50px]" />,
      title: 'UX/UI Design',
      description:
        'In our front end web development path, we study the target audience, and create user-friendly journeys followed by implementing an elegant interface.',
    },
    {
      icon: <img src="/images/Architecture.png" alt="Architecture" className="w-[50px] h-[50px]" />,
      title: 'Architecture',
      description:
        "AlgorithmX's front end development solution architects are responsible for planning components, selecting the right technology for a project, and aligning them with the APIs.",
    },
    {
      icon: <img src="/images/Front-End-Development.png" alt="Front-End Development" className="w-[50px] h-[50px]" />,
      title: 'Front-End Development',
      description:
        'Our experienced front end developers leverage JavaScript frameworks, such as Next, Meteor, React, Angular, Vue, and Ember to implement designs.',
    },
    {
      icon: <img src="/images/Back-End-Development.png" alt="Back-End Development" className="w-[50px] h-[50px]" />,
      title: 'Back-End Development',
      description:
        'Our talented developers build the business logic for web applications using a variety of programming languages and frameworks like .NET, Python, Node.js, Java, PHP, and Go.',
    },
    {
      icon: <img src="/images/Integration-and-Testing.png" alt="Integration & Testing" className="w-[50px] h-[50px]" />,
      title: 'Integration & Testing',
      description:
        'During front end web development, we perform thorough testing by integrating APIs to ensure seamless data synchronization providing a secure and user-friendly web solution.',
    },
    {
      icon: <img src="/images/Support-and-Update.png" alt="Support & Update" className="w-[50px] h-[50px]" />,
      title: 'Support & Update',
      description:
        'Our leading Front end development company, AlgorithmX, continuously and rapidly improves your website software by offering updates in a matter of days and providing new features every few weeks through streamlined DevOps practices.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white p-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className={`${styles["tech-title"]} ${monsterfont1.className}  mb-4`}>HOW WE ENSURE</p>
          <h1 className={`${styles["scale-subtitle"]} ${monsterfont.className} `}>FULL SCALE</h1>
          <h2 className={`${styles["scale-subtitle"]} ${monsterfont2.className} `}>WEB DEVELOPMENT</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 bg-gradient-to-b from-black via-[#2a3b4e] to-black rounded-lg hover:bg-[rgba(39,117,255,.6)] hover:shadow-[0px_20px_60px_0px_rgba(39,117,255,0.4)] 
              transition-all duration-300 group hover:shadow-[0px_0px_50px_15px_rgba(42,201,235,0.2)] overflow-hidden w-full h-80`}
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div
                  className={`${styles["animate-slideDown"]} mb-4 ${
                    inView ? styles["start-animation"] : ""
                  }`}
                >
                  {service.icon}
                </div>

                <div
                  className={`${styles["animate-slideUp"]} ${
                    inView ? styles["start-animation"] : ""
                  }`}
                >
                  <h3 className={`${styles["scale-title"]} ${monsterfont3.className}  mb-4`}>
                    {service.title}
                  </h3>
                  <p className={`${styles["scale-description"]} font-helveticaneue`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebDevServices;