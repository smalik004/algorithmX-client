    import React from 'react';
    import styles from "../graphics/styles.module.css";
    import { Montserrat } from "next/font/google";
    
    const monsterfont1 = Montserrat({
      subsets: ["latin"],
      weight: "300",
      fallback: ["sans-serif"],
    });
    
    const monsterfont = Montserrat({
      subsets: ["latin"],
      weight: "700",
      fallback: ["sans-serif"],
    });
    
    const LinkProcess = () => {
    const steps = [
        {
        number: 1,
        title: "Step 1: Discovery Call",
        description: "Start with a quick, 15-minute discovery call with your SEO consultant to discuss your search and backlink objectives."
        },
        {
        number: 2,
        title: "Step 2: In-Depth Website and Backlink Audit",
        description: "We dive into your website’s performance to analyze your backlink portfolio. This helps us uncover opportunities and areas for improvement."
        },
        {
        number: 3,
        title: "Step 3: Crafting Your Custom Strategy",
        description: "Our SEO strategists craft a personalized link-building strategy designed to meet your specific goals. Whether it’s increasing domain authority or driving targeted traffic, a custom strategy can help you maximize your KPIs."
        },
        {
        number: 4,
        title: "Step 4: Custom Proposal",
        description: "We present a custom proposal detailing our approach and the services we recommend to deliver the best results for your business."
        },
        {
        number: 5,
        title: "Step 5: Seamless Project Kickoff",
        description: "Once the contract is signed, you’ll be paired with a dedicated project manager, and together, we’ll have a kickoff call to outline the execution plan for your campaign."
        },
        {
        number: 6,
        title: "Step 6: High-Quality Content & Linkable Asset Creation",
        description: "Our SEO strategists will identify valuable, linkable content on your site—or collaborate with you to develop high-quality assets."
        },
        {
        number: 7,
        title: "Step 7: Targeting High-Authority Websites",
        description: "We’ll identify relevant, high-authority websites in your industry that will provide the most impactful backlinks."
        },
        {
        number: 8,
        title: "Step 8: Outreach and Link Acquisition",
        description: "Our team manually reaches out to target sites, securing backlinks from reputable sources that strengthen your website’s SEO."
        },
        {
        number: 9,
        title: "Step 9: Transparent & Ongoing Reporting",
        description: "You will receive monthly reports throughout the campaign. This will include the data tailored to what matters most to you—traffic, rankings, and new links acquired."
        },
        {
        number: 10,
        title: "Step 10: Continuous Improvements",
        description: "Every quarter, we review your campaign and fine-tune the strategy. This ensures you’re seeing continuous, measurable growth throughout the process."
        },

    ];

    return (
        <div className="min-h-screen h-full bg-black text-gray-300 p-8 ">
        <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h1 className={`${styles["main-text"]} ${monsterfont1.className} `}>Link Building</h1>
            <h2 className={`${styles["main-text"]} ${monsterfont.className}  text-white `}>Process</h2>
        </div>


            <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow-500"></div>

            {steps.map((step, index) => (
                <div key={index} className="relative pl-16 pb-16">
                {/* Timeline dot */}
                <div className="absolute left-0 w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                    <span className={`${monsterfont1.className} text-black`}>{step.number}</span>
                </div>
                
                {/* Content */}
                <div>
                <h3 className= {`${monsterfont.className} ${styles["sub-title"]}`}>{step.title}</h3>
                <p className={`${styles["sub-description"]} ${monsterfont1.className} text-semi-white`}>{step.description}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default LinkProcess;