import React from 'react';
import styles from './style.module.css'
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const SeoServices = () => {
return (
    <div className="bg-black text-white py-20 px-8">
    <div className="max-w-[1200px] mx-auto mt-[50px] mb-[50px]">
        <h1 className={` ${styles["what-text"]}  ${monsterfont.className} `}>What sets AlgorithmX’s SEO Services apart</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {/* Card 1 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Prospect-analysis.png" alt="Backlink Analysis" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Prospect analysis</h2>
           <p className={`text-[12px] leading-[1rem]`}>
            To craft an effective marketing strategy it is crucial to thoroughly understand your customer base. Our SEO experts embark on clearly identifying your target audience and evaluating it to formulate a comprehensive plan.
            </p>
            </div>
        </div>
        {/* Card 2 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Competitor-Analysis.png" alt="Manual Review" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Competitor Analysis</h2>
           <p className={`text-[12px] leading-[1rem]`}>
            Being the best SEO company in USA, AlgorithmX meticulously examines your competitor’s strategies to position your business well and align your SEO strategies to achieve growth and impactful results.
            </p>
            </div>
        </div>
        {/* Card 3 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/Content-Building.png" alt="Removal Requests" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>Content Building</h2>
           <p className={`text-[12px] leading-[1rem]`}>
            As part of our SEO services, we create engaging content that captivates your audience and transforms them into regular customers and brand fans. We build your credibility by constantly delivering valuable content.
            </p>
            </div>
        </div>
        {/* Card 4 */}
        <div className="bg-black border border-white p-4 flex text-xs items-center">
            <img src="/images/On-Page.png" alt="Link Disavow" className="w-12 h-12 mr-4" />
            <div>
            <h2 className={` text-[18px] leading-[1.75rem] `}>On-Page</h2>
           <p className={`text-[12px] leading-[1rem]`}>
            With our exceptional search engine optimization services, our team carefully optimizes every element on your web pages with utmost detail so as to make your content stand out in search engine results, attracting a large audience.
            </p>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default SeoServices;

