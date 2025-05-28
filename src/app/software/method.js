'use client'
import { useState, useEffect, useRef } from "react";
import styles from "../graphics/styles.module.css";
import style from './style.module.css'
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
const InteractiveBox = () => {
  const [activeContent, setActiveContent] = useState({
    title: "DevOps",
    content: "DevOps is a joint approach aimed at increasing the efficiency of workflow during the software development lifecycle. Our offshore and nearshore software development services involve employing top-ranked DevOps practices, allowing your company to achieve desired levels of transparency and help in making real-time decisions for continuous deployments.",
  });

  const [activeId, setActiveId] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const methodologiesRef = useRef(null);

  const icons = [
    {
      id: 1,
      src: "/images/devops.png", // Replace with your image URL
      alt: "Icon 1",
      title: "DevOps",
      content:
        "DevOps is a joint approach aimed at increasing the efficiency of workflow during the software development lifecycle. Our offshore and nearshore software development services involve employing top-ranked DevOps practices, allowing your company to achieve desired levels of transparency and help in making real-time decisions for continuous deployments.",
    },
    {
      id: 2,
      src: "/images/agile.png",
      alt: "Icon 2",
      title: "Agile Development",
      content:
        "The agile development technique facilitates project management by dividing it into numerous phases, focusing on continuous collaboration and improvement at each stage. AlgorithmX is a top-notch custom software development company with rich experience in best practices for software development using agile methods, resulting in delivering high-quality products in less time.",
    },
    {
      id: 3,
      src: "/images/scrum.png", 
      alt: "Icon 3",
      title: "Scrum",
      content:
        "Scrum is a method of agile software development that relies on repetition, offering a framework that is fast, versatile, and adaptable bringing more value to your custom software development project. To facilitate the successful completion of your project, our software development services rely on clear team communication, collective progress, and shared responsibilities.",
    },
    {
      id: 4,
      src: "/images/waterfall.png", 
      alt: "Icon 4",
      title: "Waterfall",
      content:
        "A sequential approach is followed by the waterfall methodology, such that every individual phase is completed before the next phase commences. Success in this methodology solely depends on how extensive and excellent work is done in advance. Being a top-rated software development services provider, we adhere to this principle and ardently work to achieve the planned results with complete pliability and dedication.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (methodologiesRef.current) {
      observer.observe(methodologiesRef.current);
    }

    return () => {
      if (methodologiesRef.current) {
        observer.unobserve(methodologiesRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 md:p-0">
      <div className="w-full bg-black">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16 relative">
            {/* Background "METHODOLOGIES" text */}
            <div
              ref={methodologiesRef}
              className={`absolute inset-0 flex items-center justify-center pointer-events-none`}
            >
              <span
                className={`mb-8 ${style["main-methodology"]} transform transition-transform duration-700 ${monsterfont.className} ${isInView ? `${styles["scale-110"]} ${styles["opacity-100"]}` : `${styles["scale-75"]} ${styles["opacity-0"]}`}`}
              >
                METHODOLOGIES
              </span>
            </div>

            {/* Main titles */}
            <div className="relative z-10">
            <h2 className={` ${styles["description"]} ${monsterfont1.className} mt-6 md:mt-14 text-white`}>
              WE USE
            </h2>
            <h2 className={`${styles["description"]} ${monsterfont.className} text-white -mt-2`}>
              TO ACCELERATE
            </h2>
          </div>
          </div>

          <div className={`shadow-lg text-start w-full ${style["border-design"]} mb-10`}>
            <div className="grid grid-cols-4 justify-items-center">
              {icons.map((icon) => (
                <button
                  key={icon.id}
                  onClick={() => {
                    setActiveContent({ title: icon.title, content: icon.content });
                    setActiveId(icon.id);
                  }}
                  className={`w-full transition-colors duration-300 ${activeId === icon.id ? 'bg-[rgba(217,48,45,0.1)]' : 'bg-black hover:bg-[rgba(217,48,45,0.1)]'} focus:outline-none`}
                >
                  <div className="p-5 md:mx-[100px]">
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="w-[50px] h-[50px] mx-auto"
                    />
                  </div>
                </button>
              ))}
            </div>

            {/* Separator Line */}
            <hr className="border-red-600 w-full" />

            {/* Content Section */}
            <div className="p-[20px] md:p-[70px] bg-black overflow-hidden" style={{ height: "350px" }}>
              <h2 className={`${style["method-title"]} ${monsterfont.className}`}>{activeContent.title}</h2>
              <p className={`${style["method-description"]} font-helveticaneue text-semi-white`}>{activeContent.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveBox;