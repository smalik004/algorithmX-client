'use client'
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import styles from './style.module.css'
import { Montserrat } from 'next/font/google';
import Link from 'next/link'; 

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="w-full">
      <button
        className="w-full py-4 pl-10 flex justify-between items-center text-left border-b border-white mb-4"
        onClick={onClick}
      >
        <h3 className={`text-[16px] tracking-[0.02em] leading-[16px] ${monsterfont1.className} text-white  `}>{title}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-white" />
        ) : (
          <ChevronDown className="h-5 w-5 text-white" />
        )}
      </button>
      {isOpen && (
        <div className={`text-semi-white text-[16px] leading-[26px] mt-[25px] p-10 font-helveticaneue `}>
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "UNMATCHED EXPERTISE IN SOCIAL MEDIA AUDITS",
      content: "Our team is highly selective, consisting only of top-tier industry experts who excel in their field. As seasoned social media auditors, we design audits specifically to maximize your profits, focusing on every detail of your paid social strategy to ensure nothing is left on the table."
    },
    {
      title: "DIRECT AND TRANSPARENT APPROACH",
      content: "We believe in addressing issues directly. As social media auditors, we don’t sugar-coat or hide behind industry excuses. Instead, we tackle problems head-on, centering our focus on what matters most to you: increasing your bottom line and driving results."
    },
    {
      title: "RECOGNITION THROUGH RESULTS",
      content: "Our ‘award’ is measured in the results we deliver for clients, not paid accolades. As a leading social media audit agency, we take pride in outpacing the competition and generating millions for our clients through effective, high-impact paid social media strategies."
    },
    {
      title: "VALUES YOU CAN TRUST",
      content: "With transparency at our core, we offer social media audits built on honesty and expertise. Unlike other social media auditors who may settle for standard results, we go above and beyond to provide actionable insights that elevate your campaigns. Trust us to deliver audits and strategies that push your business forward in the competitive social media landscape."
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[1200px] mx-auto p-4 md:p-6 flex flex-col lg:flex-row lg:gap-12">
        {/* Accordion Section */}
        <div className="lg:w-[60%] space-y-1">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* Info Card Section */}
        <div className="lg:w-[40%] mt-8 lg:mt-0">
          <div className={`${styles["box-design"]}`}>
            <h2 className="text-white font-helveticaneue leading-[18px] font-[18px] font-[700]  text-center">Why Choose</h2>
            <h1 className={`leading-[40px] text-[36px] mb-10 mt-12 text-white text-center  ${monsterfont.className} `}>
              ALGORITHMX FOR YOUR SOCIAL MEDIA AUDIT?
            </h1>
            <p className="font-helveticaneue leading-[28px] font-[16px] m-[30px] mt-[30px] text-white">
              To qualify for a free social media audit covering Facebook, Instagram, TikTok, and more, we only require temporary read-only access to your Facebook Ads account and Google Analytics. We will guide you through the process of granting this access.
            </p>
            <Link href="/contact-us">
  <button className="bg-[#272727] text-[14px] font-opensans font-[600] text-[#f7f5ef] px-6 py-2 rounded-[100px]  flex justify-center items-center mx-auto">
    CONTACT US
  </button>
</Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
