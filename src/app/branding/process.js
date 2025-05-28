import Image from 'next/image';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

export default function BrandingProcess() {
  return (
    <div className="bg-black min-h-screen p-6">
      <h1 className={`text-center font-size-64 algo-line-height-68 ${monsterfont.className}  text-white `}>
        Our Branding Process
      </h1>
      <div className="max-w-6xl mx-auto pt-[60px]">

      {/* Section 1: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row md:items-center md:items-start mb-12">
        <div className="md:w-1/3">
          <Image 
            src="/images/exploration.webp" 
            alt="Process step image"
            width={600} 
            height={600} 
            className="rounded-[20px]"
          />
        </div>
        <div className="md:w-4/5 md:pl-8 mt-6 md:mt-0">
          <h2 className={`font-size-42 algo-line-height-26 ${monsterfont.className} text-white mb-4`}>
            Exploration
          </h2>
          <p className="text-semi-white">
            Let's explore the core of the issue: who are you really? What are your aspirations, and why should they be significant to others? Our brand development agency probes these inquiries through detailed investigation and analysis, offering a deep insight into your brand’s history, current state, and potential trajectory. Equipped with strategic brand development understanding, our brand developers actively tackle all the challenges.
          </p>
        </div>
      </div>

      {/* Section 2: Text Left, Image Right */}
      <div className="flex flex-col md:flex-row-reverse md:items-center md:items-start mb-12">
        <div className="md:w-1/3">
          <Image 
            src="/images/Design.webp" 
            alt="Process step image"
            width={300} 
            height={300} 
            className="rounded-[20px]"
          />
        </div>
        <div className="md:w-4/5 md:pr-8 mt-6 md:mt-0">
          <h2 className={`font-size-42 algo-line-height-26 ${monsterfont.className} text-white mb-4`}>
            Design
          </h2>
          <p className="text-semi-white">
            A brand goes way beyond a logo or catchphrase – it includes every interaction a customer has with your business. At AlgorithmX’s studio, we partner closely with you to breathe life into your brand and create meaningful experiences at every touchpoint. Our logo and brand design services are an effort based on communication, commitment, and zeal to challenge conventions.
          </p>
        </div>
      </div>

      {/* Section 3: Image Left, Text Right */}
      <div className="flex flex-col md:flex-row md:items-center md:items-start">
        <div className="md:w-1/3">
          <Image
            src="/images/Application.webp"
            alt="Process step image"
            width={300}
            height={300}
            className="rounded-[20px]"
          />
        </div>
        <div className="md:w-4/5 md:pl-8 mt-6 md:mt-0">
          <h2 className={`font-size-42 algo-line-height-26 ${monsterfont.className} text-white mb-4`}>
            Application
          </h2>
          <p className="text-semi-white">
            Although our team is small, it makes a significant impact. From inception to execution and beyond, our branding and marketing services with multifaceted technical competencies add great value to each project. With our commitment to quality in brand strategy and development, we offer unwavering support and are devoted to making your brand your image, strong, authentic, and assertive.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
}
