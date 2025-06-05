"use client";
import React from "react";

export default function ProjectGoals({ data }) {
  // Parse the stringified JSON data
  const parseProjectGoals = () => {
    try {
      if (data?.projectGoals) {
        // The data might be double-stringified, so we may need to parse twice
        let parsed = JSON.parse(data.projectGoals);

        // If it's still a string, parse again
        if (typeof parsed === "string") {
          parsed = JSON.parse(parsed);
        }

        // Check if parsed data is an array, if not, it might be an object containing an array
        if (Array.isArray(parsed)) {
          return parsed;
        } else if (parsed && typeof parsed === "object") {
          // If it's an object, look for an array property
          const firstKey = Object.keys(parsed)[0];
          if (Array.isArray(parsed[firstKey])) {
            return parsed[firstKey];
          }
        }
      }
      return [];
    } catch (error) {
      console.error("Error parsing project goals:", error);
      console.error("Raw data:", data?.projectGoals);
      return [];
    }
  };

  const projectGoals = parseProjectGoals();

  // Debug logging

  const imageUrl = data?.projectGoalImgURL;

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10">
          Project Goals
          <div className="w-16 h-1 bg-yellow-400 mx-auto mt-4"></div>
        </h1>

        {/* Desktop Layout - hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-5 gap-8 relative">
          {/* Left side content boxes */}
          <div className="col-span-2 space-y-32">
            {projectGoals
              .filter((goal, index) => index % 2 === 0)
              .map((goal) => (
                <div key={goal.id} className="bg-black p-6 rounded-lg">
                  <div className="text-8xl font-bold text-gray-700">
                    {goal.id}
                  </div>
                  <h3 className="text-[20px] font-bold mb-4">{goal.title}</h3>
                  <p className="text-gray-300">{goal.desc}</p>
                </div>
              ))}
          </div>

          {/* Center column with phone */}
          <div className="col-span-1 flex justify-center items-center relative">
            <div className="w-64 relative z-10">
              <img
                src={imageUrl}
                alt="Project Goal Interface"
                className="w-full h-auto"
              />
            </div>

            {/* Dotted lines */}
            <div className="absolute inset-0 w-full h-full">
              {/* Top-left to center - adjusted to match image */}
              <div
                className="absolute top-1/2 -left-[250px] w-full h-px border-t-2 border-dashed border-gray-600"
                style={{ width: "250px" }}
              ></div>
              <div className="absolute top-[40%] -left-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"></div>

              {/* Bottom-left to center - adjusted to match image */}
              <div
                className="absolute top-[46%] -left-[250px] w-full h-px border-t-2 border-dashed border-gray-600"
                style={{ width: "250px" }}
              ></div>
              <div className="absolute top-[50%] -left-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"></div>

              {/* Top-right to center - adjusted to match image */}
              <div
                className="absolute top-1/2 -right-[250px] w-full h-px border-t-2 border-dashed border-gray-600"
                style={{ width: "250px" }}
              ></div>
              <div className="absolute top-[40%] -right-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"></div>

              {/* Bottom-right to center - adjusted to match image */}
              <div
                className="absolute top-[46%] -right-[250px] w-full h-px border-t-2 border-dashed border-gray-600"
                style={{ width: "250px" }}
              ></div>
              <div className="absolute top-[50%] -right-[250px] h-[50px] w-px border-l-2 border-dashed border-gray-600"></div>
            </div>
          </div>

          {/* Right side content boxes */}
          <div className="col-span-2 space-y-32">
            {projectGoals
              .filter((goal, index) => index % 2 === 1)
              .map((goal) => (
                <div key={goal.id} className="bg-black p-6 rounded-lg">
                  <div className="text-8xl font-bold text-gray-700">
                    {goal.id}
                  </div>
                  <h3 className="text-[20px] font-bold mb-4">{goal.title}</h3>
                  <p className="text-gray-300">{goal.desc}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Mobile Layout - visible only on mobile */}
        <div className="md:hidden">
          <div className="mx-auto mb-12 w-64">
            <img
              src={imageUrl}
              alt="Project Goal Interface"
              className="w-full h-auto"
            />
          </div>

          <div className="space-y-12">
            {projectGoals.map((goal) => (
              <div key={goal.id} className="bg-black p-6 rounded-lg">
                <div className="text-6xl font-bold text-gray-700 mb-4">
                  {goal.id}
                </div>
                <h3 className="text-xl font-bold mb-3">{goal.title}</h3>
                <p className="text-gray-300 text-sm">{goal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
