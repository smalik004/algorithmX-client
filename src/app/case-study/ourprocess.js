import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Conceptualization",
      items: ["Ideation", "Project planning"]
    },
    {
      number: "2",
      title: "Design",
      items: ["Wireframe", "UI/UX"]
    },
    {
      number: "3",
      title: "Development",
      items: ["Prototype", "Infrastructure QA"]
    },
    {
      number: "4",
      title: "Deployment",
      items: ["App & Play Store", "Project management"]
    }
  ];

  return (
    <div className="bg-black text-white w-full p-6 md:p-12">
      <div className="max-w-6xl mx-auto text-center md:text-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-[20px] md:mb-[40px] ">Our process</h1>

        <div className="flex flex-wrap justify-center gap-8 md:gap-[40px]">
          {steps.map((step) => (
            <div key={step.number} className="w-64 md:text-left text-center">
              <div>
                <span className="text-8xl md:text-[80px] leading-[50px] font-bold opacity-10">{step.number}</span>
              </div>
              <h2 className="text-xl md:text-[20px] leading-[18px] font-semibold mb-[10px]">{step.title}</h2>
              <ul className="">
                {step.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
