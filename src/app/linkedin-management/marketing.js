'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '100',
    fallback: ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "400",
    fallback: ["sans-serif"],
    });

const LinkedinSmoothScrollStack = () => {
const containerRef = useRef(null);
const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
});

const cards = [
    {
    title: "Social Media Management",
    description:
        "Whether you need a LinkedIn profile from scratch or are looking to optimize your brand’s existing presence, our dedicated social media strategists can help businesses manage their company page in the following ways:",
    color: "#000000",
    url: "#",
    src: "images/Social-Media-ManagementS.webp",
    points: [
        "Refining your target market.",
        "Developing LinkedIn Ad campaigns.",
        "Copywriting your business page’s network profile.",
        "Growing your B2B marketing reach by making strategic connections.",
        "Engaging with other brands and users on LinkedIn.",
        "Spearheading LinkedIn content campaigns.",
        "Creating posting schedules.",
        "Monitoring your LinkedIn company page and audience growth.",
        "Reporting on your performance.",
        "Sorting and responding to LinkedIn messages.",
    ],
    },
    {
    title: "Social Media Posts",
    description: "The best way to keep your professional connections engaged is by posting quality content regularly. That’s why AlgorithmX’s social media consultants work directly with our content strategists and creatives to create, distribute and promote posts that keep you in touch with your audience and help raise brand awareness. Moreover, we’ll also provide recommendations for content topics, hashtags and industry news to keep your posts relevant. Below, a list of custom posts we can create:",
    color: "#000000",
    url: "#",
    src: "images/Social-Media-Posts.webp",
    points: [
        "Informative and highly useful text-only posts (1,300 characters or fewer).",
        "Long-form content such as blog posts or thought-leadership articles through LinkedIn’s publishing platform.",
        "Third-party content that is of value to your connections.",
        "Original photos, graphics and other eye-catching visual content.",
        "Original video content.",
        "Company updates and milestones.",
        "Links to your latest research and other original content.",
    ],
    },
    {
    title: "Social Videos",
    description: "Social engagement videos are a great way to build your brand’s identity and gain traction among connections, especially when that video content is short, well-scripted, captioned and worth sharing. In fact, more than half of all video marketers use LinkedIn to distribute their content, and of those, 84% say they’ve been highly successful.\n\nAlgorithmX’s social strategists collaborate directly with our creative teams to produce social-first 30- to 45-second video marketing solutions for your brand that:",
    color: "#000000",
    url: "#",
    src: "images/Social-Videos.webp",
    points: [
        "Grab users’ attention as they scroll through their LinkedIn feeds.",
        "Construct brand credibility.",
        "Demonstrate your expertise.",
        "Encourage likes, comments and shares."
    ],
    },
    {
    title: "Social Listening",
    description: "It’s no secret that reputation is paramount in professional circles, and social listening — finding out what people are saying about your brand or its competitors on social media platforms — is how you keep tabs on the public’s perception.\n\nAlgorithmX’s social media strategists monitor multiple social channels, including LinkedIn, and pay close attention to brand mentions. Some of the tasks involved in social listening include:",
    color: "#000000",
    url: "#",
    src: "images/Social-Listenings.webp",
    points: [
        "Collecting and analyzing data about likes, comments, reshares and posts that tag or refer to your brand.",
        "Responding appropriately when you receive feedback.",
        "Flagging misinformation about your company, its products or services.",
        "Answering the questions that your connections may have asked about your brand.",
        "Helping your company address issues raised by unhappy customers and other stakeholders."
    ],
    },
    {
    title: "Custom Reporting",
    description: "There are three phases to every successful LinkedIn marketing strategy: Plan, build and report. Our social teams start the planning phase by evaluating the state of your current LinkedIn campaigns through benchmark reporting. Next, they build your audience and launch content campaigns. Finally, they report on the performance of those campaigns and provide data-driven recommendations for future tactics and strategic revisions. As part of AlgorithmX’s LinkedIn marketing services, some of the key metrics they’ll look at in their customer reports include but aren’t limited to:",
    color: "#000000",
    url: "#",
    src: "images/Custom-Reporting.webp",
    points: [
        "Followers",
        "Visitors",
        "Impressions",
        "Engagements (likes, shares, comments).",
        "Mentions",
        "Clicks",
        "Branded hashtags.",
        "Important industry buzzwords.",
        "Relevant conversations about the state of your industry."

    ], 
    },
    {
        title: "Social Media Ad Management",
        description: "LinkedIn is another social media platform that offers paid ad campaigns to help businesses expand their reach to new audiences. Our digital marketing agency can take the reins on these paid campaigns to help boost brand awareness – especially for newer or recently optimized business pages – and ultimately boost engagement. We can do all of the following:",
        color: "#000000",
        url: "#",
        src: "images/Social-Media-Ad-Management.webp",
        points: [
            "Create text ads.",
            "Produce video ads.",
            "Set up dynamic ads.",
            "Launch message ad campaigns.",
            "Manage sponsored content campaigns.",
            "Help you allocate your spending across different social media channels (e.g. Facebook ads.)",
    
        ], 
        },
        {
            title: "Social Media Contest Creation and Management",
            description: "A primary reason for using social media is to build relationships with fellow users. After all, it’s called social media for a reason: You’re expected to find new and interesting ways to interact with your audience. One exciting way to achieve that? Holding a contest!\n\nWe’re experts at making these contests fun, engaging and interactive for both participants and viewers alike. It doesn’t matter what type of contest you’re looking to run — we have the skill set to make it happen!\n\nAlgorithmX’s experienced social media strategists can ideate, strategize, launch, manage and measure unique social media contests, surveys and other user-generated campaigns through your brand’s LinkedIn account.",
            color: "#000000",
            url: "#",
            src: "images/Social-Media-Contest-Creation-and-Management.webp",
            points: [
            ], 
        },
        {
                title: "Content Creation",
                description: "It goes without saying that you’ll need well-researched, highly informative thought leadership content to engage professional users on LinkedIn. Without this type of content, your brand will struggle to build rapport with decision-makers and establish authority in your industry.\n\nWe can also create custom reports for individual social initiatives such as contests and user-generated content campaigns.\n\nPerhaps no other platform is as well suited for long-form content than LinkedIn, where readers are professional, well-informed audience members who appreciate in-depth insights. Especially in B2B topics, longer articles that come in around 2,000 words perform much better on LinkedIn than shorter blog posts do.\n\nAs a full-service digital marketing agency, we have in-house, industry-steeped writers, designers, videographers and editors who can create compelling copy that lives on your website and is distributed through the world’s largest professional network.\n\nAll the content we create is tailored to your target audience, optimized to perform well on search engines and expertly crafted to turn leads into prospects, and prospects into paying customers.",
                color: "#000000",
                url: "#",
                src: "images/Custom-Reporting.webp",
                points: [
            
                ], 
        },
];

return (
    <div className="min-h-screen bg-black relative " ref={containerRef} >
    <h1 className={`text-[56px]  md:leading-[40px] md:leading-[50px] text-white md:tracking-[0.06em] ${monsterfont.className} text-center py- z-10 `}>
    OPTIMIZE YOUR LINKEDIN <br/>
    MARKETING EFFORTS
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
        className="relative w-full max-w-[1100px] h-[700px] md:h-[550px] rounded-[20px] p-4 md:p-8 flex flex-col border-[1px] border-[#fd6470] overflow-y-auto md:overflow-visible"
    >
        <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
        <div className="flex-1 flex flex-col">
        <h2 className={`text-[36px] leading-[1.1] mb-4 text-left text-white  font-helveticaneue font-[400] `}>{title}</h2>
        <p className="text-[15px] font-helveticaneue leading-[20px] text-semi-white whitespace-pre-wrap">{description}</p>

        <ul className="list-disc pl-4 text-[15px] font-[Helvetica] leading-[24px] text-semi-white ">
              {points.map((point, index) => (
                <li key={index} className="mb-0">{point}</li>
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

export default LinkedinSmoothScrollStack;