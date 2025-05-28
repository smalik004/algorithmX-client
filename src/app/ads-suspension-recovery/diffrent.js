import Image from 'next/image';
import { Montserrat } from "next/font/google";
import { Inter } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback : ["sans-serif"],
});
const interFont = Inter({
  subsets: ["latin"],
  style: "normal",
  weight: "400",
  fallback : ["sans-serif"],
});

export default function AdsProcess() {
  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className={`text-center font-size-64 algo-line-height-68 ${monsterfont.className}  text-white mb-12`}>
      Different types of<br/> Google Ads account <br/> suspension
      </h1>
      <div className="max-w-6xl mx-auto">

      {/* Section 1: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-12">
        <div className="md:w-1/3">
          <Image 
            src="/images/circumventing-policy-violation.webp" 
            alt="Process step image"
            width={600} 
            height={600} 
            className="rounded-[20px]"
          />
        </div>
        <div className="md:w-4/5 md:pl-8 mt-6 md:mt-0">
          <h2 className={`font-size-42 algo-line-height-26 ${monsterfont.className} text-white mb-4`}>
          Circumventing policy violation:
          </h2>
          <p className={`text-semi-white TEXT-[16px] ${interFont.className}`}>
          Circumventing Google Ads policies involves trying to manipulate Google's advertising rules like attempting to use prohibited keywords, misleading content, or other deceptive tactics to get ads approved. Engaging in such practices can lead to account suspensions.
          </p>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row-reverse items-center md:items-start mb-12">
        <div className="md:w-1/3">
          <Image 
            src="/images/Suspicious-payment-suspension.webp" 
            alt="Process step image"
            width={300} 
            height={300} 
            className="rounded-[20px]"
          />
        </div>
        <div className="md:w-4/5 md:pr-8 mt-6 md:mt-0">
          <h2 className={`font-size-42 algo-line-height-26 ${monsterfont.className} text-white mb-4`}>
          Suspicious payment suspension:
          </h2>
          <p className="text-semi-white">
          Google Ads account suspension due to suspicious payment occurs when Google detects irregularities or concerns related to the payment information associated with the account. When such suspicions arise, Google temporarily suspends the account to investigate and ensure the payment information is in compliance with their policies.
          </p>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3">
          <Image
            src="/images/Unpaid-balance-suspension.webp"
            alt="Process step image"
            width={300}
            height={300}
            className="rounded-[20px]"
          />
        </div>
        <div className="md:w-4/5 md:pl-8 mt-6 md:mt-0">
          <h2 className={`font-size-42 algo-line-height-26 ${monsterfont.className} text-white mb-4`}>
          Unpaid balance suspension:
          </h2>
          <p className="text-semi-white">
          Google Ads account suspension due to an unpaid balance happens when the account holder has outstanding and unpaid advertising charges. In this scenario, Google suspends the account to encourage the settlement of the unpaid balance. It's essentially a temporary pause to ensure that financial obligations are met before continuing with ad campaigns.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
