import React from "react";
import Image from "next/image";
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
      <Image
        width={339}
        height={236}
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

const IntegrationBenefits = () => {
  const benefits = [
    {
      imageSrc: "/images/Focus-on-What Matters.webp",
      title: "Custom-Fit Integrations",
      description:
        "We architect integration solutions around your specific workflows, systems, and data models, ensuring high-throughput connectivity, seamless interoperability, and performance aligned to business logic.",
    },
    {
      imageSrc: "/images/Search-Rankings.webp",
      title: "Industry-Proven Expertise",
      description:
        "With successful deployments across finance, logistics, healthcare, and manufacturing, we build scalable middleware and integration frameworks that deliver measurable outcomes and reduce operational overhead.",
    },
    {
      imageSrc: "/images/Maximize-Your-ROI.webp",
      title: "Future-Ready Architecture",
      description:
        "Our solutions leverage AI-enhanced middleware, modern integration protocols (REST, GraphQL, gRPC), and secure messaging patterns—future-proofed to adapt as your infrastructure evolves.",
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
              OUR INTEGRATION
            </h2>
            <h2
              className={`text-[40px] leading-[48px] ${monsterfont1.className}  text-white `}
            >
              MIDDLEWARE SERVICES
            </h2>
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

export default IntegrationBenefits;
