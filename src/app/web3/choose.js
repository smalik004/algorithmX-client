"use client";
import React, { useState } from "react";
import { Award, Link, Layers, Shield } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "600",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});

const Web3DevelopmentPage = () => {
  const [activeSection, setActiveSection] = useState("robustSecurity");

  const sections = {
    robustSecurity: {
      icon: <Shield className="w-6 h-6" />,
      title: "Seamless Interoperability",
      description:
        "We build cross-chain integrations using bridges, oracles (Chainlink, Pyth), and modular APIs—enabling fluid data exchange between on-chain and off-chain systems, including legacy stacks.",
      image: "/images/a1.png",
    },
    reliableConnectivity: {
      icon: <Link className="w-6 h-6" />,
      title: "User-Centric Web3 UX",
      description:
        "Our teams design intuitive interfaces that abstract cryptographic complexity, streamline wallet interactions (MetaMask, WalletConnect), and simplify transaction flows for both retail and enterprise adoption.",
      image: "/images/Why.webp",
    },
    prioritizingUsability: {
      icon: <Layers className="w-6 h-6" />,
      title: "Scalable Blockchain Architectures ",
      description:
        "We deploy gas-optimized smart contracts and use rollups (Optimism, Arbitrum), sidechains (Polygon), and modular chains (Celestia, Cosmos SDK) to ensure scalability without sacrificing decentralization or security.",
      image: "/images/a1.png",
    },
    scalability: {
      icon: <Award className="w-6 h-6" />,
      title: "Audited Smart Contracts",
      description:
        "We write deterministic, upgradeable smart contracts in Solidity and Rust, backed by formal verification, static analysis (MythX, Slither), and independent third-party audits to ensure runtime safety and protocol integrity.",
      image: "/images/Why.webp",
    },
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center">
      <div className="w-full max-w-[1200px] px-4 py-12">
        <h2
          className={`text-[40px] leading-[48px] ${monsterfont.className} text-white mb-4`}
        >
          Why Choose AlgorithmX as Your Web3 Development Partner?
        </h2>
        <p
          className={`text-[16px] leading-[20px] ${monsterfont1.className} text-semi-white mb-4`}
        >
          AlgorithmX brings deep expertise across Layer-1 and Layer-2 protocols,
          smart contract engineering, decentralized finance (DeFi), NFT
          infrastructure, and DAO tooling. We architect secure, scalable, and
          production-grade Web3 systems designed for composability,
          interoperability, and long-term resilience.
        </p>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
          <div className="md:w-1/3 space-y-4 rounded-[20px] ">
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`w-full flex items-center space-x-4 p-4 rounded-lg transition-colors duration-300 ${
                  activeSection === key
                    ? " text-white "
                    : "bg-transparent text-semi-white "
                }`}
              >
                {section.icon}
                <span className="font-semibold font-helveticaneue ">
                  {section.title}
                </span>
              </button>
            ))}
          </div>

          <div className="hidden md:grid md:w-2/3 rounded-lg p-8 grid-cols-2 gap-8">
            <div className="w-full h-[200px] relative">
              <Image
                width={300}
                height={200}
                src={sections[activeSection].image}
                alt={sections[activeSection].title}
                className="object-cover rounded-lg w-full]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h3 className="text-2xl font-bold font-helveticaneue">
                  {sections[activeSection].title}
                </h3>
              </div>
              <p className="text-semi-white font-helveticaneue">
                {sections[activeSection].description}
              </p>
            </div>
          </div>

          <div className="md:hidden">
            <div className="border-[1px] rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-4">
                {sections[activeSection].icon}
                <h3 className="text-xl font-bold font-helveticaneue">
                  {sections[activeSection].title}
                </h3>
              </div>
              <p className="text-semi-white font-helveticaneue">
                {sections[activeSection].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Web3DevelopmentPage;
