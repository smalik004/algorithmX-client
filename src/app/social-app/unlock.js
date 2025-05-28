'use client';
import React, { useState, useEffect, useRef } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook} from "@fortawesome/free-brands-svg-icons";
import styles from '../seo/style.module.css';
import { Montserrat } from "next/font/google";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

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
  const [percentages, setPercentages] = useState([21, 0, 0, 56]); // Set percentage only for 1st and 4th items
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
        setVisiblePercentages(prev =>
          prev.map((current, index) =>
            current < percentages[index]
              ? Math.min(current + 5, percentages[index])
              : current
          )
        );
      }, 50);

      return () => clearInterval(animationInterval);
    }
  }, [isVisible, percentages]);

  const descriptions = [
    'Social media video advertisements witnessed a 20.1 percent increase to reach $24.35 billion in 2022.',
    'The second largest digital ad market is social media advertising.',
    'Marketers achieve the highest ROI from short-form videos among all social media strategies.',
    '56% of marketers prefer to use TikTok, making it the most popular influencer marketing platform.',
  ];

  const icons = [
    null,
    <FontAwesomeIcon icon={faSquareFacebook} className="text-white w-[65px] h-[80px] " />,
    <FontAwesomeIcon icon={faPlayCircle} className="text-white w-[65px] h-[80px]" />,
    null,
  ];

  const titles = [null, 'Social Media Advertising', 'Short-Form Video ', null];

  return (
    <div className="bg-black text-white py-12 px-6 flex flex-col items-center min-h-screen justify-center" ref={componentRef}>
      <div className="max-w-[1200px] mx-auto">
        <h1 className={` ${styles["unlock-title"]} ${monsterfont.className} `}>MASTERING SOCIAL MEDIA SUCCESS</h1>
        <div className="flex justify-center items-center ">
          <div className="w-10 h-1 bg-blue-600 mx-auto my-4"></div>
        </div>
        <p className={`${styles["unlock-subtitle"]} ${monsterfont2.className} text-semi-white text-center mt-4 mb-8`}>
          Expert strategies to elevate your brand's social media impact.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-3">
          {descriptions.map((description, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {index === 0 || index === 3 ? (
                <div className="w-32 h-32 mb-4">
                  <CircularProgressbar
                    value={visiblePercentages[index]}
                    text={`${visiblePercentages[index]}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                      pathColor: '#2775FF',
                      textColor: '#6377DF',
                      trailColor: '#000',
                    })}
                  />
                </div>
              ) : (
                <>
                  {icons[index]}
                  <h3 className={`text-[26px] leading-[26px] font-semibold ${monsterfont3.className} mt-[35px]`}>
                    {titles[index]}
                  </h3>
                </>
              )}
              <p className={`text-center text-[18px] font-opensans  mt-10px`}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UnlockSuccess;
