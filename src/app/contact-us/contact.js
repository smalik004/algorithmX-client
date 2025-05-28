import React from 'react';
import { Montserrat } from "next/font/google";

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "300",
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "700",
  fallback: ["sans-serif"],
});

const SupportSection = () => {
  return (
    <section className="bg-black text-white px-4 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <h1 className={`text-[36px] leading-[44px]  ${monsterfont1.className} mb-12`}>
          Our Support
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision Column */}
          <div className="space-y-4">
            <p className={`text-[15px] leading-[30px]  font-[Helvetica] font-[400] text-semi-white `}>
              Got a question or a project in mind? Let us help you bring your vision to life. We're committed to providing solutions tailored to your goals.
            </p>
          </div>

          {/* Features Column */}
          <div className="">
            <p className={`text-[15px] leading-[30px]  font-[Helvetica] font-[400] text-blue-400`}>
              Expert strategies designed for results.
            </p>
            <p className={`text-[15px] leading-[30px]  font-[Helvetica] font-[400] text-blue-400`}>
              Quick and thoughtful responses to your queries.
            </p>
            <p className={`text-[15px] leading-[30px]  font-[Helvetica] font-[400] text-blue-400`}>
              Dedicated support every step of the way.
            </p>
          </div>

          {/* CTA Column */}
          <div className="space-y-4">
            <p className={`text-[15px] leading-[30px]  font-[Helvetica] font-[400] text-semi-white`}>
              Ready to start? Fill out the form above, and let's make things happen!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;