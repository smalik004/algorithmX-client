import React from 'react';
import styles from '../seo/style.module.css'
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const SocialMediaServices = () => {
return (
    <div className="bg-black text-white py-20 px-8">
    <div className="max-w-[1200px] mx-auto mt-[50px] mb-[50px]">
        <h1 className={` ${styles["what-text"]} ${monsterfont.className}`}>Customized Social Media Marketing For Your Business</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Prospect-analysis.png" alt="Backlink Analysis" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Identify Objectives</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            At our premier social media marketing agency, we understand your goals clearly and develop a bespoke strategy to accomplish them, ensuring each step aligns with your objectives for maximum results.
            </p>
            </div>
        </div>
        {/* Card 2 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Competitor-Analysis.png" alt="Manual Review" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Social Media Audit</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            Our social media marketing services include a detailed social media audit in which we begin by mapping out the most effective way to achieve your social media marketing goals successfully.
            </p>
            </div>
        </div>
        {/* Card 3 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Content-Building.png" alt="Removal Requests" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Account Management</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            The expert professionals at our social media marketing agency for small business handle your social media to guarantee continuous marketing and communication across all platforms with efficiency.
            </p>
            </div>
        </div>
        {/* Card 4 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/On-Page.png" alt="Link Disavow" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Market Analysis</h2>
            <p className={`text-[12px] leading-[1rem]`}>
            AlgorithmX’s social media marketing services involve conducting market research to help you understand the market well and assess where you stand compared to your competitors.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default SocialMediaServices;

