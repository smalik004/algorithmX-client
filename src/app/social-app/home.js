import React from "react";
import Image from "next/image";
import styles from "../video-services/styles.module.css";
import { Montserrat } from "next/font/google";

const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "200",
});
const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "400",
});

const SocialMediaSection = () => {
  return (
    <div className="min-h-screen bg-black pt-[60px]">
      <div className="  md:max-w-[1200px] mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-0">
          {/* Left side - Image */}
          <div className="w-full md:w-1/2 ">
            <div className="relative md:ml-16">
              {/* Main Image */}
              <Image
                width={290}
                height={400}
                src="/images/Social-Media.webp"
                alt="Branding process with color swatches"
                className={` w-[290px] h-auto md:h-[400px] shadow-lg mx-auto ${styles["custom-rounded-tr"]}`}
              />
              {/* Rectangular Image */}
              <Image
                width={290}
                height={400}
                src="/images/a3.png"
                alt="Rectangular Branding Image"
                className="w-[290px] h-auto shadow-lg mx-auto mt-1"
              />
              {/* Explore Section - Centered */}
              <div className="flex justify-center items-center mt-4 md:absolute md:bottom-[180px] md:left-[-100]">
                <div className="w-8 h-8 border border-white/60 rounded-full flex items-center justify-center mr-2">
                  <svg
                    className="w-4 h-4 text-white/60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
                <a
                  href="#explore"
                  className={`text-white font-size-20 letter-spacing-8 ${monsterfont.className} tracking-widest text-lg hover:text-white transition`}
                >
                  EXPLORE
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Graphics and description */}
          <div className="w-full md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left">
            {/* Cylindrical image above branding (hidden on phones) */}
            <Image
              width={80}
              height={70}
              src="/images/g1.png"
              alt="Cylindrical Branding Icon"
              className="w-12 h-12 md:w-20 md:h-20 object-cover rounded-full shadow-lg hidden md:block"
            />
            <h1
              className={`text-4xl sm:4xl md:text-8xl ${monsterfont.className} text-white  bg-clip-text text-transparent font-light`}
            >
              SOCIAL
            </h1>
            <h1
              className={`text-4xl sm:4xl md:text-8xl ${monsterfont1.className} bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-clip-text text-transparent font-light`}
            >
              MEDIA
            </h1>
          </div>
        </div>
        {/* Description below */}
        <div className="mt-8 md:mt-12">
          <p
            className={`text-semi-white ${styles["description-text"]} ${monsterfont1.className} mx-auto  text-center`}
          >
            AlgorithmX offers top-notch social media marketing services where we
            create captivating content, formulate strong marketing campaigns,
            and manage your social media handles to reflect your brand’s voice
            and increase visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaSection;
