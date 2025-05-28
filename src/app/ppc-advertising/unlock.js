'use client';
import styles from '../seo/style.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Montserrat } from "next/font/google";
import { faChartLine } from '@fortawesome/free-solid-svg-icons';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "100",
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
const monsterfont3 = Montserrat({
    subsets: ["latin"],
    weight: "800",
  });

const UnlockSuccess = () => {
  const [percentages, setPercentages] = useState([79, 80, 65, 0]); // Set percentage only for 1st, 2nd, and 3rd items
  const [visiblePercentages, setVisiblePercentages] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const animationInterval = setInterval(() => {
        setVisiblePercentages((prev) =>
          prev.map((current, index) =>
            current < percentages[index] ? Math.min(current + 5, percentages[index]) : current
          )
        );
      }, 50);

      return () => clearInterval(animationInterval);
    }
  }, [isVisible, percentages]);

  const descriptions = [
    'According to 79% of brands, PPC plays a significant role in impacting their business success.',
    'Search ads increase top-of-mind brand awareness among consumers by 80%.',
    'When searching for an item online, 64.6% of users click on Google Ads.',
    'Global advertising expenditure is predicted to rise by 7.4% in 2024.',
  ];

  const icons = [
    <FontAwesomeIcon icon={faChartLine} className="text-[#28a745] w-[75px] h-[77px]" />,
  ];

  const titles = [null, null, null, 'Global Ad Spending'];

  return (
    <div className="bg-black text-white py-12 px-6 flex flex-col items-center min-h-screen justify-center" ref={componentRef}>
      <div className="max-w-[1200px] mx-auto">
        <h1 className={`${styles["unlock-title"]} ${monsterfont.className}`}>PPC CAMPAIGN SUCCESS</h1>
        <div className="flex justify-center items-center">
          <div className="w-10 h-1 bg-blue-600 mx-auto my-4"></div>
        </div>

        <p className={`${styles["unlock-subtitle"]} ${monsterfont2.className} text-semi-white text-center mt-4 mb-8`}>
          Driving impactful results through effective PPC campaign management strategies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {descriptions.map((description, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {index === 3 ? (
                <div className="w-32 h-32 flex justify-center items-center ">
                  {icons[0]}
                </div>
              ) : (
                <div className="w-32 h-32 mb-4">
                  <CircularProgressbar
                    value={visiblePercentages[index]}
                    text={`${visiblePercentages[index]}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      pathColor: "#2775FF",
                      textColor: "#6377DF",
                      trailColor: "#000",
                    })}
                  />
                </div>
              )}
              
              {/* Title Below Image Above Description */}
              {titles[index] && <h2 className={`text-[26px] leading-[26px] font-semibold ${monsterfont3.className} `}>{titles[index]}</h2>}

              <p className="text-center text-[18px] font-opensans">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnlockSuccess;
