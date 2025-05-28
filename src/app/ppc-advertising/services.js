import React from 'react';
import styles from '../seo/style.module.css'
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});


const PPCServices = () => {
return (
    <div className="bg-black text-white py-20 px-8">
    <div className="max-w-[1200px] mx-auto mt-[50px] mb-[50px]">
        <h1 className={` ${styles["what-text"]} ${monsterfont.className} `}>Get a Tailored PPC Strategy Based on Verified Outcomes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Prospect-analysis.png" alt="Backlink Analysis" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Discovery</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            We create a comprehensive profile of your advertising audience by analyzing your industry and target market independently as part of our PPC services.
            </p>
            </div>
        </div>
        {/* Card 2 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Competitor-Analysis.png" alt="Manual Review" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Strategy</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            With our best PPC services packages, we customize your PPC strategy to meet your specific requirements, goals, and timeline, guaranteeing top-notch performance and outcomes that match your desired objectives.
            </p>
            </div>
        </div>
        {/* Card 3 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Content-Building.png" alt="Removal Requests" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Creative</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            AlgorithmX offers original creative assets that perfectly match your brand standards and guidelines while truly reflecting the beliefs and spirit of your company with our SEM & PPC services.
            </p>
            </div>
        </div>
        {/* Card 4 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/On-Page.png" alt="Link Disavow" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Launch</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            Our SEM & PPC services involve launching your PPC campaigns and monitoring their performance thereafter to quickly adjust and optimize them for improved results.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default PPCServices;

