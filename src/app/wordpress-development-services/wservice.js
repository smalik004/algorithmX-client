import React from "react";
import Image from "next/image";
import styles from "../shopify-development-services/style.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});

const SEOTitleWithLink = () => (
  <Link href="/seo" className=" hover:text-blue-400">
    Search Engine Optimization (SEO)
  </Link>
);

const MigrationDescriptionWithLink = () => (
  <>
    Our WordPress development company ensures a smooth transition to the latest
    version. As part of our WordPress{" "}
    <Link href="/cms" className="text-blue-400 hover:text-blue-400">
      CMS
    </Link>{" "}
    development services, we specialize in transferring data, reducing downtime
    and ensuring compatibility.
  </>
);

const WordPressServices = () => {
  const services = [
    {
      iconSrc: "/images/shopify-development-services-icon1.png",
      title: "Custom Theme Development",
      description:
        "Our WordPress development company designs appealing themes unique to your brand's style and needs. Our best WordPress developers make layouts, graphics, and user interfaces, ensuring they work proficiently on all devices.",
      borderColor: "border-red-500",
      glowColor: styles.shadowred,
    },
    {
      iconSrc: "/images/shopify-development-services-icon2.png",
      title: "Plugin Development",
      description:
        "AlgorithmX's WordPress plugin development services involve crafting custom plugins to improve WordPress's capabilities including simple features like contact forms and super complex ones like management systems and ecommerce solutions.",
      borderColor: "border-yellow-500",
      glowColor: styles.shadowyellow,
    },
    {
      iconSrc: "/images/shopify-development-services-icon3.png",
      title: "Website Customization",
      description:
        "We are a leading WordPress website development company offering custom WordPress development services to adjust plugins and themes based on your business requirements, such as refining design components, improving performance and introducing additional functionalities.",
      borderColor: "border-white-500",
      glowColor: styles.shadowblue,
    },
    {
      iconSrc: "/images/shopify-development-services-icon4.png",
      title: "E-commerce Solutions",
      description:
        "AlgorithmX excels at providing customized WordPress web solutions and developing ecommerce websites leveraging platforms such as WordPress, where we set up product listings, order management systems, and payment gateways, creating a memorable shopping experience for customers.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowgreen,
    },
    {
      iconSrc: "/images/shopify-development-services-icon5.png",
      title: "WordPress Maintenance and Support",
      description:
        "Being one of the top WordPress development companies, we constantly maintain WordPress sites to ensure their high performance, security, and optimization. Our support services include resolving glitches, monitoring security threats and keeping regular backups.",
      borderColor: "border-green-500",
      glowColor: styles.shadowpink,
    },
    {
      iconSrc: "/images/SEO.png",
      title: <SEOTitleWithLink />,
      description:
        "Our WordPress development company offers comprehensive SEO services to improve your website's visibility in search engines, including keyword research, on-page optimization, and content strategy.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowblue,
    },
    {
      iconSrc: "/images/Migration.png",
      title: "Migration",
      description: <MigrationDescriptionWithLink />,
      borderColor: "border-green-500",
      glowColor: styles.shadowgreen,
    },
    {
      iconSrc: "/images/shopify-development-services-icon8.png",
      title: "Custom Development Solutions",
      description:
        "AlgorithmX's expert enterprise WordPress development services offer personalized development to cater to every client's needs which involves creating intricate web applications using WordPress, integrating third-party systems and constructing personalized functionalities.",
      borderColor: "border-blue-500",
      glowColor: styles.shadowwhite,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`text-[40px] leading-[44px] md:text-[56px] md:leading-[60px] tracking-[0.06em] text-white ${monsterfont2.className} mb-2`}
          >
            WORDPRESS DEVELOPMENT
          </h2>
          <h2
            className={`${styles["development-text"]} ${monsterfont.className} mb-2`}
          >
            SERVICES
          </h2>
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
                <Image
                  width={48}
                  height={48}
                  src={service.iconSrc}
                  alt={service.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div className="flex-1">
                <h3
                  className={`${styles["development-title"]} font-helveticaneue text-white  mb-3`}
                >
                  {service.title}
                </h3>
                <p
                  className={`${styles["development-description"]} font-helveticaneue text-semi-white`}
                >
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

export default WordPressServices;
