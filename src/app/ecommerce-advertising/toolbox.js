import React from "react";
import Image from "next/image";
import styles from "../graphics-services/styles.module.css";
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

const TechnologyToolbox = () => {
  const tools = [
    {
      id: "ae",
      name: "Amazon Advertising",
      image: "/images/Amazon-Advertising.png",
    },
    {
      id: "fb",
      name: "Facebook Ads ",
      image: "/images/Facebook-Ads-Manager.png",
    },
    { id: "hot", name: "Google Ads", image: "/images/Google-Ads.png" },
    {
      id: "ak",
      name: "Campaign Manager",
      image: "/images/LinkedIn-Campaign-Manager.png",
    },
    {
      id: "id",
      name: "Microsoft Ads",
      image: "/images/Microsoft-Advertising.png",
    },
    {
      id: "canva",
      name: "Pinterest Ads",
      image: "/images/Pinterest-Ads-Manager.png",
    },
    {
      id: "ana",
      name: "TikTok Ads Manager",
      image: "/images/TikTok-Ads-Manager.png",
    },
  ];

  return (
    <div className="bg-black text-white py-8 px-2 sm:py-16 sm:px-4">
      <div className="max-w-6xl mx-auto">
        <h1
          className={`${styles["toolbox-title"]} text-center  ${monsterfont.className} mb-3 sm:mb-4`}
        >
          TECHNOLOGY TOOLBOX
        </h1>

        <div className="w-12 h-1 bg-blue-500 mx-auto mb-4 sm:mb-8"></div>

        <p
          className={`text-semi-white text-center ${styles["toolbox-description"]}  ${monsterfont1.className} mb-8 sm:mb-16 max-w-5xl mx-auto px-2`}
        >
          The technology stack for Display Ads includes programmatic tools,
          AI-based targeting, dynamic creatives, real-time bidding, audience
          analytics, and tracking solutions.
        </p>
        <div
          className={`container justify-center justify-items-center ${styles["margin1"]}`}
        >
          <div className="grid grid-cols-4 gap-1">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className={`${styles["background"]} rounded-lg  flex items-center ${styles["tool"]}  transition duration-300`}
              >
                {/* Flex container for image and text */}
                <div
                  className={`flex w-full items-center ${styles["toolbox"]} `}
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

export default TechnologyToolbox;
