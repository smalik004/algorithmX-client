'use client'
import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});

const BigDataIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="64" height="64"
  >
    <line
      className="lievo-savelinecap"
      fill="none"
      stroke="#A5B5B6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="20.37"
      y1="27.33"
      x2="39.68"
      y2="17.77"
    ></line>

    {/* Circles with Blue Stroke */}
    <path
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M51,15c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6s2.69-6,6-6C48.31,9,51,11.69,51,15z"
    ></path>

    <line
      className="lievo-savelinecap"
      fill="none"
      stroke="#A5B5B6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="20.37"
      y1="32.67"
      x2="39.68"
      y2="42.23"
    ></line>

    <path
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M51,45c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C48.31,39,51,41.69,51,45z"
    ></path>

    <path
      className="lievo-altstroke"
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M21,30c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C18.31,24,21,26.69,21,30z"
    ></path>
  </svg>
);
const CustomIcon = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="64"
    height="64"
  >
    <polyline
      className="lievo-savelinecap"
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      points="30,49 23,49 30,40 37,49 30,49"
    />
    <polyline
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeMiterlimit="10"
      points="30,49 41,49 41,53 19,53 19,49 30,49"
    />
    <line
      className="lievo-savelinecap"
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      x1="41.37"
      y1="18.07"
      x2="38.54"
      y2="26.56"
    />
    <line
      className="lievo-savelinecap"
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      x1="31.46"
      y1="19.49"
      x2="39.95"
      y2="16.66"
    />
    <path
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M43.41,14.59c0.78,0.78,0.78,2.05,0,2.83c-0.78,0.78-2.05,0.78-2.83,0c-0.78-0.78-0.78-2.05,0-2.83S42.63,13.8,43.41,14.59z"
    />
    <path
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M35,23.02l12.02,12.02c-6.64,6.64-17.4,6.64-24.04,0c-6.64-6.64-6.64-17.4,0-24.04L35,23.02"
    />
  </svg>
);
const Blockchain = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="64"
    height="64"
  >
    <path
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M29,7c12.7,0,23,10.3,23,23c0,12.7-10.3,23-23,23C16.3,53,6,42.7,6,30C6,17.3,16.3,7,29,7z"
    />
    <path
      fill="none"
      stroke="#69adff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M29,21v-6 M29,39v6M23,35.4v0.9c0,1.49,1.79,2.7,4,2.7h4c2.21,0,4-1.61,4-3.6v-1.8c0-1.99-1.79-3.6-4-3.6h-4c-2.21,0-4-1.61-4-3.6v-1.8c0-1.99,1.79-3.6,4-3.6h4c2.21,0,4,1.21,4,2.7v0.9"
    />
  </svg>
);

const BigDataIcon1 = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="64" height="64"
  >
    <line
      className="lievo-savelinecap"
      fill="none"
      stroke="#A5B5B6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="20.37"
      y1="27.33"
      x2="39.68"
      y2="17.77"
    ></line>

    {/* Circles with Blue Stroke */}
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M51,15c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6s2.69-6,6-6C48.31,9,51,11.69,51,15z"
    ></path>

    <line
      className="lievo-savelinecap"
      fill="none"
      stroke="#A5B5B6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      x1="20.37"
      y1="32.67"
      x2="39.68"
      y2="42.23"
    ></line>

    <path
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M51,45c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C48.31,39,51,41.69,51,45z"
    ></path>

    <path
      className="lievo-altstroke"
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeMiterlimit="10"
      d="M21,30c0,3.31-2.69,6-6,6c-3.31,0-6-2.69-6-6c0-3.31,2.69-6,6-6C18.31,24,21,26.69,21,30z"
    ></path>
  </svg>
);
const Blockchain1 = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    width="64"
    height="64"
  >
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M29,7c12.7,0,23,10.3,23,23c0,12.7-10.3,23-23,23C16.3,53,6,42.7,6,30C6,17.3,16.3,7,29,7z"
    />
    <path
      fill="none"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      strokeMiterlimit="10"
      d="M29,21v-6 M29,39v6M23,35.4v0.9c0,1.49,1.79,2.7,4,2.7h4c2.21,0,4-1.61,4-3.6v-1.8c0-1.99-1.79-3.6-4-3.6h-4c-2.21,0-4-1.61-4-3.6v-1.8c0-1.99,1.79-3.6,4-3.6h4c2.21,0,4,1.21,4,2.7v0.9"
    />
  </svg>
);

const solutions = [
  {
    title: 'BIG DATA',
    description: 'Advanced software that efficiently manages and processes huge volumes of data at a fast pace.',
    icon: <BigDataIcon />,
    direction: 'left',
  },
  {
    title: 'ARTIFICIAL INTELLIGENCE',
    description: 'Powerful software that examines historical and real-time data to provide insights and spur decisions.',
    icon:<CustomIcon />,
    direction: 'right',
  },
  {
    title: 'DATA SCIENCE',
    description: 'Intelligent software that unveils intricate data and boosts precision via consistent learning.',
    icon:<Blockchain/>,
    direction: 'left',
  },
  {
    title: 'INTERNET OF THINGS',
    description: 'Software capable of quickly sorting, analyzing, and mining data obtained from physical items connected over the internet.',
    icon: <BigDataIcon1 />,
    direction: 'right',
  },
  {
    title: 'COMPUTER VISION',
    description: 'Unique software that analyzes videos and digital images to identify and categorize objects and patterns.',
    icon: <BigDataIcon1 />,
    direction: 'right',
  },
  {
    title: 'AUGMENTED REALITY',
    description: 'Software that has the capability to superimpose virtual objects onto the actual environments.',
    icon: <Blockchain/>,
    direction: 'left',
  },
  {
    title: 'VIRTUAL REALITY',
    description: 'Software technology that creates simulated virtual environments with 3D objects and realistic audio effects.',
    icon: <BigDataIcon1 />,
    direction: 'right',
  },
  {
    title: 'BLOCKCHAIN',
    description: 'Software with highly protected storage of decentralized data making it easy to transact between points.',
    icon:<Blockchain/>,
    direction: 'left',
  },
];

const BusinessSolutions = () => {
  const [visibleBoxes, setVisibleBoxes] = useState(new Set());
  const boxRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBoxes((prev) => new Set(prev).add(entry.target));
          }
        });
      },
      { threshold: 0.2 }
    );
  
    boxRefs.current.forEach((box) => {
      if (box) observer.observe(box);
    });
  
    return () => {
      boxRefs.current.forEach((box) => {
        if (box) observer.unobserve(box);
      });
    };
  }, []);

  const numberOfColumns = 4;

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className={`${styles["solution-text"]} ${monsterfont.className}`}>SOLUTIONS</p>
          <h1 className={`${styles["solution-title"]} ${monsterfont1.className}`}>SOFTWARES FOR</h1>
          <h2 className={`${styles["solution-title"]} ${monsterfont.className}`}>ADVANCED BUSINESS PURPOSES</h2>
          <div className="flex justify-center mt-4">
          <div className="h-[2px] w-[35px] bg-[#2775ff]"></div>
        </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {solutions.map((solution, index) => {
            const rowIndex = Math.floor(index / numberOfColumns);
            const colIndex = index % numberOfColumns;
            const isVisible = visibleBoxes.has(boxRefs.current[index]);
            const bgColor = (rowIndex + colIndex) % 2 === 0 ? styles.bgBlack : styles.bgGray;


            return (
              <div
                key={solution.title}
                ref={(el) => (boxRefs.current[index] = el)}
                className={`relative overflow-hidden  transform transition-all duration-500 ${
                  isVisible
                    ? solution.direction === 'left'
                      ? styles['slide-in-left']
                      : styles['slide-in-right']
                    : 'opacity-0'
                } ${bgColor}`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  {solution.icon}
                  <h3 className={`${styles["solution-subtitle"]} ${monsterfont2.className} text-white`}>{solution.title}</h3>
                  <p className={`${styles["solution-description"]} font-opensans text-semi-white`}>{solution.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BusinessSolutions;