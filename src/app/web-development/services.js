"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "../app-development/style.module.css";
import style from "../android-app/style.module.css";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "500",
  fallback: ["sans-serif"],
});

// Adding the bold font for MULTIFACETED text
const monsterfont700 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "800",
  fallback: ["sans-serif"],
});

const WebAppServices = () => {
  const [isInView, setIsInView] = useState(false);
  const multifacetedRef = useRef(null);

  const services = [
    {
      title: "Custom Web application development",
      description:
        "With a large number of people spending a tremendous amount of their time online, it becomes crucial for any business to focus on creating a high-quality website. Our web development company offers custom web development services where our team designs especially tailored web applications and websites personalized to suit your specific business needs.",
      borderColor: styles.border1,
    },
    {
      title: (
        <Link href="/cms" className="hover:text-blue-400">
          Headless CMS development
        </Link>
      ),
      description:
        "A headless CMS lets you handle content on various platforms using a single interface. Offering higher security than conventional alternatives, it protects your data from unauthorized users and allow you to hide direct external access. Our progressive web ",
      description2: (
        <Link
          href="/app-development"
          className=" text-blue-300 hover:text-blue-400"
        >
          App Development Company
        </Link>
      ),
      description3:
        " specializes in developing applications with headless CMS support.",
      borderColor: styles.border1,
    },
    {
      title: "UI/UX web design",
      description:
        "Our team of expert web developers in California uses the latest tools and design techniques to combine visuals with user-friendly interfaces to create memorable user experiences, focusing on easy navigation and clear communication while giving special attention to elements such as animations and fonts.",
      borderColor: styles.border2,
    },
    {
      title: "MVP Development",
      description:
        "AlgorithmX holds expertise in developing a Minimal Viable Product (MVP) that adds value to your business and simplifies operations, giving real insights for your future planning. We use MVP to collect initial feedback on your idea from your target audience through our offshore web development services.",
      borderColor: styles.border3,
    },
    {
      title: "PWA development",
      description:
        "We offer affordable web development services which include building Progressive Web Apps (PWAs) that are inexpensive and deliver an enhanced user experience across different platforms. PWAs enable companies to provide a mobile experience similar to native applications without having to create separate mobile applications.",
      borderColor: styles.border4,
    },
    {
      title: "Support & maintenance",
      description:
        "AlgorithmX is one of the top companies that outsource web development in USA, offering constant support and maintenance assistance even after your website has been built and launched. We ensure your user's satisfaction whenever they visit your website or platform by keeping it running smoothly.",
      borderColor: styles.border5,
    },
  ];

  // Refs for animation
  const boxRefs = useRef([]);

  // Set up intersection observer for animation for service boxes
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add animation classes when box comes into view
          entry.target.classList.remove("translate-y-20", "opacity-0");
          entry.target.classList.add("translate-y-0", "opacity-100");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    boxRefs.current.forEach((box) => {
      if (box) {
        observer.observe(box);
      }
    });

    return () => {
      boxRefs.current.forEach((box) => {
        if (box) {
          observer.unobserve(box);
        }
      });
    };
  }, []);

  // Set up intersection observer for MULTIFACETED text
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (multifacetedRef.current) {
      observer.observe(multifacetedRef.current);
    }

    return () => {
      if (multifacetedRef.current) {
        observer.unobserve(multifacetedRef.current);
      }
    };
  }, [isInView]);

  return (
    <div className="bg-black text-white min-h-screen p-8 overflow-hidden">
      <div className="container max-w-[1200px] mx-auto">
        <div className="text-center mb-10 md:mb-16 pt-4 md:pt-8 relative">
          {/* Background "MULTIFACETED" text with zoom-in effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              ref={multifacetedRef}
              className={`${style["multi-title"]} ${
                monsterfont700.className
              } text-gray-600/20 select-none transform transition-transform duration-700 ${
                isInView ? "scale-110 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              WEBCRAFT
            </span>
          </div>
          {/* Main titles with relative positioning to appear above the background text */}
          <div className="relative z-10 mt-[50px]">
            <h2
              className={` ${style["multi-subtitle"]} ${monsterfont1.className} text-white`}
            >
              WEB DEVELOPMENT
            </h2>
            <h2
              className={` ${style["multi-subtitle"]} ${monsterfont1.className} text-white`}
            >
              SERVICES
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)}
              className={`relative ${service.borderColor}  p-6 md:p-[30px] rounded bg-black translate-y-20 opacity-0 transition-all duration-700 ease-out`}
            >
              <div className="absolute top-4 right-4 md:top-8 md:right-8 w-20 h-20 md:w-32 md:h-32 overflow-hidden">
                <div
                  className="w-full h-[70%] flex items-center justify-center opacity-50"
                  style={{
                    backgroundImage: "url('/images/faq_15_icon.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                  }}
                />
              </div>
              <div className="flex items-start gap-4 mb-4">
                <div className="">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className={`w-full h-full object-contain ${style["border-design"]}`}
                  />
                </div>
                <div className="flex-1">
                  <h3
                    className={`text-[16px] leading-[1.4] mb-[10px] ${monsterfont.className} text-center`}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[16px] leading-[1.4] text-[#83779e] text-helveticaneue text-center">
                    {service.description}
                    {service.description2}
                    {service.description3}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebAppServices;
