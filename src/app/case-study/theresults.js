// Results.jsx
export default function Results() {
    const results = [
      {
        value: "4.5",
        label: "Average Rating on the Play and App Store",
        hasArrow: false
      },
      {
        value: "22%",
        label: "Conversion Rate",
        hasArrow: true
      },
      {
        value: "50%",
        label: "Total Orders Coming Through App",
        hasArrow: true
      },
      {
        value: "60%",
        label: "Repeat Purchases Across Channels",
        hasArrow: true
      },
      {
        value: "30,000+",
        label: "Orders Fulfilled Through App Per Day",
        hasArrow: false
      },
      {
        value: "100%",
        label: "Revenue Upliftment During Peak Holiday Seasons",
        hasArrow: false
      }
    ];
  
    return (
      <div className="bg-black py-16 px-4 md:px-8 lg:px-16 w-full relative overflow-hidden">
        {/* Background Watermark Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-[15vw] font-extrabold opacity-10 text-semi-white">
            The Results
          </h1>
        </div>
        
        <div className="max-w-[1200px] mx-auto relative z-10">
          
  
          <div className="grid grid-cols-2 md:grid-cols-3  gap-8 md:gap-10">
            {results.map((item, index) => (
              <div key={index} className="p-6 ">
                <div className="flex items-center">
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                    {item.value}
                  </span>
                  {item.hasArrow && (
                    <svg 
                      className="w-6 h-6 ml-2 text-orange-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 10l7-7m0 0l7 7m-7-7v18" 
                      />
                    </svg>
                  )}
                </div>
                <p className="text-white mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }