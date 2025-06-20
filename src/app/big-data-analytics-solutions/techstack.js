import React from "react";
import Image from "next/image";
import styles from "../video-services/styles.module.css";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});

const BigDataTechnologyToolbox = () => {
  const tools = [
    { id: "ps", name: "TenserFlow", image: "/images/Adobe-Target.png" },
    { id: "ai", name: "PyTorch", image: "/images/Amplitude.png" },
    { id: "ae", name: "OpenAi Model", image: "/images/Crazy-Egg.png" },
    {
      id: "id",
      name: "Google CloudAI",
      image: "/images/Google-Analytics (1).png",
    },
    { id: "canva", name: "Tableau", image: "/images/Google-Optimize.png" },
    {
      id: "figma",
      name: "Power BI",
      image: "/images/Google-PageSpeed-Insights.png",
    },
    { id: "cs", name: "Looker", image: "/images/GTmetrix.png" },
    { id: "stock", name: "Hadoop", image: "/images/Hotjar.png" },
    { id: "kis", name: "Snowflake", image: "/images/Kissmetrics.png" },
    { id: "mix", name: "AWS", image: "/images/Mixpanel.png" },
    { id: "opt", name: "Azure", image: "/images/Optimizely.png" },
    { id: "pin", name: "Kubernetes", image: "/images/Pingdom.png" },
    { id: "pow", name: "Docker", image: "/images/Power BI.png" },
    { id: "qua", name: "Reactjs", image: "/images/Qualaroo.png" },
    { id: "tab", name: "Next.js", image: "/images/Tableau.png" },
    { id: "js", name: "Javascript", image: "/images/Tableau.png" },
    { id: "ht", name: "HTML5", image: "/images/Tableau.png" },
    { id: "an", name: "Angular", image: "/images/Pingdom.png" },
    { id: "css", name: "CSS3", image: "/images/Pingdom.png" },
  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}
        >
          TECHNOLOGY TOOLBOX
        </h2>

        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>

        <p
          className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont1.className} mb-8 sm:mb-16  px-2`}
        >
          Our Big Data tech stack combines advanced analytics, automated
          testing, personalization, and real-time feedback to optimize
          performance and elevate user experience.
        </p>
        <div className="container mx-auto flex justify-center items-center">
          <div className="grid grid-cols-4 gap-1">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`${styles["background"]} rounded-lg  flex items-center ${styles["tool"]}  transition duration-300`}
              >
                {/* Flex container for image and text */}
                <div
                  className={`flex w-full items-center ${styles["toolbox"]}  `}
                >
                  {/* Image part (1/3) */}
                  <div className="md:w-1/5 ">
                    <Image
                      width={48}
                      height={48}
                      src={tool.image}
                      alt={tool.name}
                      className="w-12 h-12  object-contain md:ml-2"
                    />
                  </div>

                  {/* Text part (2/3) */}
                  <div className="md:w-4/5 ">
                    <div>
                      <span
                        className={`hidden md:block ${styles["toolbox"]} ml-1 mb-0`}
                      >
                        {tool.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigDataTechnologyToolbox;
