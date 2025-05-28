'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '100',
    fallback : ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "400",
    fallback : ["sans-serif"],
    });

const SmoothScrollStack = () => {
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
});

const cards = [
    {
    title: "Audience Analysis",
    description:
        "The entire concept of remarketing is based on showing ads to your previous website visitors as they continue to browse the internet. But not all your website visitors represent the same sort of value to your business.\n\nSome visitors are simply not interested in what you sell, but some visitors are closer to the end of the buying funnel, and they'd be more likely to convert if they came back to your site shortly after their last visit.\n\nOur first step is to begin analyzing all your previous traffic and their behavioral patterns in order to identify the segments that we want to target more a aggressively.",
    color: "#000000",
    url: "#",
    src: "images/Audience-Analysis.webp",
    points: [],
    },
    {
    title: "Audience Segmentation",
    description: "Audience segmentation is at the core of successful remarketing campaigns. We'll be using Google Analytics and Google AdWords to segment your previous website visitors based on in-market segments, affinity audiences, time on sight, previous purchasers, cart abandoners and more.\n\nWith advanced segmentations and rule-based audiences, we have the capability of showing the right ad at the right bid to the people most likely ready to buy what you offer. And of course, audience segmentation is something we test and optimize over time.",
    color: "#000000",
    url: "#",
    src: "images/Audience-Segmentation.webp",
    points: [],
    },
    {
    title: "Remarketing Lists in Search",
    description: "Remarketing does not start and end with showing image and video ads on the display network. With remarketing lists in search ads (RLSA), we can specifically target previous website visitors as they come back to Google to perform additional searches.\n\nRLSA campaigns allows us to collect useful and insightful data, giving us a sense of the length of your sales cycle, and it also gives us the ability to bid on new keywords, targeting searches that may be closer to the top of the buyers funnel.",
    color: "#000000",
    url: "#",
    src: "images/Remarketing-Lists-in-Search.webp",
    points: [],
    },
    {
    title: "Creative Design and Development",
    description: "Without creative, beautifully designed ads, your remarketing campaigns won't go very far. Our in-house team of graphic designers will get to work designing ad creatives from scratch, in all the popular sizes.\n\nFor e-commerce businesses we'll also run dynamic remarketing ads that show users the specific products they were looking at and the products they may have in their shopping carts.\n\nBeyond image ads, we'll also work with your team to create video ads and interactive ads that add an additional layer of fidelity to the customer experience.",
    color: "#000000",
    url: "#",
    src: "images/Creative-Design-and-Development.webp",
    points: [],
    },
    {
    title: "Campaign Structure and Bidding",
    description: "After audience segmentation and creative design is in place, it's time to get to work building your campaign structure inside Google AdWords (or a third party remarketing platform like AdRoll or Criteo).\n\nStructuring your campaigns and ad groups in an organized way is crucial in order to be able to analyze the data in a way that will lead to statistically accurate ROI centric optimizations.\n\nMore importantly than ad group structure is our bidding strategies. We make sure that we're bidding the right amount per click or per conversion for the right audience segments, when those visitors are in the right place and at the right times.",
    color: "#000000",
    url: "#",
    src: "images/Campaign-Structure-and-Bidding.webp",
    points: [], 
    },
];

return (
    <div className="min-h-screen bg-black relative " ref={containerRef} >
    <h1 className={`text-[56px]  md:leading-[40px] md:leading-[50px] md:tracking-[0.06em] text-white ${monsterfont.className} text-center py- z-10 `}>
    Our Approach To <br/>Remarketing Campaign <br/>Management

    </h1>

    {cards.map((card, i) => (
        <Card
        key={i}
        i={i}
        {...card}
        progress={scrollYProgress}
        range={[i * 0.25, 1]}
        targetScale={1 - (cards.length - i) * 0.05}
        />
    ))}
    </div>
);
};

const Card = ({ i, title, description, src, url, color, points, progress, range, targetScale }) => {
const cardRef = useRef(null);

const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
});

const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
const scale = useTransform(progress, range, [1, targetScale]);

return (
    <div ref={cardRef} className="h-screen sticky top-0 flex items-center justify-center px-4 md:px-8 ">
    <motion.div
        style={{
        backgroundColor: color,
        }}
        className="relative w-full max-w-[1100px] h-[700px] md:h-[500px] rounded-xl p-4 md:p-8 flex flex-col border-2 border-pink-500 overflow-y-auto md:overflow-visible"
    >
        <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
        <div className="flex-1 flex flex-col">
        <h2 className={`text-[36px] leading-[1.1] mb-4 text-left text-white  font-helveticaneue font-[400] `}>{title}</h2>
        <p className="text-[15px] font-helveticaneue leading-[20px] text-semi-white whitespace-pre-wrap">{description}</p>

            <ul className="list-disc pl-6 mt-4 text-sm md:text-base text-gray-400">
            {points.map((point, index) => (
                <li key={index} className="mb-2">{point}</li>
            ))}
            </ul>
        </div>
        
        <div className="relative flex-1 min-h-[200px] md:min-h-0">
            <div className="relative w-full h-full">
            <motion.img 
                src={src} 
                alt={title} 
                className="object-cover w-full h-full rounded-lg"
            />
            </div>
        </div>
        </div>
    </motion.div>
    </div>
);
};

export default SmoothScrollStack;