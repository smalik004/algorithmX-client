import React from "react";

export default function ProcessSection({ data }) {
  let steps = [];

  try {
    // Try to parse if it's a string, otherwise use the data directly
    steps =
      typeof data?.businessProcess === "string"
        ? JSON.parse(data.businessProcess)
        : data?.businessProcess || [];
  } catch (err) {
    console.error("Failed to parse businessProcess:", err);
    steps = [];
  }

  return (
    <div className="bg-black text-white w-full p-6 md:p-12">
      <div className="max-w-6xl mx-auto text-center md:text-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-[20px] md:mb-[40px]">
          Our process
        </h1>

        <div className="flex flex-wrap justify-center gap-8 md:gap-[40px]">
          {Array.isArray(steps) &&
            steps.map((step, index) => (
              <div
                key={step.id || index}
                className="w-64 md:text-left text-center"
              >
                <div>
                  <span className="text-8xl md:text-[80px] leading-[50px] font-bold opacity-10">
                    {index + 1}
                  </span>
                </div>
                <h2 className="text-xl md:text-[20px] leading-[18px] font-semibold mb-[10px]">
                  {step.title}
                </h2>
                <p>{step.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
