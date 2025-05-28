    'use client'
    import React, { useRef } from "react";
    import { motion, useScroll, useTransform } from "framer-motion";
    import { Montserrat } from "next/font/google";

    const monsterfont = Montserrat({
    subsets: ["latin"],
    weight: "100",
    });
    const monsterfont1 = Montserrat({
    subsets: ["latin"],
    weight: "500",
    });

    const YoutubeSmoothScrollStack = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const cards = 
        [
            {
                title: "VIDEO CREATION",
                description:
                    "Our full-service creative team manages everything from concept to completion, ensuring each video is crafted to meet your specific goals and audience. We specialize in a variety of video types:<br><br>" +
                    "<span class='font-extrabold'>Social Engagement Videos:</span> Designed to increase brand awareness and foster audience interaction, perfect for sharing across platforms.<br><br>" +
                    "<span class='font-extrabold'>How-to Guides and Tutorials:</span> Step-by-step guides that educate and engage viewers, positioning your brand as an industry expert.<br><br>" +
                    "<span class='font-extrabold'>Corporate Promos and Video Ads:</span> Professionally produced promotional videos that showcase your brand’s strengths and connect with target audiences.<br><br>" +
                    "<span class='font-extrabold'>Video Testimonials and Product Demos:</span> Build trust with potential customers by showcasing real testimonials and demonstrating your product's features in action.",
                color: "#000000",
                url: "#",
                src: "images/VIDEO-CREATION.webp",
                points: [],
            },
            {
                title: "VIDEO SEO",
                description:
                    "We optimize your video content to enhance visibility on YouTube and search engines. Our Video SEO strategies include:<br><br>" +
                    "<span class='font-extrabold'>Keyword Optimization: </span> We research and strategically place high-ranking keywords in titles, descriptions, and tags to improve search visibility.<br><br>" +
                    "<span class='font-extrabold'>High-ranking Playlists:</span> By organizing your content into playlists, we increase engagement and time spent on your channel, which positively impacts search rankings.<br><br>" +
                    "<span class='font-extrabold'>Cross-Platform Promotion: </span> We promote your videos across various social media channels and websites to increase reach and drive more views.",
                color: "#000000",
                url: "#",
                src: "images/VIDEO-SEO.webp",
                points: [],
            },
            {
                title: "VIDEO DESCRIPTION COPYWRITING",
                description:
                    "Our copywriters craft compelling descriptions to make your videos more discoverable and engaging. We focus on:<br><br>" +
                    "<span class='font-extrabold'>Keyword-Rich Descriptions: </span> Writing descriptions that include relevant keywords to rank higher in YouTube and Google searches.<br><br>" +
                    "<span class='font-extrabold'>Engaging and Informative Copy:</span> Creating descriptions that not only improve searchability but also encourage viewers to watch the video and explore more of your content.<br><br>" +
                    "<span class='font-extrabold'>Strategic Link Placement: </span> Adding links to related content, website pages, or social media to drive traffic and boost engagement.",
                color: "#000000",
                url: "#",
                src: "images/VIDEO-DESCRIPTION-COPYWRITING.webp",
                points: [],
            },
            {
                title: "Video Syndication and Distribution",
                description:
                    "Amplify your video’s reach through strategic distribution across digital platforms. Our services include:<br><br>" +
                    "<span class='font-extrabold'>Social Media Sharing: </span> We distribute your video content across relevant social media platforms, maximizing exposure.<br><br>" +
                    "<span class='font-extrabold'>Email Newsletters: </span> Integrating videos into email marketing campaigns to increase engagement rates.<br><br>" +
                    "<span class='font-extrabold'>Community and Forum Posting: </span> Sharing content in relevant online communities to attract interested viewers.<br><br>" +
                    "<span class='font-extrabold'>PPC Video Campaigns: </span> Managing pay-per-click (PPC) video ads on networks like Google Display, Facebook, and LinkedIn to reach specific target audiences and drive engagement.",
                color: "#000000",
                url: "#",
                src: "images/Video-Syndication-and-Distribution.webp",
                points: [],
            },
        
                {
                    title: "YOUTUBE ADS",
                    description:
                        "<span class='text-[21.6px] font-helveticaneue text-[#d93] font-[400] '>Boost Reach with Targeted Video Advertising</span><br>" +
                        "We handle all aspects of your YouTube advertising campaigns, from ad creation to targeting. Our services include:<br><br>" +
                        "<span class='text-white font-medium'>Scriptwriting, video production, and editing</span><br>" +
                        "<span class='text-white font-medium'>Managing YouTube ad campaigns through audience targeting, cost-per-view bidding, and performance tracking</span><br><br>",
                    color: "#000000",
                    url: "#",
                    src: "images/YOUTUBE-ADS.webp",
                    points: [],
                },
                
    ];

    return (
        <div className="min-h-screen bg-black relative" ref={containerRef}>
        <h1
            className={`text-[56px] md:leading-[40px] text-white md:leading-[50px] md:tracking-[0.06em] ${monsterfont.className} text-center py- z-10`}
        >
            OUR SOLUTIONS
        </h1>
        <div className="flex items-center justify-center mt-10">
            <div className="h-0.5 w-12 bg-blue-500"></div>
        </div>

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

    const Card = ({ i, title, description, src, color, points, progress, range, targetScale }) => {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={cardRef} className="h-screen sticky top-0 flex items-center justify-center px-4 md:px-8">
        <motion.div
            style={{ backgroundColor: color }}
            className="relative w-full max-w-[1200px] h-[700px] md:h-[500px] rounded-xl p-4 md:p-8 flex flex-col border-2 border-pink-500 overflow-y-auto md:overflow-visible"
        >
            <div className="flex flex-col md:flex-row flex-1 gap-4 md:gap-8">
            <div className="flex-1 flex flex-col">
                <h2 className={`text-[36px] leading-[1.1] mb-4 text-left text-white font-helveticaneue font-[400]`}>
                {title}
                </h2>
                <p
  className="text-[15px] font-helveticaneue leading-[20px] text-semi-white whitespace-pre-wrap"
  dangerouslySetInnerHTML={{ __html: description }}
/>

            </div>

            <div className="relative flex-1 min-h-[200px] md:min-h-0">
                <div className="relative w-full h-full">
                <motion.img src={src} alt={title} className="object-cover w-full h-full rounded-lg" />
                </div>
            </div>
            </div>
        </motion.div>
        </div>
    );
    };

    export default YoutubeSmoothScrollStack;
