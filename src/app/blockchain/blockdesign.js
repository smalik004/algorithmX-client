import React from 'react';
import styles from './style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '600',
  fallback: ["sans-serif"],
});

const BlockchainHero = () => {
  return (
    <div className="relative  bg-black flex items-center justify-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />

      {/* Content container with max-w-6xl */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-20 text-center">
        <h1 className={`${styles["design-title"]} text-white ${monsterfont.className}`}>
          Blockchain Design & Development Platforms
        </h1>

        <p className={`${styles["design-description"]} font-helveticaneue text-semi-white mt-8`}>
          AlgorithmX presents a vast range of blockchain development services, including developing Ethereum applications and crafting cutting-edge blockchain solutions. Our skilled blockchain developers hold expertise in tailoring solutions to suit your business requirements, whether on new platforms like Polkadot or established ones like Ethereum.
        </p>
      </div>


    </div>
  );
};

export default BlockchainHero;
