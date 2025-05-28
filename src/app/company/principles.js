'use client';
import React, { useEffect, useState } from 'react';
import { Montserrat } from 'next/font/google';

const monsterfont = Montserrat({
  subsets: ["latin"],
  weight: "200",
  fallback: ["sans-serif"],
});
const monsterfont1 = Montserrat({
  subsets: ["latin"],
  weight: "400",
  fallback: ["sans-serif"],
});

const GuidingPrinciples = () => {
  const principles = [
    {
      id: 1,
      title: "Leading with Originality",
      number: "01",
      description: "We lead with originality, forging our own path instead of following the crowd.",
      icon: "images/Leading.png", // Replace SVG with image source
    },
    {
      id: 2,
      title: "Intentional Design",
      number: "02",
      description: "We design with purpose and intention, not merely to follow trends.",
      icon: "images/Intentional-design.png", // Replace SVG with image source
    },
    {
      id: 3,
      title: "Embracing Uniqueness",
      number: "03",
      description: "We aim to make every design unique, standing out in a sea of sameness.",
      icon: "images/Embracing-Uniqueness.png", // Replace SVG with image source
    },
    {
      id: 4,
      title: "Intelligent Aesthetics",
      number: "04",
      description: "Design isn't just about appearance, it's about seamless functionality.",
      icon: "images/Intelligent-Aesthetics.png", // Replace SVG with image source
    },
    {
      id: 5,
      title: "Passion Drives Us",
      number: "05",
      description: "Our motivation stems from our passion for design, not solely financial gain.",
      icon: "images/Passion-Drives-Us.png", // Replace SVG with image source
    },
    {
      id: 6,
      title: "Prioritizing Understanding",
      number: "06",
      description: "We invest time in comprehending our clients' needs and visions.",
      icon: "images/Prioritizing-Understanding.png", // Replace SVG with image source
    },
  ];

  const [visiblePrinciples, setVisiblePrinciples] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisiblePrinciples((prev) => [...prev, entry.target.id]);
            observer.unobserve(entry.target); // Stop observing once it's in view
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    const principleElements = document.querySelectorAll('.principle-box');
    principleElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className={`font-size-64 text-white ${monsterfont.className} text-center mb-16`}>
        Our Guiding Principles
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {principles.map((principle, index) => {
          const column = index % 3; // Determine the column (0, 1, or 2)
          const isVisible = visiblePrinciples.includes(`principle-${principle.id}`);

          return (
            <div
              key={principle.id}
              id={`principle-${principle.id}`}
              className={`principle-box relative bg-[rgba(255,255,255,0.06)] p-8 rounded-lg transform transition-all duration-700 hover:bg-[rgba(85, 81, 81, 0.06)] hover:shadow-[0_0_50px_25px_rgba(255,255,255,0.2)] backdrop-blur-md ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
              }`}
              style={{
                transitionDelay: `${column * 200}ms`, // Delay animation based on column index
                opacity: isVisible ? 1 : 0,
              }}
            >
              <div className="flex flex-col h-full">
                <div className={`flex items-start ${monsterfont1.className} mb-2 text-white`}>
                  {principle.title}
                  <p className={`text-semi-white ${monsterfont1.className} text-lg ml-2 mb-2`}>
                    {principle.number}
                  </p>
                </div>

                <div className="mb-4">
                  <img
                    src={principle.icon}
                    alt={principle.title}
                    className="w-12 h-12 object-cover mt-2 mb-4"
                  />
                </div>

                <p className={`text-semi-white text-sm font-helvetica leading-relaxed`}>
                  {principle.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GuidingPrinciples;
