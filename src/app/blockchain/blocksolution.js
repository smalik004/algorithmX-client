import React from 'react';
import styles from'./style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});

const BlockchainSolutions = () => {
  const solutions = [
    { title: 'NFT Development', id: 1 },
    { title: 'Crowdfunding Platform Development', id: 2 },
    { title: 'Token Wallets', id: 3 },
    { title: 'Blockchain Payment Platform', id: 4 },
    { title: 'Financial Trading Platform', id: 5 },
    { title: 'Marketplace Development', id: 6 },
    { title: 'DAO Development', id: 7 },
    { title: 'DeFi Development', id: 8 },
    { title: 'Game Apps', id: 9 },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className={`${styles["solution-title"]} ${monsterfont.className} text-center`}>
          BLOCKCHAIN SOLUTIONS
        </h1>
        <h2 className={`${styles["solution-title"]} ${monsterfont2.className} text-center mb-8`}>
          WE DELIVER
        </h2>
        <div className="flex justify-center mb-8">
          <div className="h-[2px] w-[35px] bg-[#2775ff]"></div>
        </div>
        
        <p className={`${styles["solution-subtitle"]} ${monsterfont1.className} text-center mb-16 text-semi-white`}>
          As a leading blockchain application development company, AlgorithmX provides personalized solutions designed to suit your business requirements. Employing an agile methodology, we prioritize comprehending your distinct needs, enabling us to devise bespoke blockchain solutions that foster innovation in your business processes.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-[3.5rem] max-w-4xl content-center mx-auto">
          {solutions.map((solution) => (
            <div key={solution.id} className="flex items-center space-x-3">
              <div className="w-[12px] h-[12px] bg-yellow-400 rounded-full mr-[10px] "></div>
              <span className={`${styles["solution-description"]} font-helveticaneue `}>{solution.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockchainSolutions;