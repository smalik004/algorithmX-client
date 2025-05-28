import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});


const FranchiseEnterprise = () => {
  const services = [
    {
      iconSrc: "images/Diverse-Clientele.png",
      title: "Diverse Clientele",
      description: "As a premier franchise digital marketing agency, AlgorithmX works in different niches with both individual and corporate franchise owners. Irrespective of your business’s size or type, we create adaptable, innovative franchise SEO strategies that are tailored to your marketing requirements and preferences.",
      borderColor: "border-red-500",
      glowColor: styles.shadowred,
    },
    {
      iconSrc: "images/Data-Management-System.png",
      title: "Data Management System",
      description: "Our dedicated franchise marketing consultants collaborate with company stakeholders on project management tools and shared drives, creating an ideal environment for agency-client collaboration.",
      borderColor: "border-yellow-500",
      glowColor: styles.shadowyellow,
    },
    {
      iconSrc: "images/Tailored-Franchise-SEO-Strategies.png",
      title: "Tailored Franchise SEO Strategies",
      description: "AlgorithmX is one of the best franchise marketing companies in USA, where we don’t believe in a universal SEO strategy; instead, we tailor each campaign to suit your individual specific requirements. You can count on our talented team to ensure constant communication with your project managers and a personalized journey every step of the way.",
      borderColor: "border-green-500",
      glowColor: styles.shadowgreen,
    },
    {
        iconSrc: "images/Deep-Knowledge-Base.png",
        title: "Deep Knowledge Base",
        description: "At AlgorithmX, our team is composed of digital marketing professionals with experience of more than ten years and extensive knowledge of dealing with various business challenges. are focused on many business issues. These experts specialize in customizing our enterprise SEO services to suit your unique style, and specific needs.",
        borderColor: "border-pink-500",
        glowColor: styles.shadowpink,
      },
      {
        iconSrc: "images/Diverse-Clientele.png.png",
        title: "Transparency",
        description: "Our franchise marketing agency keeps you in constant loop by sharing regular updates on how your campaigns are performing online. We ensure to keep you notified and well aware of all the modifications and their impact on your business prior to making any new adjustments to our SEO strategies.",
        borderColor: "border-orange-500",
        glowColor: styles.shadowlightgreen,
      },
      {
        iconSrc: "images/Client-Commitment.png",
        title: "Client Commitment",
        description: "As leaders in online marketing for franchises, we prioritize your success above all, demonstrating our dedication to delivering top-notch performance in each of your projects. Our team stays up-to-date with the latest developments in the industry and utilizes data-driven strategies for the unprecedented success of your campaign.",
        borderColor: "border-white-500",
        glowColor: styles.shadoworange,
      },
      {
        iconSrc: "images/Analytics-and-Reporting.png",
        title: "Analytics & Reporting",
        description: "At our franchise digital marketing agency, we meticulously analyze our campaigns to achieve real results in less time. Following the agreed terms, our SEO experts offer updates on a weekly or bi-weekly basis, sharing reports that cover your search rankings, page visits, organic and paid traffic, and the overall performance of your website.",
        borderColor: "border-blue-500",
        glowColor: styles.shadowblue,
      },
      {
        iconSrc: "images/Branding-Guidelines.png",
        title: "Branding Guidelines",
        description: "As part of digital franchise marketing, we establish meticulous corporate regulations and branding guidelines that cover your website content, graphics, and brand logo, highlighting your brand image, ensuring uniformity across all digital channels, and promoting customer trust and brand visibility. reminding that leads to customer trust.",
        borderColor: "border-blue-500",
        glowColor: styles.shadowwhite,
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-[40px]  text-white ${monsterfont2.className} mb-2`}>Enterprise SEO for Franchise-Level Clients</h2>
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
                <h3 className={`${styles["development-title"]} text-white font-helveticaneue  mb-3`}>
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

export default FranchiseEnterprise;