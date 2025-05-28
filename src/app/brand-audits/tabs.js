'use client'
import { useState } from "react";

export default function OutdoorTabs() {
  const [activeTab, setActiveTab] = useState("Hiking");
 
  const tabs = [
    { name: "Hiking", imageSrc: "/images/hiking.png", alt: "Hiking icon" },
    { name: "Desert", imageSrc: "/images/desert.png", alt: "Desert icon" },
    { name: "Forest", imageSrc: "/images/forest.png", alt: "Forest icon" },
    { name: "Camping", imageSrc: "/images/forest.png", alt: "Camping icon" },
    { name: "Beach", imageSrc: "/images/hiking.png", alt: "Beach icon" }
  ];
 
  // Use different layouts for mobile and desktop
  return (
    <>
      {/* Mobile layout - simple column */}
      <div className="sm:hidden bg-teal-500 w-full py-4">
        <div className="flex flex-col items-center w-full px-4 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center justify-start bg-white shadow-lg w-full px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.name ? "ring-2 ring-teal-700" : ""
              }`}
            >
              <div className="rounded-full p-1">
                <img
                  src={tab.imageSrc}
                  alt={tab.alt}
                  className="w-12 h-12"
                />
              </div>
              <span className="text-base text-black font-medium ml-4">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Desktop layout - original design */}
      <div className="hidden sm:block relative bg-teal-500 w-full py-6 h-[100px]">
        <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-[20%] z-10 w-full flex flex-wrap justify-center sm:gap-4 md:gap-[80px] px-4">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center bg-white shadow-lg w-auto px-[5px] py-[2px] rounded-lg min-w-[8rem] transition-all duration-300 ${
                activeTab === tab.name ? "ring-2 ring-teal-700" : ""
              }`}
            >
              <div className="rounded-full p-2">
                <img
                  src={tab.imageSrc}
                  alt={tab.alt}
                  className="w-[80px] h-[70px]"
                />
              </div>
              <span className="text-base sm:text-lg text-black font-medium">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}