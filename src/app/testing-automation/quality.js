import React from "react";

const QAProcessDiagram = () => {
  const processSteps = [
    {
      rows: [
        { icon: "🔍", text: "Discovery & Requirement Analysis" },
        { icon: "📋", text: "Test Planning & Scope Definition" },
        { icon: "💻", text: "Test Design & Data Preparation" },
        { icon: "▶️", text: "Test Execution & Environment Control" },
        { icon: "🐞", text: "Defect Reporting & Triage" },
        { icon: "🚀", text: "Post-Release Validation" },
        { icon: "📊", text: "Reporting & Analytics" },
        { icon: "👥", text: "User Acceptance Testing (UAT)" },
        { icon: "🔄", text: "Regression Testing" },
        { icon: "📈", text: "Performance & Load Testing" },
      ],
    },
  ];

  return (
    <div className="bg-black pt-[100px] pb-[100px] py-8 flex flex-col items-center">
      <div className="container mx-auto px-4 max-w-[1200px] w-full">
        <h1 className="text-4xl font-bold text-center text-white mb-12">
          Our Quality Assurance Process & Methodology
        </h1>
        <div className="space-y-8">
          {processSteps.map((step, stepIndex) => (
            <div key={stepIndex} className="relative">
              {/* Grid for mobile and desktop */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {step.rows.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-700 rounded-lg p-4 text-center 
                               bg-black
                               flex flex-col items-center justify-center
                               transition-all duration-300 ease-in-out
                               hover:-translate-y-2
                               hover:shadow-lg hover:shadow-blue-500/50
                               hover:border-blue-500"
                  >
                    <div className="text-3xl mb-2 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-200 transition-colors duration-300">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QAProcessDiagram;
