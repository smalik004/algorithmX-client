import React from 'react';
import styles from "../graphics/styles.module.css";


const ResponsiveHero = () => {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center p-4 md:p-8 pt-20 md:mt-0">
        {/* Outer container with specific width and height */}
        <div className={`w-full max-w-[800px] ${styles["responsive-hero"]} md:w-full  rounded-3xl border border-red-500 relative flex flex-col md:flex-row`}>
          
          {/* Left Section: Image Container (1/5 width) */}
          <div className="w-1/5 relative">
            {/* Image container */}
            <div className="absolute w-64 h-64 md:w-72 md:h-72 overflow-hidden border
                          left-[70%]  -top-32
                          md:left-[-40%] md:top-1/2 md:translate-x-0
                          z-10
                          transform md:translate-y-[-50%] ">
              <img
                src="images/Experience-AlgorithmX-Today-2.webp"
                alt="placeholder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Section: 4/5 width */}
          <div className="md:w-4/5 flex">
            {/* Small section: 1/5 */}
            <div className="md:w-1/5">

            </div>

            {/* Main content area: 4/5 width */}
            <div className="md:w-4/5 flex flex-col items-center md:items-start  mt-40 md:mt-20  text-center md:text-left">
              <h2 className={`${styles["hero-img-title"]} font-helveticaneue text-white `}>
                Experience AlgorithmX Today
              </h2>
              <p className={`text-semi-white ${styles["hero-img-description "]} font-helveticaneue mb-[20px] md:max-w-md`}>
                We're your full-stack solution for everything digital. Bring us your idea and we'll make it a success.
              </p>
              <div className="fancy px-12 py-4 mb-4">
              <a href="contact-us" className="text-center font-helveticaneue">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveHero;
