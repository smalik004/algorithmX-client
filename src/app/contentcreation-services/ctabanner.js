export default function CTASection() {
  return (
    <div className="py-[100px] bg-black">
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Background with gradient and pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-blue-500/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Main heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Craft Engaging Content{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              for Your Brand
            </span>{" "}
          
          </h2>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
           Get high-quality, compelling content designed to capture attention and convert readers.
          </p>

          {/* CTA Button */}
          <div className="relative inline-block group">
            <div className="absolute -inset-0.5  rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <button className="relative bg-transparent  border-[#2775ea]  border-[1px] hover:from-red-600 hover:to-red-700 text-white font-semibold px-8 py-2.5 rounded-lg text-base transition-all duration-300 transform hover:scale-105">
              Schedule a Free Consultation
              <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-blue-500/30 to-transparent"></div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"></div>
        </div>

        {/* Bottom fade effect */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/50 to-transparent"></div>
      </section>
    </div>
  );
}
