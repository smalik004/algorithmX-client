export default function CTASectionBanner() {
  return (
    <div className="w-full">
      {/* Main CTA Strip Section */}
      <section className="relative h-[500px] px-4 bg-gradient-to-b from-black via-indigo-900/90 to-black">
        <div className="relative max-w-7xl mx-auto h-full">
          <div className="grid lg:grid-cols-2 gap-6 items-center h-full">
            {/* Left Side - Text Content */}
            <div className="text-left">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
                Build business resilience with our{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  digital transformation
                </span>{" "}
                solutions
              </h2>

              <p className="text-sm md:text-base text-purple-100/90 leading-relaxed">
                Optimize your business with customized solutions for operational efficacy and enterprise growth.
              </p>
            </div>

            {/* Right Side - CTA Button */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative inline-block group">
                <button 
                  className="relative bg-transparent hover:bg-bg-gray-100 hover:via-pink-700 hover:to-red-700 text-white font-bold px-6 py-3 text-sm lg:text-base transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500/30"
                  style={{
                    
                    borderRadius: '50px',
                    border: '1px solid #2775ea'
                  }}
                >
                  Schedule Free Consultation
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ borderRadius: '50px' }}></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}