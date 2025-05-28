import React from 'react';
import styles from "../back-end/style.module.css";
import { Montserrat } from 'next/font/google';

const monsterfont1 = Montserrat ({
  subsets : ["latin"],
  weight :"200",
  fallback: ["sans-serif"],
})

const DappSection = () => {
  return (
    <section className="relative w-full  bg-black flex items-center justify-center p-4 min-h-screen pt-[100px]">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        <h1 className={` ${styles["backend"]} ${monsterfont1.className}  bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent `}>
        dApp Development Services
        </h1>
        
        <p className={` ${styles["backend-description"]}  ${monsterfont1.className}  text-semii-white leading-relaxed`}>
        We offer expert dApp Development Services to build secure, scalable, and user-friendly decentralized applications tailored to your business needs. From smart contract integration to seamless UI/UX, we ensure your dApp stands out in the Web3 ecosystem.
        </p>
      </div>
    </section>
  ); 
};

export default DappSection;