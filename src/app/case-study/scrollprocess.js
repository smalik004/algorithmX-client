"use client";
import { useState, useEffect, useRef } from "react";

const MobileUISwitcher = ({ data }) => {
  const [mouseX, setMouseX] = useState(0.5);
  const containerRef = useRef(null);

  // Generate screen pairs based on API data
  const generateScreenPairs = () => {
    if (!data || !data.wireFrameURLs || !data.prototypeURLs) {
      return [];
    }

    const { wireFrameURLs, prototypeURLs, productType } = data;

    // Determine the number of screens based on product type
    const expectedScreenCount = productType === "web" ? 2 : 5;

    // Create screen pairs by matching wireframe and prototype URLs by index
    const screenPairs = [];
    const maxScreens = Math.min(
      wireFrameURLs.length,
      prototypeURLs.length,
      expectedScreenCount
    );

    for (let i = 0; i < maxScreens; i++) {
      screenPairs.push({
        dark: wireFrameURLs[i], // Wireframe as dark version
        light: prototypeURLs[i], // Prototype as light version
        width: 230,
      });
    }

    return screenPairs;
  };

  const screenPairs = generateScreenPairs();

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const relativeX = (e.clientX - containerRect.left) / containerRect.width;

      setMouseX(Math.max(0, Math.min(1, relativeX))); // Clamp between 0 and 1
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Calculate background gradient based on mouse position
  const leftColor = "#4c1d95"; // Deep purple
  const rightColor = "#1e40af"; // Deep blue
  const backgroundStyle = {
    background: `linear-gradient(to right, ${leftColor} ${
      mouseX * 100
    }%, ${rightColor} ${mouseX * 100}%)`,
    height: "100vh",
    width: "100%",
    transition: "background 0.05s ease",
  };

  // Return early if no data or screen pairs
  if (!data || screenPairs.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <p className="text-gray-600">
          No wireframe or prototype data available
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      style={backgroundStyle}
      className="relative overflow-hidden"
    >
      <div className="flex justify-center items-center h-full">
        <div className="overflow-x-auto max-w-full px-4 md:overflow-visible">
          <div className="flex space-x-4 relative w-max">
            {screenPairs.map((screen, index) => {
              const totalWidth = containerRef.current
                ? containerRef.current.clientWidth
                : 1200;
              const screenTotalWidth =
                screenPairs.length * screen.width +
                (screenPairs.length - 1) * 16;
              const startX = (totalWidth - screenTotalWidth) / 2;

              const screenStartX = startX + index * (screen.width + 16);
              const screenEndX = screenStartX + screen.width;

              let darkClipPercentage = 0;

              // Only calculate clip if the mouse is within the screen bounds
              if (containerRef.current) {
                const mouseAbsX = mouseX * totalWidth;
                if (mouseAbsX >= screenStartX && mouseAbsX <= screenEndX) {
                  const localX = mouseAbsX - screenStartX;
                  darkClipPercentage = (localX / screen.width) * 100;
                } else if (mouseAbsX > screenEndX) {
                  darkClipPercentage = 100;
                }
              }

              return (
                <div
                  key={index}
                  className="phone-frame relative"
                  style={{ width: `${screen.width}px` }}
                >
                  <div className="rounded-3xl overflow-hidden relative">
                    {/* Light version (prototype) */}
                    <img
                      src={screen.light}
                      alt={`${data.productType} prototype ${index + 1}`}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.src =
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY5NzM4MyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=";
                      }}
                    />
                    {/* Dark version (wireframe) - clipped based on mouse position */}
                    <div
                      className="absolute top-0 left-0 w-full h-full"
                      style={{
                        clipPath: `polygon(0 0, ${darkClipPercentage}% 0, ${darkClipPercentage}% 100%, 0 100%)`,
                        pointerEvents: "none",
                      }}
                    >
                      <img
                        src={screen.dark}
                        alt={`${data.productType} wireframe ${index + 1}`}
                        className="w-full h-auto"
                        onError={(e) => {
                          e.target.src =
                            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzc0MTUxIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2Y5ZmFmYiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9ImNlbnRyYWwiPldpcmVmcmFtZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+";
                        }}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileUISwitcher;
