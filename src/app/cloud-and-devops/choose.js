import React from "react";
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "100",
  fallback: ["sans-serif"],
});
const monsterfont2 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const BenefitsCard = ({ title, description, imageSrc }) => (
  <div className="bg-black/5 backdrop-blur-sm p-6 rounded-lg flex flex-col items-start text-start transition-transform">
    <div className="mb-4 bg-black/10 p-4 rounded-full">
      <img
        src={imageSrc}
        alt={title}
        className="w-[339px] h-[236px] object-cover rounded-md"
      />
    </div>
    <h3
      className={`text-[22px] leading-[1.1] ${monsterfont2.className} mt-[10px] mb-[10px]`}
    >
      {title}
    </h3>
    <p className={`text-[13px] leading-[2] font-helveticaneue text-semi-white`}>
      {description}
    </p>
  </div>
);

const CloudBenefits = () => {
  const benefits = [
    {
      imageSrc: "/images/Focus-on-What Matters.webp",
      title: "Cloud & DevOps Expertise​",
      description:
        "Proven track record delivering mission-critical systems on AWS, Azure, and GCP—built for scalability, resilience, and high performance.​",
    },
    {
      imageSrc: "/images/Search-Rankings.webp",
      title: "Certified Cloud Engineers",
      description:
        "Our team includes cloud-certified professionals and DevOps architects with hands-on experience managing complex migrations, CI/CD automation, and multi-cloud infrastructure.",
    },
    {
      imageSrc: "/images/Maximize-Your-ROI.webp",
      title: "Continuous Innovation​",
      description:
        "We provide ongoing platform audits, architecture reviews, and roadmap recommendations, ensuring your systems evolve ahead of tech debt, compliance risks, and vendor lock-in.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center ">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-4 relative pt-20 pb-8 w-full">
          {/* Background text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`text-[46px] md:text-[100px] leading-[1.1] ${monsterfont.className} text-gray-600/20 select-none`}
            >
              WHY CHOOSE
            </span>
          </div>

          {/* Main titles */}
          <div className="relative z-10 mt-8">
            <h2
              className={`text-[40px] leading-[48px] ${monsterfont2.className}  text-white `}
            >
              OUR CLOUD &
            </h2>
            <h3
              className={`text-[40px] leading-[48px] ${monsterfont1.className}  text-white `}
            >
              DEVOPS SERVICES
            </h3>
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${
                  index === 1 || index === 2
                    ? "md:border-l border-gray-700"
                    : ""
                }`}
              >
                <BenefitsCard
                  imageSrc={benefit.imageSrc}
                  title={benefit.title}
                  description={benefit.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudBenefits;
