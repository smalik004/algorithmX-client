import React from 'react';
import styles from '../shopify/style.module.css';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ['latin'],
  weight: '400',
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ['latin'],
  weight: '300',
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ['latin'],
  weight: '100',
  fallback: ["sans-serif"],
});

const BigcommerceServices = () => {
  const services = [
    {
      iconSrc: "images/shopify-development-services-icon1.png",
      title: "Custom BigCommerce development",
      description: "We offer BigCommerce store development services focused on creativity and functionality, resulting in personalized success of brands. By leveraging a customized approach, we create attractive designs and strong solutions that transform website visitors into regular customers.",
      borderColor: "border-red-500",
      glowColor: styles.shadowred,
    },
    {
      iconSrc: "images/shopify-development-services-icon2.png",
      title: "Headless BigCommerce development",
      description: "AlgorithmX is a leading BigCommerce development company in USA where we elevate your brand by incorporating high-quality vendors with crucial e-commerce features, thereby enabling sales across platforms like self-service kiosks, websites, mobile apps, and integrated commerce systems.",
      borderColor: "border-yellow-500",
      glowColor: styles.shadowyellow,
    },
    {
      iconSrc: "images/shopify-development-services-icon3.png",
        title: "BigCommerce UI/UX design",
        description: "Partner with our best BigCommerce website development agency to brighten up your online store using top-notch BigCommerce UI/UX designs that inspire and encourage customers to buy from you. Our expert BigCommerce developers create compelling interfaces that effortlessly lead customers, offering a memorable user journey on all devices.",
        borderColor: "border-white-500",
        glowColor: styles.shadowblue,
      },
    {
      iconSrc: "images/shopify-development-services-icon4.png",
      title: "Migration and Replatforming",
      description: "Being a top BigCommerce web development agency, our migration solutions focus on making the transition smooth and efficient while minimizing disruptions and maximizing improvements. Our team is expert in handling tasks such as data migration, product transfer, SEO preservation, and customization.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowgreen,
    },
    {
      iconSrc: "images/shopify-development-services-icon5.png",
      title: "Testing and Quality Assurance",
      description: "We perform thorough testing of BigCommerce websites as part of our BigCommerce development services to ensure the highest functionality and buyer satisfaction, establishing benchmarks through in-depth analysis of checkout processes and evaluation of payment gateways for a memorable user experience.",
      borderColor: "border-green-500",
      glowColor: styles.shadowpink,
    },
    {
      iconSrc: "images/shopify-development-services-icon6.png",
        title: "Performance Optimization",
        description: "Our excellent ecommerce solutions with BigCommerce development include fine-tuning every element to achieve peak efficiency and lightning-fast responsiveness, enhancing your digital platforms. We ensure swift and seamless interactions by conducting in-depth analysis and simplifying processes, resulting in optimized load times and database inquiries.",
        borderColor: "border-pink-500",
        glowColor: styles.shadowlightgreen,
      },
      {
        iconSrc: "images/shopify-development-services-icon7.png",
        title: "Ongoing Maintenance & Support",
        description: "As the top BigCommerce web development agency, we provide constant support to ensure the reliability, security, and outstanding performance of BigCommerce solutions with a main focus on consistent monitoring and frequent updates, thus enhancing user satisfaction.",
        borderColor: "border-orange-500",
        glowColor: styles.shadoworange,
      },
      {
        iconSrc: "images/shopify-development-services-icon8.png",
        title: "Mobile App Development",
        description: "With AlgorithmX’s dynamic mobile apps, your shopping encounters become more fascinating, transcending simple transactions. Our BigCommerce app development services guarantee swift interactions from browsing to checkout on any device.",
        borderColor: "border-blue-500",
        glowColor: styles.shadowwhite,
      },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className={`text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] tracking-[0.06em] text-white ${monsterfont2.className} mb-2`}>BIGCOMMERCE DEVELOPMENT</h1>
          <h2 className={`${styles["development-text"]} ${monsterfont.className} mb-2`}>SERVICES</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
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
                <h3 className={`${styles["development-title"]}  font-helveticaneue text-white mb-3`}>
                  {service.title}
                </h3>
                <p className={`${styles["development-description"]}  font-helveticaneue  text-semi-white`}>
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

export default BigcommerceServices;