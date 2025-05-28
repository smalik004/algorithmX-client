import React from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "300",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});



const Vision = () => {
  return (
    <div>
      {/* Section 1 */}
      <section className="flex items-center justify-center bg-black  py-8">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl w-full gap-4">
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <img
              src="images/vision.webp"
              alt="Core Value 3"
              className="w-full h-auto md:max-w-xl  object-cover rounded-lg shadow-lg md:p-4 md:ml-[135px] md:ml-0 "
            />
          </div>
          <div className="flex-1 text-white px-4 order-1 md:order-2">
            <h3 className={`font-size-30 md:font-size-36 algo-line-height-1 font-helveticaneue font-[400] md:text-start text-center mb-4`}>
            Our Vision and Mission
            </h3>
            <p className={`font-helveticaneue font-[300] text-semii-white  md:text-start text-center`}>
            AlgorithmX aims to lead the way in transformation, empowering businesses to reach heights with creative digital solutions. Our goal is to provide top-notch services that boost growth, increase brand recognition, and bring lasting value to our clients. We work hard to keep up with industry trends, using cutting-edge technologies and data-driven tactics to help our clients thrive in the ever-evolving digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex items-center justify-center bg-black min-h-screen py-8 ">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl  w-full gap-4">
          <div className="flex-1 text-white px-4 order-1">
            <h2 className={`font-size-36 algo-line-height-1 font-helveticaneue font-[400] mb-4  md:text-start text-center`}>
              Our Core Values
            </h2>
            <p className={`font-helveticaneue font-[300] text-semii-white  md:text-start text-center`}>
              We truly uphold our core values of authenticity, transparency, creativity, and a client-centric, results-oriented approach. We exclusively collaborate with brands and individuals we resonate with and believe in dedicating our passion and expertise to your triumph. Our company promotes a culture centered on teamwork and continuous development, constantly aiming to achieve dream outcomes for our clientele.
            </p>
          </div>
          <div className="flex-1 flex justify-center order-2">
            <img
              src="images/core.webp"
              alt="Core Value 2"
              className="w-full h-auto md:max-w-xl object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex items-center justify-center bg-black min-h-screen py-8">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl  w-full gap-4">
          <div className="flex-1 flex justify-center order-2 md:order-1">
            <img
              src="images/Why.webp"
              alt="Core Value 3"
              className="w-full h-auto md:max-w-xl  object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 text-white px-4 order-1 md:order-2">
            <h2 className={`font-size-36 algo-line-height-1 font-helveticaneue font-[400] mb-4  md:text-start text-center`}>
              Why Choose Us?
            </h2>
            <p className={`font-helveticaneue font-[300] text-semii-white  md:text-start text-center`}>
              When you choose AlgorithmX, you're teaming up with a group that is truly committed to your success. Our vast range of services covers everything a brand needs to build from scratch to hatch. We take pride in our diligent approach by maintaining communication and providing honest feedback throughout every project stage. With our technology-focused strategies and a strong emphasis on delivering outcomes, we are an ally for businesses aiming to enhance their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex items-center justify-center bg-black min-h-screen py-8 ">
        <div className="flex flex-col md:flex-row items-center justify-center max-w-6xl  w-full gap-4">
          <div className="flex-1 text-white px-4 order-1">
            <h2 className={`font-size-36 algo-line-height-1 font-helveticaneue font-[400] mb-4  md:text-start text-center`}>
              Our Team
            </h2>
            <p className={`font-helveticaneue font-[300] text-semii-white  md:text-start text-center`}>
              Our amazing team comprises a group of professionals, each bringing a wealth of experience and expertise to every project. Our team includes app and website developers, brand strategists, designers, SEO experts, PPC advertisers, content strategists, writers, and social media specialists. By integrating their efforts, our crew strives to achieve results that drive business growth.
            </p>
          </div>
          <div className="flex-1 flex justify-center order-2">
            <img
              src="images/team.webp"
              alt="Core Value 4"
              className="w-full h-auto md:max-w-xl  object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;