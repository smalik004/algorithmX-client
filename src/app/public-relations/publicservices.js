    import React from 'react';
    import styles from "../shopify/style.module.css";
    import { Montserrat } from 'next/font/google';

    const monsterfont = Montserrat({
    subsets: ['latin'],
    weight: '400',
    fallback: ["sans-serif"],
    });
    const monsterfont1 = Montserrat({
    subsets: ['latin'],
    weight: '300',
    });
    const monsterfont2 = Montserrat({
    subsets: ['latin'],
    weight: '100',
    });


    const PublicServices = () => {
    const services = [
        {
        iconSrc: "images/Media-Outreach-and-Relations.png",
        title: "Media Outreach and Relations",
        description: "Our digital PR experts combine targeted media outreach and strategic media relations to strengthen your brand reputation and enhance brand recognition within your industry with our digital PR services.",
        borderColor: "border-red-500",
        glowColor: styles.shadowred,
        },
        {
        iconSrc: "images/Media-Blogger-and-Influencer-Outreach.png",
        title: "Media, Blogger, and Influencer Outreach",
        description: "The most essential part for your brand's PR success is finding the perfect blog or influencer partner. At AlgorithmX, we offer professional PR services as we are fluent in different languages which helps us engage a variety of media and influencers to effectively connect with the audiences.",
        borderColor: "border-yellow-500",
        glowColor: styles.shadowyellow,
        },
        {
        iconSrc: "images/Community-Outreach.png",
        title: "Community Outreach",
        description: "Our exceptional team oversees all the community building initiatives coordinating the strategizing, development and implementation of projects aimed at enhancing your brand while positively impacting the community with our public relations services in USA.",
        borderColor: "border-blue-500",
        glowColor: styles.shadowblue,
        },
        {
        iconSrc: "images/Copywriting.png",
        title: "Copywriting",
        description: "AlgorithmX’s group of skilled writers create engaging content that aligns with your brand style, tone and voice, effectively reaching your audience. We also provide support in creating messages for content marketing strategies and linkable assets aimed at boosting brand awareness.",
        borderColor: "border-green-500",
        glowColor: styles.shadowgreen,
        },
        {
            iconSrc: "images/Translation-and-Regional-Marketing.png",
            title: "Translation and Regional Marketing",
            description: "With our public relations marketing services, we share information in the language spoken by your customer improves the reception and establishes trust, showcasing respect and knowledge of their culture thereby creating a competitive advantage through deeper relationships and precise communication.",
            borderColor: "border-orange-500",
            glowColor: styles.shadowlightgreen,
        },
        {
            iconSrc: "images/Media-Pitching-and-Content-Pitching.png",
            title: "Media Pitching and Content Pitching",
            description: "Although passive PR is crucial but actively looking for chances to highlight your brand is even more important. We provide public relations and communications services where our team interacts with different platforms to promote your brand efficiently and establish strong connections.",
            borderColor: "border-white-500",
            glowColor: styles.shadoworange,
        },
    
    ];

    return (
        <div className="min-h-screen bg-black p-4 sm:p-8">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
            <h2 className={`text-[64px] leading-[68px]  ${monsterfont.className} text-white mb-2`}>Digital PR Services</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => (
                <div
                key={index}
                className={`flex flex-col sm:flex-row items-start gap-4 ${styles["pad"]}
                            border ${service.borderColor} rounded-2xl bg-black
                            shadow-lg ${service.glowColor}
                            transition-all duration-300`}
                >
                <div className="flex-shrink-0">
                    <img 
                    src={service.iconSrc}
                    alt={service.title}
                    className="w-12 h-12 object-contain"
                    />
                </div>
                <div className="flex-1">
                    <h3 className={`${styles["development-title"]} font-helveticaneue text-white  mb-3`}>
                    {service.title}
                    </h3>
                    <p className={`${styles["development-description"]} font-helveticaneue  text-semi-white`}>
                    {service.description}
                    </p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
    };

    export default PublicServices;